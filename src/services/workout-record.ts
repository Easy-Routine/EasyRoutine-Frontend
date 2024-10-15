import { v4 as uuidv4 } from "uuid"; // UUID 생성을 위한 라이브러리
import { db, WorkoutRecord, WorkoutLibrary } from "db"; // WorkoutRecord 타입의 경로를 설정하세요.
import moment from "moment";
import { Period } from "type/Period";

type CreateWorkoutRecordOneParams = {
    routineRecordId: string;
    workoutLibrary: WorkoutLibrary; // 연결된 ����� 구성
};

export const createWorkoutRecordOne = async ({
    routineRecordId,
    workoutLibrary,
}: CreateWorkoutRecordOneParams): Promise<WorkoutRecord | null> => {
    const newWorkoutRecordOne: WorkoutRecord = {
        id: uuidv4(), // UUID로 ID 생성
        routineRecordId, // 연결된 루틴 기록 ID
        createdAt: new Date(), // 현재 날짜
        updatedAt: new Date(), // 현재 날짜
        setRecords: [],
        workoutLibrary: workoutLibrary, // 연결된 ����� 라이브러리
    };

    try {
        await db.workoutRecords.add(newWorkoutRecordOne); // 데이터베이스에 추가
        console.log("WorkoutRecord created:", newWorkoutRecordOne);
        return newWorkoutRecordOne; // 생성된 운동 기록 반환
    } catch (error) {
        console.error("Error creating WorkoutRecord:", error);
        throw error;
    }
};

export const deleteWorkoutRecordOne = async (
    workoutRecordId: string
): Promise<boolean> => {
    try {
        // 해당 workoutRecord에 연결된 모든 setRecord를 가져옵니다.
        const setRecords = await db.setRecords
            .where("workoutRecordId")
            .equals(workoutRecordId)
            .toArray();

        // 모든 setRecord를 삭제합니다.
        await Promise.all(
            setRecords.map((setRecord) => db.setRecords.delete(setRecord.id))
        );

        // workoutRecord 삭제
        await db.workoutRecords.delete(workoutRecordId);

        console.log(
            `WorkoutRecord and its related setRecords deleted for ID: ${workoutRecordId}`
        );
        return true; // 삭제 성공
    } catch (error) {
        console.error("Error deleting WorkoutRecord:", error);
        return false; // 오류 발생
    }
};

export const getWorkoutRecordSumAll = async ({
    workoutLibraryId,
    period,
}: {
    workoutLibraryId: string;
    period: Period;
}): Promise<{ key: string; value: number }[]> => {
    let startDate: moment.Moment;
    const endDate = moment(); // 현재 날짜

    switch (period) {
        case Period.Month:
            startDate = endDate.clone().subtract(1, "months").startOf("month"); // 최근 1달
            break;
        case Period.Quarter:
            startDate = endDate.clone().subtract(3, "months").startOf("month"); // 최근 3달
            break;
        case Period.Half:
            startDate = endDate.clone().subtract(6, "months").startOf("month"); // 최근 3달
            break;

        case Period.Year:
            startDate = endDate.clone().subtract(1, "years").startOf("year"); // 최근 1년
            break;
        case Period.All:
            startDate = moment(0); // Unix epoch 시작일
            break;
        default:
            throw new Error("Invalid type");
    }

    try {
        // workoutRecords를 가져오고, workoutLibrary.id로 필터링
        const workoutRecords = await db.workoutRecords
            .filter(
                (workoutRecord) =>
                    workoutRecord.workoutLibrary.id === workoutLibraryId
            )
            .toArray();

        // 각 workoutRecord에 setRecords 추가
        const workoutRecordsWithSets = await Promise.all(
            workoutRecords.map(async (workoutRecord) => {
                const setRecords = await db.setRecords
                    .where("workoutRecordId")
                    .equals(workoutRecord.id)
                    .toArray();
                return {
                    ...workoutRecord,
                    setRecords, // setRecords 추가
                };
            })
        );

        // 결과 데이터 형식으로 변환
        const workoutRecordByDateList: { key: string; value: number }[] = [];

        // 데이터 집계
        const groupedData: { [key: string]: number } = {};

        workoutRecordsWithSets.forEach((record) => {
            const recordDate = moment(record.createdAt);
            if (recordDate.isBetween(startDate, endDate, null, "[]")) {
                const dateKey = recordDate.format("MM.DD"); // 날짜 형식 설정
                const setValue = record.setRecords.reduce(
                    (setSum, set) => setSum + set.weight * set.rep,
                    0
                );

                if (!groupedData[dateKey]) {
                    groupedData[dateKey] = 0;
                }
                groupedData[dateKey] += setValue; // 값 집계
            }
        });

        // 결과를 배열로 변환 및 정렬
        Object.keys(groupedData).forEach((date) => {
            workoutRecordByDateList.push({
                key: date,
                value: groupedData[date],
            });
        });

        // 날짜 기준으로 정렬
        workoutRecordByDateList.sort((a, b) => {
            const dateA = moment(a.key, "MM.DD");
            const dateB = moment(b.key, "MM.DD");
            return dateA.diff(dateB);
        });

        console.log("결과 물", workoutRecordByDateList);
        return workoutRecordByDateList;
    } catch (error) {
        console.error("Error fetching workout records:", error);
        return []; // 오류 발생 시 빈 배열 반환
    }
};
