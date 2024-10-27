import { v4 as uuidv4 } from "uuid"; // UUID 생성을 위한 라이브러리
import { db, RoutineRecord } from "db";
import { Color } from "type/Color";
import { DotDataByDate } from "components/content/CustomCalendar/CustomCalendar";
import moment from "moment";

// 확인: 완료
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
        workoutTime: 0,
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
// 확인: 완료
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
// 확인: 완료
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

        return routineRecords;
    } catch (error) {
        console.error(
            "Error fetching routine records for the given date:",
            error
        );
        return null; // 오류 발생 시 null 반환
    }
};
// 확인: 완료
export const getRoutineRecordOne = async (
    routineRecordId: string
): Promise<RoutineRecord | null> => {
    try {
        const routineRecord = await db.routineRecords.get(routineRecordId);

        if (!routineRecord) {
            console.error("RoutineRecord not found");
            return null;
        }

        return routineRecord;
    } catch (error) {
        console.error("Error fetching RoutineConfig:", error);
        return null;
    }
};
// 확인: 완료
export const deleteRoutineRecordOne = async (
    routineRecordId: string
): Promise<boolean> => {
    try {
        await db.routineRecords.delete(routineRecordId);
        return true;
    } catch (error) {
        console.error("Error deleting RoutineRecord:", error);
        return false; // 오류 발생
    }
};

type UpdateRoutineRecordWorkoutEndAtParmas = {
    routineRecordId: string;
    workoutTime: number;
};
// 확인: 완료
export const updateRoutineRecordWorkoutEndAt = async ({
    routineRecordId,
    workoutTime,
}: UpdateRoutineRecordWorkoutEndAtParmas): Promise<RoutineRecord | null> => {
    try {
        const routineRecord = await db.routineRecords.get(routineRecordId); // 루틴 기록 가져오기

        if (!routineRecord) {
            console.error("RoutineRecord not found");
            return null; // 루틴 기록이 없으면 null 반환
        }

        // 데이터베이스에 업데이트
        await db.routineRecords.update(routineRecordId, {
            workoutTime,
        });

        console.log("RoutineRecord updated:", routineRecord);
        return routineRecord; // 업데이트된 루틴 기록 반환
    } catch (error) {
        console.error("Error updating RoutineRecord:", error);
        throw error;
    }
};
