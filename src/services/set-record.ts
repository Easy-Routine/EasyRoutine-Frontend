import {SetConfig, SetRecord} from "types/model";
import {handleError} from "utils/handleError";

type CreateSetRecordOneParams = {
    routineRecordId: string;
    workoutRecordId: string;
    setConfig: SetConfig;
};
// 확인: 완료
export const createSetRecordOne = async ({
    routineRecordId,
    workoutRecordId,
    setConfig,
}: CreateSetRecordOneParams): Promise<SetRecord | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};

type deleteSetRecordOneParams = {
    routineRecordId: string;
    workoutRecordId: string;
};
// 확인: 완료
export const deleteSetRecordOne = async ({
    routineRecordId,
    workoutRecordId,
}: deleteSetRecordOneParams): Promise<boolean | undefined> => {
    try {
        return true;
    } catch (e) {
        handleError(e);
    }
};
