// db.ts 파일에서 import
import {RoutineConfig} from "types/model"; // 경로에 맞게 수정
import {Color} from "types/enum";
import {handleError} from "utils/handleError";

// 확인: 완료
export const getRoutineConfigAll = async (): Promise<
    RoutineConfig[] | undefined
> => {
    try {
        return [];
    } catch (e) {
        handleError(e);
    }
};

// 확인: 완료
export const getRoutineConfigOne = async (
    routineConfigId: string,
): Promise<RoutineConfig | undefined> => {
    try {
        return undefined;
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
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const deleteRoutineConfigOne = async (
    routineConfigId: string,
): Promise<boolean | undefined> => {
    try {
        return true;
    } catch (error) {
        handleError(error);
    }
};

// 확인: 완료
export const updateRoutineConfigField = async (
    routineConfigId: string,
    key: string,
    value: string | Color,
): Promise<RoutineConfig | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
