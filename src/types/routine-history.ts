import {Period, Type} from "./enum";
import {Routine, RoutineHistory} from "./model";

export type RoutineHistoryAllGetMonthlyReq = {date: Date};
export type RoutineHistoryAllGetDailyReq = {date: Date};

export type RoutineHistoryAllGetMonthlyRes = RoutineHistory[];
export type RoutineHistoryAllGetDailyRes = RoutineHistory[];

export type RoutineHistoryDeleteReq = {
    id: string | number;
};

export type RoutineHistoryCreateReq = Omit<RoutineHistory, "id"> & {
    routineId: number;
};

export type RoutineHistoryUpdateReq = Routine;

export type RoutineHistoryGetReq = {routineHistoryId: string | number};
export type RoutineHistoryGetRes = RoutineHistory;

export type RoutineHistoryExerciseVolumeByPeriodAllGetReq = {
    exerciseId: number;
    period: Period;
    type: Type;
};

export type RoutineHistoryExerciseVolumeByPeriodAllGetRes = {
    key: string;
    value: number;
}[];
