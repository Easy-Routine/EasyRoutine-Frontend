import { db, WorkoutConfig } from "db"; // 경로에 맞게 수정
import { v4 as uuidv4 } from "uuid"; // UUID 생성 라이브러리

export const createWorkoutConfigAll = async (
    workoutLibraryIds: string[],
    routineConfigId: string // routineConfigId를 추가하여 필수 매개변수로 설정
): Promise<WorkoutConfig[]> => {
    const newWorkoutConfigs: WorkoutConfig[] = [];

    try {
        // 각 workoutLibraryId에 대해 WorkoutLibrary 정보를 가져오기
        const workoutLibraries = await Promise.all(
            workoutLibraryIds.map(async (id) => {
                const workoutLibrary = await db.workoutLibraries.get(id); // 데이터베이스에서 운동 라이브러리 가져오기
                return workoutLibrary;
            })
        );

        // WorkoutConfig 생성
        workoutLibraries.forEach((workoutLibrary) => {
            if (workoutLibrary) {
                const newWorkoutConfig: WorkoutConfig = {
                    id: uuidv4(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId,
                    setConfigs: [],
                    workoutLibrary,
                };
                newWorkoutConfigs.push(newWorkoutConfig);
            }
        });

        // 데이터베이스에 WorkoutConfig 추가
        await db.workoutConfigs.bulkAdd(newWorkoutConfigs);
        console.log("WorkoutConfigs created:", newWorkoutConfigs);
        return newWorkoutConfigs; // 생성된 운동 구성 반환
    } catch (error) {
        console.error("Error creating WorkoutConfigs:", error);
        throw new Error("Failed to create workout configurations"); // 오류 발생 시 예외 던짐
    }
};
