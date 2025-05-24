import {RoutineExercise} from "types/model"; // 경로에 맞게 수정
import {handleError} from "utils/handleError";

// 확인: 완료
export const createRoutineExerciseAll = async (
    exerciseIds: string[],
    routineId: string,
): Promise<RoutineExercise[] | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const deleteRoutineExerciseOne = async ({
    routineExerciseId,
}: {
    routineExerciseId: string;
}): Promise<boolean | undefined> => {
    try {
        return true; // 삭제 성공
    } catch (e) {
        handleError(e);
    }
};
