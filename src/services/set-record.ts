import { SetConfig, SetRecord, db } from "db";
import moment from "moment";
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
}: CreateSetRecordOneParams): Promise<SetRecord | null> => {
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

    try {
        const routineRecordOne = await db.routineRecords.get(routineRecordId);
        if (routineRecordOne) {
            const workoutRecordOne = routineRecordOne.workoutRecords.find(
                (workoutRecord) => workoutRecord._id === workoutRecordId
            );
            if (workoutRecordOne) {
                workoutRecordOne.setRecords.push(newSetRecord);
            }
            await db.routineRecords.put(routineRecordOne);
        }

        return newSetRecord;
    } catch (error) {
        console.error("Error creating SetConfig:", error);
        return null;
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
}: deleteSetRecordOneParams): Promise<boolean> => {
    try {
        const routineRecordOne = await db.routineRecords.get(routineRecordId);
        if (routineRecordOne) {
            const workoutRecordOne = routineRecordOne.workoutRecords.find(
                (workoutRecord) => workoutRecord._id === workoutRecordId
            );
            if (workoutRecordOne) {
                const latestSetRecordOne = workoutRecordOne.setRecords.sort(
                    (a, b) =>
                        moment(b.createdAt).valueOf() -
                        moment(a.createdAt).valueOf()
                )[0];

                const newSetRecords = workoutRecordOne.setRecords.filter(
                    (setRecord) => setRecord._id !== latestSetRecordOne._id
                );
                workoutRecordOne.setRecords = newSetRecords;
            }
            await db.routineRecords.put(routineRecordOne);
        }

        return true;
    } catch (error) {
        console.error("Error deleting SetConfig:", error);
        return false; // 오류 발생
    }
};
