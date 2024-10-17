import { SetConfig, SetRecord, db } from "db";
import { v4 as uuidv4 } from "uuid";

type CreateSetRecordOneParams = {
    workoutRecordId: string;
    setConfig: SetConfig;
};

export const createSetRecordOne = async ({
    workoutRecordId,
    setConfig,
}: CreateSetRecordOneParams): Promise<SetRecord | null> => {
    const newSetRecord: SetRecord = {
        id: uuidv4(),
        workoutRecordId,
        rep: setConfig.rep,
        weight: setConfig.weight,
        restSec: setConfig.restSec,
        workoutSec: setConfig.workoutSec,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    try {
        await db.setRecords.add(newSetRecord);
        console.log("SetConfig created:", newSetRecord);
        return newSetRecord;
    } catch (error) {
        console.error("Error creating SetConfig:", error);
        return null;
    }
};

type deleteSetRecordOneParams = {
    workoutRecordId: string;
};

export const deleteSetRecordOne = async ({
    workoutRecordId,
}: deleteSetRecordOneParams): Promise<boolean> => {
    try {
        // workoutRecordId에 해당하는 모든 세트 기록 가져오기
        const setRecords = await db.setRecords
            .where("workoutRecordId")
            .equals(workoutRecordId)
            .toArray();

        // 삭제할 세트 기록이 없는 경우
        if (setRecords.length === 0) {
            console.log("No set records found for the given workoutRecordId.");
            return false; // 삭제할 레코드가 없는 경우
        }

        // createdAt 기준으로 가장 최근 레코드 찾기
        const latestSetRecord = setRecords.reduce((latest, current) => {
            return new Date(current.createdAt) > new Date(latest.createdAt)
                ? current
                : latest;
        });

        // 레코드 삭제
        await db.setRecords.delete(latestSetRecord.id);
        console.log("SetRecord deleted:", latestSetRecord);
        return true; // 삭제 성공
    } catch (error) {
        console.error("Error deleting SetRecord:", error);
        return false; // 삭제 실패
    }
};
