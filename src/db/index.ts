// db.ts
import Dexie, { type EntityTable } from "dexie";
import { Color } from "types/enum";

export type RoutineConfig = {
    _id: string;
    name: string;
    color: Color;
    createdAt: string;
    updatedAt: string;
    workoutConfigs: WorkoutConfig[];
    userId: string;
    [key: string]: any;
};

export type WorkoutConfig = {
    _id: string;
    createdAt: string;
    updatedAt: string;
    routineConfigId: string;
    setConfigs: SetConfig[];
    workoutLibrary: WorkoutLibrary;
};

export type SetConfig = {
    _id: string;
    weight: number;
    rep: number;
    restSec: number;
    workoutSec: number;
    createdAt: string;
    updatedAt: string;
    workoutConfigId: string;
    [key: string]: any;
};

export type WorkoutLibrary = {
    _id: string;
    name: string;
    image: string;
    originImage: string;
    category: string;
    type: string[];
    isEditable: boolean;
    createdAt: string;
    updatedAt: string;
    userId: string;
    [key: string]: any;
};

export type RoutineRecord = {
    _id: string;
    name: string;
    color: Color;
    workoutTime: number;
    createdAt: string;
    updatedAt: string;
    workoutRecords: WorkoutRecord[];
    userId: string;
    [key: string]: any;
};

export type WorkoutRecord = {
    _id: string;
    createdAt: string;
    updatedAt: string;
    routineRecordId: string;
    setRecords: SetRecord[];
    workoutLibrary: WorkoutLibrary;
};

export type SetRecord = {
    _id: string;
    weight: number;
    rep: number;
    restSec: number;
    workoutSec: number;
    createdAt: string;
    updatedAt: string;
    workoutRecordId: string;
    [key: string]: any;
};

const db = new Dexie("healper-client-db") as Dexie & {
    routineConfigs: EntityTable<RoutineConfig, "_id">;
    workoutLibraries: EntityTable<WorkoutLibrary, "_id">;
    routineRecords: EntityTable<RoutineRecord, "_id">;
};

// Schema declaration:
db.version(2).stores({
    routineConfigs:
        "_id, name, color, createdAt, updatedAt, userId, workoutConfigs", // 쉼표 추가
    workoutLibraries:
        "_id, name, image, category, type, createdAt, updatedAt, userId",
    routineRecords:
        "_id, name, color, workoutTime, createdAt, updatedAt, userId, workoutRecords", // 쉼표 추가
});

export { db };
