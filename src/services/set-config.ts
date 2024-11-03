import { db, SetConfig } from "db";
import { v4 as uuidv4 } from "uuid";

// 확인: 완료
export const createSetConfigOne = async ({
    routineConfigId,
    workoutConfigId,
}: {
    routineConfigId: string;
    workoutConfigId: string;
}): Promise<SetConfig | null> => {
    const newSetConfig: SetConfig = {
        _id: uuidv4(),
        workoutConfigId,
        rep: 0,
        weight: 0,
        restSec: 0,
        workoutSec: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    try {
        const routineConfigOne = await db.routineConfigs.get(routineConfigId);
        if (routineConfigOne) {
            const workoutConfigOne = routineConfigOne.workoutConfigs.find(
                (workoutConfig) => workoutConfig._id === workoutConfigId
            );
            if (workoutConfigOne) {
                workoutConfigOne.setConfigs.push(newSetConfig);
            }
            await db.routineConfigs.put(routineConfigOne);
        }

        return newSetConfig;
    } catch (error) {
        console.error("Error creating SetConfig:", error);
        return null;
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
}): Promise<boolean | null> => {
    try {
        const routineConfigOne = await db.routineConfigs.get(routineConfigId);
        if (routineConfigOne) {
            const workoutConfigOne = routineConfigOne.workoutConfigs.find(
                (workoutConfig) => workoutConfig._id === workoutConfigId
            );
            if (workoutConfigOne) {
                const setConfigOne = workoutConfigOne.setConfigs.find(
                    (setConfig) => setConfig._id === setConfigId
                );

                if (setConfigOne) {
                    setConfigOne[key] = value;
                    setConfigOne.updatedAt = new Date();
                }
            }
            await db.routineConfigs.put(routineConfigOne);
        }

        return true;
    } catch (error) {
        console.error("Error updating SetConfig:", error);
        return null; // 오류 발생 시 null 반환
    }
};

// 확인: 완료
export const deleteSetConfigOne = async ({
    routineConfigId,
    workoutConfigId,
}: {
    routineConfigId: string;
    workoutConfigId: string;
}): Promise<boolean> => {
    try {
        const routineConfigOne = await db.routineConfigs.get(routineConfigId);
        if (routineConfigOne) {
            const workoutConfigOne = routineConfigOne.workoutConfigs.find(
                (workoutConfig) => workoutConfig._id === workoutConfigId
            );
            if (workoutConfigOne) {
                const latestSetConfigOne = workoutConfigOne.setConfigs.sort(
                    (a, b) =>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                )[0];

                // 최신 setConfig 삭제
                const newSetConfigs = workoutConfigOne.setConfigs.filter(
                    (setConfig) => setConfig._id !== latestSetConfigOne._id
                );

                // 삭제 후 setConfigs를 시간 순서에 따라 정렬
                workoutConfigOne.setConfigs = newSetConfigs.sort(
                    (a, b) =>
                        new Date(a.createdAt).getTime() -
                        new Date(b.createdAt).getTime()
                );
            }
            await db.routineConfigs.put(routineConfigOne); // 변경된 routineConfig 저장
        }

        return true;
    } catch (error) {
        console.error("Error deleting SetConfig:", error);
        return false; // 오류 발생
    }
};
