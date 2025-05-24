import {RoutineExercise, Exercise} from "types/model"; // RoutineExercise 타입의 경로를 설정하세요.
import {Period} from "types/enum";
import {handleError} from "utils/handleError";

type CreateRoutineExerciseOneParams = {
    routineHistoryId: string;
    exercise: Exercise;
    routineExerciseId: string;
};

export const createRoutineExerciseOne = async ({
    routineHistoryId,
    exercise,
    routineExerciseId,
}: CreateRoutineExerciseOneParams): Promise<RoutineExercise | undefined> => {
    try {
        return undefined;
    } catch (error) {
        handleError(error);
    }
};
// 확인: 완료
export const deleteRoutineExerciseOne = async ({
    routineHistoryId,
    routineExerciseId,
}: {
    routineHistoryId: string;
    routineExerciseId: string;
}): Promise<boolean | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const getExerciseSumAll = async ({
    exerciseId,
    period,
}: {
    exerciseId: string;
    period: Period;
}): Promise<{key: string; value: number}[] | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
