import { SetConfig, SetRecord } from "types/model";
import { db } from "db";
import moment from "moment";
import { CustomError, ErrorDefinitions } from "types/error";
import { handleError } from "utils/handleError";
import { v4 as uuidv4 } from "uuid";

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
        const newSetRecord: SetRecord = {
            _id: uuidv4(),
            workoutRecordId,
            rep: setConfig.rep,
            weight: setConfig.weight,
            restSec: setConfig.restSec,
            workoutSec: setConfig.workoutSec,
            createdAt: moment().toISOString(),
            updatedAt: moment().toISOString(),
        };
        const routineRecordOne = await db.routineRecords.get(routineRecordId);

        if (!routineRecordOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);

        const workoutRecordOne = routineRecordOne.workoutRecords.find(
            (workoutRecord) => workoutRecord._id === workoutRecordId
        );

        if (!workoutRecordOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);

        workoutRecordOne.setRecords.push(newSetRecord);

        await db.routineRecords.put(routineRecordOne);

        return newSetRecord;
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
        const routineRecordOne = await db.routineRecords.get(routineRecordId);

        if (!routineRecordOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);

        const workoutRecordOne = routineRecordOne.workoutRecords.find(
            (workoutRecord) => workoutRecord._id === workoutRecordId
        );

        if (!workoutRecordOne)
            throw new CustomError(ErrorDefinitions.NOT_FOUND);

        const latestSetRecordOne = workoutRecordOne.setRecords.sort(
            (a, b) =>
                moment(a.createdAt).valueOf() - moment(b.createdAt).valueOf()
        )[workoutRecordOne.setRecords.length - 1];

        const newSetRecords = workoutRecordOne.setRecords.filter(
            (setRecord) => setRecord._id !== latestSetRecordOne._id
        );
        workoutRecordOne.setRecords = newSetRecords;

        await db.routineRecords.put(routineRecordOne);

        return true;
    } catch (e) {
        handleError(e);
    }
};
