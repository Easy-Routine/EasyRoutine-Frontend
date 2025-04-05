import {WorkoutRecord, WorkoutLibrary} from "types/model"; // WorkoutRecord 타입의 경로를 설정하세요.
import {Period} from "types/enum";
import {handleError} from "utils/handleError";

type CreateWorkoutRecordOneParams = {
    routineRecordId: string;
    workoutLibrary: WorkoutLibrary;
    workoutRecordId: string;
};

export const createWorkoutRecordOne = async ({
    routineRecordId,
    workoutLibrary,
    workoutRecordId,
}: CreateWorkoutRecordOneParams): Promise<WorkoutRecord | undefined> => {
    try {
        return undefined;
    } catch (error) {
        handleError(error);
    }
};
// 확인: 완료
export const deleteWorkoutRecordOne = async ({
    routineRecordId,
    workoutRecordId,
}: {
    routineRecordId: string;
    workoutRecordId: string;
}): Promise<boolean | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const getWorkoutRecordSumAll = async ({
    workoutLibraryId,
    period,
}: {
    workoutLibraryId: string;
    period: Period;
}): Promise<{key: string; value: number}[] | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
