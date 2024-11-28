import { db, WorkoutConfig } from "db"; // 경로에 맞게 수정
import moment from "moment";
import { CustomError, ErrorDefinitions } from "types/error";
import { handleError } from "utils/handleError";
import { v4 as uuidv4 } from "uuid"; // UUID 생성 라이브러리

// 확인: 완료
export const createWorkoutConfigAll = async (
    workoutLibraryIds: string[],
    routineConfigId: string
): Promise<WorkoutConfig[] | undefined> => {
    try {
        const routineConfigOne = await db.routineConfigs.get(routineConfigId);

        if (!routineConfigOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);

        const newWorkoutConfigs: WorkoutConfig[] = structuredClone(
            routineConfigOne.workoutConfigs
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
                    createdAt: moment().toISOString(),
                    updatedAt: moment().toISOString(),
                    routineConfigId,
                    setConfigs: [],
                    workoutLibrary,
                };
                newWorkoutConfigs.push(newWorkoutConfig);
            }
        });

        routineConfigOne.workoutConfigs = newWorkoutConfigs;
        await db.routineConfigs.put(routineConfigOne);

        return newWorkoutConfigs;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const deleteWorkoutConfigOne = async ({
    routineConfigId,
    workoutConfigId,
}: {
    routineConfigId: string;
    workoutConfigId: string;
}): Promise<boolean | undefined> => {
    try {
        const routineConfigOne = await db.routineConfigs.get(routineConfigId);

        if (!routineConfigOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);

        const newWorkoutConfigs = routineConfigOne.workoutConfigs.filter(
            (workoutConfig) => workoutConfig._id !== workoutConfigId
        );
        routineConfigOne.workoutConfigs = newWorkoutConfigs;
        await db.routineConfigs.put(routineConfigOne);

        return true; // 삭제 성공
    } catch (e) {
        handleError(e);
    }
};
