import {Period, Type} from "./enum";
import {Routine, RoutineHistory} from "./model";
import {Response} from "./response";

export type RoutineHistoryAllGetMonthlyReq = {date: Date};
export type RoutineHistoryAllGetDailyReq = {date: Date};

export type RoutineHistoryAllGetMonthlyRes = RoutineHistory[];
export type RoutineHistoryAllGetDailyRes = Response<{
    contents: RoutineHistory[];
    total: number;
}>;

export type RoutineHistoryDeleteReq = {
    id: string | number;
};

export type RoutineHistoryCreateReq = Omit<RoutineHistory, "id"> & {
    routineId: number;
};

export type RoutineHistoryUpdateReq = Routine;

export type RoutineHistoryGetReq = {routineHistoryId: string | number};
export type RoutineHistoryGetRes = Response<RoutineHistory>;

export type RoutineHistoryExerciseVolumeByPeriodAllGetReq = {
    exerciseId: number;
    period: Period;
    type: Type;
};

export type RoutineHistoryExerciseVolumeByPeriodAllGetRes = {
    key: string;
    value: number;
}[];

export type RoutineHistorySummaryGetItem = {
    totalWorkoutTime: number;
    totalworkoutWeight: number;
};

export type RoutineHistorySummaryGetRes =
    Response<RoutineHistorySummaryGetItem>;

export type RoutineHistorySummaryGetReq = {date: Date};
