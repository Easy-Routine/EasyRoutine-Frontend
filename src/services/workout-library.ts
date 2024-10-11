import { db, WorkoutLibrary } from "db";
import { v4 as uuidv4 } from "uuid";

export const getWorkoutLibraryAll = async (): Promise<WorkoutLibrary[]> => {
    try {
        // 데이터베이스에서 모든 운동 가져오기
        const workoutsLibraries = await db.workoutLibraries.toArray();
        return workoutsLibraries; // 운동 배열 반환
    } catch (error) {
        console.error("Error fetching workout library:", error);
        throw new Error("Failed to fetch workout library"); // 오류 발생 시 예외 던짐
    }
};

export const getWorkoutLibraryOne = async (
    workoutLibraryId: string
): Promise<WorkoutLibrary | null> => {
    try {
        // 데이터베이스에서 특정 운동 라이브러리 가져오기
        const workoutLibrary = await db.workoutLibraries.get(workoutLibraryId);
        return workoutLibrary || null; // 운동 라이브러리 반환
    } catch (error) {
        console.error("Error fetching workout library:", error);
        throw new Error("Failed to fetch workout library"); // 오류 발생 시 예외 던짐
    }
};

export const createWorkoutLibraryOne = async (
    workoutData: Omit<WorkoutLibrary, "id" | "createdAt" | "updatedAt">
): Promise<WorkoutLibrary | null> => {
    const newWorkoutLibraryOne: WorkoutLibrary = {
        id: uuidv4(), // UUID로 ID 생성
        name: workoutData.name,
        image: workoutData.image,
        category: workoutData.category,
        type: workoutData.type,
        createdAt: new Date(), // 현재 날짜
        updatedAt: new Date(), // 현재 날짜
        userId: workoutData.userId, // 사용자 ID
    };

    try {
        await db.workoutLibraries.add(newWorkoutLibraryOne); // 데이터베이스에 추가
        console.log("WorkoutConfig created:", newWorkoutLibraryOne);
        return newWorkoutLibraryOne; // 생성된 운동 구성 반환
    } catch (error) {
        console.error("Error creating WorkoutConfig:", error);
        return null; // 오류 발생 시 null 반환
    }
};
