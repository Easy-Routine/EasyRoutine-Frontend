import { v4 as uuidv4 } from "uuid"; // UUID 생성을 위한 라이브러리
import { db, RoutineRecord } from "db";
import { Color } from "type/Color";

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
