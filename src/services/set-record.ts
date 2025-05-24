import {Set} from "types/model";
import {handleError} from "utils/handleError";

type CreateSetOneParams = {
    routineHistoryId: string;
    routineExerciseId: string;
    set: Set;
};
// 확인: 완료
export const createSetOne = async ({
    routineHistoryId,
    routineExerciseId,
    set,
}: CreateSetOneParams): Promise<Set | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};

type deleteSetOneParams = {
    routineHistoryId: string;
    routineExerciseId: string;
};
// 확인: 완료
export const deleteSetOne = async ({
    routineHistoryId,
    routineExerciseId,
}: deleteSetOneParams): Promise<boolean | undefined> => {
    try {
        return true;
    } catch (e) {
        handleError(e);
    }
};
