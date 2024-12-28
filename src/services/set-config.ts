import {SetConfig} from "types/model";
import {db} from "db";
import moment from "moment";
import {CustomError, ErrorDefinitions} from "types/error";
import {handleError} from "utils/handleError";
import {v4 as uuidv4} from "uuid";

// 확인: 완료
export const createSetConfigOne = async ({
    routineConfigId,
    workoutConfigId,
}: {
    routineConfigId: string;
    workoutConfigId: string;
}): Promise<SetConfig | undefined> => {
    try {
        const routineConfigOne = await db.routineConfigs.get(routineConfigId);

        if (!routineConfigOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);

        const workoutConfigOne = routineConfigOne.workoutConfigs.find(
            workoutConfig => workoutConfig._id === workoutConfigId,
        );
        if (!workoutConfigOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);

        const lastSetConfigOne =
            workoutConfigOne.setConfigs[workoutConfigOne.setConfigs.length - 1];

        const newSetConfig: SetConfig = {
            _id: uuidv4(),
            workoutConfigId,
            rep: lastSetConfigOne?.rep || 0,
            weight: lastSetConfigOne?.weight || 0,
            restSec: lastSetConfigOne?.restSec || 0,
            workoutSec: lastSetConfigOne?.workoutSec || 0,
            createdAt: moment().toISOString(),
            updatedAt: moment().toISOString(),
        };

        workoutConfigOne.setConfigs.push(newSetConfig);

        await db.routineConfigs.put(routineConfigOne);

        return newSetConfig;
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
        const routineConfigOne = await db.routineConfigs.get(routineConfigId);

        if (!routineConfigOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);

        const workoutConfigOne = routineConfigOne.workoutConfigs.find(
            workoutConfig => workoutConfig._id === workoutConfigId,
        );

        if (!workoutConfigOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);

        const setConfigOne = workoutConfigOne.setConfigs.find(
            setConfig => setConfig._id === setConfigId,
        );

        if (setConfigOne) {
            setConfigOne[key] = value;
            setConfigOne.updatedAt = moment().toISOString();
        }
        await db.routineConfigs.put(routineConfigOne);

        return true;
    } catch (e) {
        handleError(e);
    }
};

// 확인: 완료
export const deleteSetConfigOne = async ({
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

        const workoutConfigOne = routineConfigOne.workoutConfigs.find(
            workoutConfig => workoutConfig._id === workoutConfigId,
        );

        if (!workoutConfigOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);

        const latestSetConfigOne = workoutConfigOne.setConfigs.sort(
            (a, b) =>
                moment(a.createdAt).valueOf() - moment(b.createdAt).valueOf(),
        )[workoutConfigOne.setConfigs.length - 1];

        // 최신 setConfig 삭제
        const newSetConfigs = workoutConfigOne.setConfigs.filter(
            setConfig => setConfig._id !== latestSetConfigOne._id,
        );
        workoutConfigOne.setConfigs = newSetConfigs;

        await db.routineConfigs.put(routineConfigOne); // 변경된 routineConfig 저장

        return true;
    } catch (e) {
        handleError(e);
    }
};
