import { db, WorkoutConfig } from "db"; // 경로에 맞게 수정
import { v4 as uuidv4 } from "uuid"; // UUID 생성 라이브러리

// 확인: 완료
export const createWorkoutConfigAll = async (
    workoutLibraryIds: string[],
    routineConfigId: string
): Promise<WorkoutConfig[]> => {
    try {
        const routineConfigOne = await db.routineConfigs.get(routineConfigId);

        if (routineConfigOne) {
            const newWorkoutConfigs: WorkoutConfig[] = structuredClone(
                routineConfigOne?.workoutConfigs
            );

            const workoutLibraries = await Promise.all(
                workoutLibraryIds.map(async (_id) => {
                    const workoutLibrary = await db.workoutLibraries.get(_id); // 데이터베이스에서 운동 라이브러리 가져오기
                    return workoutLibrary;
                })
            );

            // WorkoutConfig 생성
            workoutLibraries.forEach((workoutLibrary) => {
                if (workoutLibrary) {
                    const newWorkoutConfig: WorkoutConfig = {
                        _id: uuidv4(),
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        routineConfigId,
                        setConfigs: [],
                        workoutLibrary,
                    };
                    newWorkoutConfigs.push(newWorkoutConfig);
                }
            });

            if (routineConfigOne) {
                routineConfigOne.workoutConfigs = newWorkoutConfigs;
                await db.routineConfigs.put(routineConfigOne);
            }

            return newWorkoutConfigs;
        }

        return [];
        // 생성된 운동 구성 반환
    } catch (error) {
        console.error("Error creating WorkoutConfigs:", error);
        throw new Error("Failed to create workout configurations"); // 오류 발생 시 예외 던짐
    }
};
// 확인: 완료
export const deleteWorkoutConfigOne = async ({
    routineConfigId,
    workoutConfigId,
}: {
    routineConfigId: string;
    workoutConfigId: string;
}): Promise<boolean> => {
    try {
        const routineConfigOne = await db.routineConfigs.get(routineConfigId);

        if (routineConfigOne) {
            const newWorkoutConfigs = routineConfigOne.workoutConfigs.filter(
                (workoutConfig) => workoutConfig._id !== workoutConfigId
            );
            routineConfigOne.workoutConfigs = newWorkoutConfigs;
            await db.routineConfigs.put(routineConfigOne);
        }

        return true; // 삭제 성공
    } catch (error) {
        console.error("Error deleting WorkoutConfig:", error);
        return false; // 오류 발생
    }
};
