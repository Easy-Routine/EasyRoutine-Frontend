import { v4 as uuidv4 } from "uuid"; // UUID 생성을 위한 라이브러리
import { db, WorkoutRecord, WorkoutLibrary } from "db"; // WorkoutRecord 타입의 경로를 설정하세요.

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
