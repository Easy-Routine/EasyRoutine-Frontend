import {Set} from "types/model";
import {handleError} from "utils/handleError";

// 확인: 완료
export const createSetOne = async ({
    routineExerciseId,
}: {
    routineExerciseId: string;
}): Promise<Set | undefined> => {
    try {
        return undefined;
    } catch (error) {
        handleError(error);
    }
};

// 확인: 완료
export const updateSetField = async ({
    routineId,
    routineExerciseId,
    setId,
    key,
    value,
}: {
    routineId: string;
    routineExerciseId: string;
    setId: string;
    key: string;
    value: string;
}): Promise<boolean | undefined> => {
    try {
        return true;
    } catch (e) {
        handleError(e);
    }
};

// 확인: 완료
export const deleteSetOne = async ({
    routineExerciseId,
}: {
    routineExerciseId: string;
}): Promise<boolean | undefined> => {
    try {
        return true;
    } catch (e) {
        handleError(e);
    }
};
