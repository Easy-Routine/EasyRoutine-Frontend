import {SetConfig} from "types/model";
import {handleError} from "utils/handleError";

// 확인: 완료
export const createSetConfigOne = async ({
    workoutConfigId,
}: {
    workoutConfigId: string;
}): Promise<SetConfig | undefined> => {
    try {
        return undefined;
    } catch (error) {
        handleError(error);
    }
};

// 확인: 완료
export const updateSetConfigField = async ({
    routineConfigId,
    workoutConfigId,
    setConfigId,
    key,
    value,
}: {
    routineConfigId: string;
    workoutConfigId: string;
    setConfigId: string;
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
export const deleteSetConfigOne = async ({
    workoutConfigId,
}: {
    workoutConfigId: string;
}): Promise<boolean | undefined> => {
    try {
        return true;
    } catch (e) {
        handleError(e);
    }
};
