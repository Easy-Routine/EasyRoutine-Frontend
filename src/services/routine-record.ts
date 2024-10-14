import { v4 as uuidv4 } from "uuid"; // UUID 생성을 위한 라이브러리
import { db, RoutineRecord } from "db";
import { Color } from "type/Color";
import { DotDataByDate } from "components/content/CustomCalendar/CustomCalendar";
import moment from "moment";

export const createRoutineRecordOne = async ({
    name,
    color,
    userId,
}: {
    name: string; // 루틴 구성 ID
    color: Color; // 사용자 ID
    userId: string; // 루틴 수행 날짜
}): Promise<RoutineRecord | null> => {
    const newRoutineRecord: RoutineRecord = {
        id: uuidv4(), // UUID로 ID 생성
        name,
        color,
        createdAt: new Date(), // 현재 날짜
        updatedAt: new Date(), // 현재 날짜
        userId,
        workoutRecords: [], // 초기값은 빈 배열
    };

    try {
        await db.routineRecords.add(newRoutineRecord); // 데이터베이스에 추가
        console.log("RoutineRecord created:", newRoutineRecord);
        return newRoutineRecord; // 생성된 루틴 기록 반환
    } catch (error) {
        console.error("Error creating RoutineRecord:", error);
        throw error;
    }
};

export const getRoutineRecordAllMonthly = async ({
    date,
}: {
    date: Date;
}): Promise<DotDataByDate[]> => {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0); // 해당 월의 마지막 날

    try {
        // 해당 월의 모든 루틴 기록 가져오기
        const routineRecords = await db.routineRecords
            .where("createdAt")
            .between(startDate, endDate, true, true) // 시작일과 종료일 사이의 레코드
            .toArray();

        console.log(routineRecords, "응아");

        // 날짜별로 루틴 기록 그룹화
        const groupedRecords: { [key: string]: any[] } = {};

        routineRecords.forEach((record) => {
            const recordDate = record.createdAt.toISOString().split("T")[0]; // YYYY-MM-DD 형식으로 변환
            if (!groupedRecords[recordDate]) {
                groupedRecords[recordDate] = [];
            }
            groupedRecords[recordDate].push(record);
        });

        // 요구하는 형식으로 변환
        const result = Object.keys(groupedRecords).map((recordDate) => ({
            date: recordDate,
            routineRecords: groupedRecords[recordDate],
        }));

        console.log(result, "엌ㅋㅋ");
        return result;
    } catch (error) {
        console.error("Error fetching routine records:", error);
        return []; // 오류 발생 시 빈 배열 반환
    }
};

export const getRoutineRecordAllDaily = async ({
    date,
}: {
    date: Date;
}): Promise<RoutineRecord[] | null> => {
    const targetDateStart = moment(date).startOf("day").toDate(); // 날짜의 시작
    const targetDateEnd = moment(date).endOf("day").toDate(); // 날짜의 끝

    try {
        // 해당 날짜에 해당하는 루틴 기록 가져오기
        const routineRecords = await db.routineRecords
            .where("createdAt")
            .between(targetDateStart, targetDateEnd, true, true) // 날짜 범위에 해당하는 레코드
            .toArray();

        // 각 루틴 기록에 대해 관련된 운동 기록과 세트 기록을 가져오기
        const result: RoutineRecord[] = await Promise.all(
            routineRecords.map(async (routineRecord) => {
                const workoutRecords = await db.workoutRecords
                    .where("routineRecordId")
                    .equals(routineRecord.id) // 루틴 기록 ID에 해당하는 운동 기록
                    .toArray();

                // 각 운동 기록에 대해 세트 기록을 가져오기
                const workoutRecordsWithSets = await Promise.all(
                    workoutRecords.map(async (workoutRecord) => {
                        const setRecords = await db.setRecords
                            .where("workoutRecordId")
                            .equals(workoutRecord.id) // 운동 기록 ID에 해당하는 세트 기록
                            .toArray();

                        return {
                            ...workoutRecord,
                            setRecords, // 세트 기록 추가
                        };
                    })
                );

                return {
                    ...routineRecord,
                    workoutRecords: workoutRecordsWithSets, // 운동 기록 추가
                };
            })
        );

        console.log("결과", result);
        return result;
    } catch (error) {
        console.error(
            "Error fetching routine records for the given date:",
            error
        );
        return null; // 오류 발생 시 null 반환
    }
};

export const getRoutineRecordOne = async (
    routineRecordId: string
): Promise<RoutineRecord | null> => {
    try {
        // 주어진 ID로 루틴 구성 가져오기
        const routineRecord = await db.routineRecords.get(routineRecordId);

        if (!routineRecord) {
            console.error("RoutineRecord not found");
            return null; // 루틴이 없는 경우 null 반환
        }

        // 루틴에 연결된 운동 구성 가져오기
        const workoutRecords = await db.workoutRecords
            .where("routineRecordId")
            .equals(routineRecordId)
            .toArray();

        // 각 운동에 연결된 세트 구성 가져오기
        const workoutRecordsWithSets = await Promise.all(
            workoutRecords.map(async (workout) => {
                const setRecords = await db.setRecords
                    .where("workoutRecordId")
                    .equals(workout.id)
                    .toArray(); // 먼저 모든 세트 구성 가져오기

                // createdAt에 따라 정렬
                setRecords.sort(
                    (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
                );

                // 운동 구성에 세트 구성 추가
                return {
                    ...workout,
                    setRecords, // 세트 구성 추가
                };
            })
        );

        // 운동 구성 createdAt에 따라 정렬
        workoutRecordsWithSets.sort(
            (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
        );

        // 루틴 구성에 운동 구성 추가
        routineRecord.workoutRecords = workoutRecordsWithSets;

        return routineRecord; // 루틴 구성 반환
    } catch (error) {
        console.error("Error fetching RoutineRecord:", error);
        return null; // 오류 발생 시 null 반환
    }
};

export const deleteRoutineRecordOne = async (
    routineRecordId: string
): Promise<boolean> => {
    try {
        // 해당 루틴 구성에 연결된 모든 workoutRecord를 가져옵니다.
        const workoutRecords = await db.workoutRecords
            .where("routineRecordId")
            .equals(routineRecordId)
            .toArray();

        // 각 workoutRecord에 연결된 setRecord를 삭제합니다.
        await Promise.all(
            workoutRecords.map(async (workoutRecord) => {
                // 해당 workoutRecord에 연결된 모든 setRecord를 가져옵니다.
                const setRecords = await db.setRecords
                    .where("workoutRecordId")
                    .equals(workoutRecord.id)
                    .toArray();

                // setRecord를 삭제합니다.
                await Promise.all(
                    setRecords.map((setRecord) =>
                        db.setRecords.delete(setRecord.id)
                    )
                );
            })
        );

        // workoutRecord를 삭제합니다.
        await Promise.all(
            workoutRecords.map((workoutRecord) =>
                db.workoutRecords.delete(workoutRecord.id)
            )
        );

        // 루틴 구성 삭제
        await db.routineRecords.delete(routineRecordId);

        console.log(
            `RoutineRecord and its related workoutRecords and setRecords deleted for ID: ${routineRecordId}`
        );
        return true; // 삭제 성공
    } catch (error) {
        console.error("Error deleting RoutineRecord:", error);
        return false; // 오류 발생
    }
};
