import {RoutineRecord} from "types/model";
import {Color} from "types/enum";
import {DotDataByDate} from "components/business/routine-record/RoutineRecordAllMonthlyCalendar";
import {handleError} from "utils/handleError";

// 확인: 완료
export const createRoutineRecordOne = async ({
    id,
    name,
    color,
    userId,
}: {
    id: string;
    name: string;
    color: Color;
    userId: string;
}): Promise<RoutineRecord | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const getRoutineRecordAllMonthly = async ({
    date,
}: {
    date: Date;
}): Promise<DotDataByDate[] | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};

// 확인: 완료
export const getRoutineRecordAllDaily = async ({
    date,
}: {
    date: Date;
}): Promise<RoutineRecord[] | undefined> => {
    try {
        return undefined;
    } catch (error) {
        handleError(error);
    }
};

// 확인: 완료
export const getRoutineRecordOne = async (
    routineRecordId: string,
): Promise<RoutineRecord | undefined> => {
    try {
        return undefined;
    } catch (e) {
        handleError(e);
    }
};
// 확인: 완료
export const deleteRoutineRecordOne = async (
    routineRecordId: string,
): Promise<boolean | undefined> => {
    try {
        return true;
    } catch (e) {
        handleError(e);
    }
};

type UpdateRoutineRecordWorkoutEndAtParmas = {
    routineRecordId: string;
    workoutTime: number;
};
// 확인: 완료
export const updateRoutineRecordWorkoutEndAt = async ({
    routineRecordId,
    workoutTime,
}: UpdateRoutineRecordWorkoutEndAtParmas): Promise<
    RoutineRecord | undefined
> => {
    try {
        return undefined; // 업데이트된 루틴 기록 반환
    } catch (e) {
        handleError(e);
    }
};
