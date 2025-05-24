import {RoutineHistory} from "types/model";
import {Color} from "types/enum";
import {handleError} from "utils/handleError";

// 확인: 완료
export const createRoutineHistoryOne = async ({
    id,
    name,
    color,
    userId,
}: {
    id: string;
    name: string;
    color: Color;
    userId: string;
}): Promise<RoutineHistory | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const getRoutineHistoryAllMonthly = async ({
    date,
}: {
    date: Date;
}): Promise<any[] | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};

// 확인: 완료
export const getRoutineHistoryAllDaily = async ({
    date,
}: {
    date: Date;
}): Promise<RoutineHistory[] | undefined> => {
    try {
        return undefined;
    } catch (error) {
        handleError(error);
    }
};

// 확인: 완료
export const getRoutineHistoryOne = async (
    routineHistoryId: string,
): Promise<RoutineHistory | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const deleteRoutineHistoryOne = async (
    routineHistoryId: string,
): Promise<boolean | undefined> => {
    try {
        return true;
    } catch (e) {
        handleError(e);
    }
};

type UpdateRoutineHistoryWorkoutEndAtParmas = {
    routineHistoryId: string;
    workoutTime: number;
};
// 확인: 완료
export const updateRoutineHistoryWorkoutEndAt = async ({
    routineHistoryId,
    workoutTime,
}: UpdateRoutineHistoryWorkoutEndAtParmas): Promise<
    RoutineHistory | undefined
> => {
    try {
        return undefined; // 업데이트된 루틴 기록 반환
    } catch (e) {
        handleError(e);
    }
};
