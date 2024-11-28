// db.ts 파일에서 import

import { db, RoutineConfig } from "db"; // 경로에 맞게 수정
import moment from "moment";
import { Color } from "types/enum";
import { CustomError, ErrorDefinitions } from "types/error";
import api from "utils/axios";
import { handleError } from "utils/handleError";
import { v4 as uuidv4 } from "uuid";

// 확인: 완료
export const getRoutineConfigAll = async (): Promise<
    RoutineConfig[] | undefined
> => {
    try {
        // userId로 필터링하여 루틴 구성 가져오기
        const userId = localStorage.getItem("userId");

        if (!userId) {
            throw new CustomError(ErrorDefinitions.INVALID_DATA);
        }

        const routineConfigs = await db.routineConfigs
            .where("userId") // userId 필드에 대해 조건 설정
            .equals(userId as string) // userId와 일치하는 데이터만 가져오기
            .toArray()
            .then((configs) =>
                configs.sort(
                    (a, b) =>
                        moment(a.createdAt).valueOf() -
                        moment(b.createdAt).valueOf()
                )
            ); // date 기준으로 정렬

        return routineConfigs;
    } catch (e) {
        handleError(e);
    }
};

// 확인: 완료
export const getRoutineConfigOne = async (
    routineConfigId: string
): Promise<RoutineConfig | undefined> => {
    try {
        const routineConfig = await db.routineConfigs.get(routineConfigId);
        if (!routineConfig) {
            throw new CustomError(ErrorDefinitions.NOT_FOUND);
        }

        return routineConfig;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const createRoutineConfigOne = async ({
    name,
    color,
    userId,
}: {
    name: string;
    color: Color;
    userId: string;
}): Promise<RoutineConfig | undefined> => {
    try {
        const newRoutine: RoutineConfig = {
            _id: uuidv4(), // UUID로 _id 생성
            name,
            color,
            createdAt: moment().toISOString(), // 현재 날짜
            updatedAt: moment().toISOString(), // 현재 날짜
            userId,
            workoutConfigs: [], // 초기값은 빈 배열
        };

        await db.routineConfigs.add(newRoutine);

        return newRoutine;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const deleteRoutineConfigOne = async (
    routineConfigId: string
): Promise<boolean | undefined> => {
    try {
        await api.delete(`/routine-config/${routineConfigId}`);
        await db.routineConfigs.delete(routineConfigId);
        return true;
    } catch (error) {
        handleError(error);
    }
};

// 확인: 완료
export const updateRoutineConfigField = async (
    routineConfigId: string,
    key: string,
    value: string | Color
): Promise<RoutineConfig | undefined> => {
    try {
        const routineConfig = await db.routineConfigs.get(routineConfigId);

        if (!routineConfig) {
            throw new CustomError(ErrorDefinitions.NOT_FOUND);
        }

        routineConfig[key] = value;

        await db.routineConfigs.put(routineConfig);

        return routineConfig;
    } catch (e) {
        handleError(e);
    }
};
