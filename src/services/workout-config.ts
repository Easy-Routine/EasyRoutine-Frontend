import {WorkoutConfig} from "types/model"; // 경로에 맞게 수정
import {handleError} from "utils/handleError";

// 확인: 완료
export const createWorkoutConfigAll = async (
    workoutLibraryIds: string[],
    routineConfigId: string,
): Promise<WorkoutConfig[] | undefined> => {
    try {
        return undefined;
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
        return true; // 삭제 성공
    } catch (e) {
        handleError(e);
    }
};
