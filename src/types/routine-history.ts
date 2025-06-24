import {Routine, RoutineHistory} from "./model";

export type RoutineHistoryAllGetMonthlyReq = {date: Date};
export type RoutineHistoryAllGetDailyReq = {date: Date};

export type RoutineHistoryAllGetMonthlyRes = RoutineHistory[];
export type RoutineHistoryAllGetDailyRes = RoutineHistory[];

export type RoutineHistoryDeleteReq = {
    id: string | number;
};

export type RoutineHistoryCreateReq = Omit<Routine, "id">;

export type RoutineHistoryUpdateReq = Routine;
