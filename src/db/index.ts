// db.ts
import Dexie, { type EntityTable } from "dexie";
import { Color } from "type/Color";

export type RoutineConfig = {
    id: string;
    name: string;
    color: Color;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    workoutConfigs: WorkoutConfig[];
    [key: string]: any;
};

export type WorkoutConfig = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    routineConfigId: string;
    setConfigs: SetConfig[];
    workoutLibrary: WorkoutLibrary;
};

export type SetConfig = {
    id: string;
    weight: number;
    rep: number;
    restSec: number;
    workoutSec: number;
    createdAt: Date;
    updatedAt: Date;
    workoutConfigId: string;
    [key: string]: any;
};

export type WorkoutLibrary = {
    id: string;
    name: string;
    image: string;
    category: string;
    type: string[];
    isEditable: boolean;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    [key: string]: any;
};

export type RoutineRecord = {
    id: string;
    name: string;
    color: Color;
    workoutTime: number;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    workoutRecords: WorkoutRecord[];
    [key: string]: any;
};

export type WorkoutRecord = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    routineRecordId: string;
    setRecords: SetRecord[];
    workoutLibrary: WorkoutLibrary;
};

export type SetRecord = {
    id: string;
    weight: number;
    rep: number;
    restSec: number;
    workoutSec: number;
    createdAt: Date;
    updatedAt: Date;
    workoutRecordId: string;
    [key: string]: any;
};

const db = new Dexie("healper-client-db") as Dexie & {
    routineConfigs: EntityTable<RoutineConfig, "id">;
    workoutConfigs: EntityTable<WorkoutConfig, "id">;
    setConfigs: EntityTable<SetConfig, "id">;
    workoutLibraries: EntityTable<WorkoutLibrary, "id">;
    routineRecords: EntityTable<RoutineRecord, "id">;
    workoutRecords: EntityTable<WorkoutRecord, "id">;
    setRecords: EntityTable<SetRecord, "id">;
};

// Schema declaration:
db.version(1).stores({
    routineConfigs:
        "id, name, color, createdAt, updatedAt, userId, workoutConfigs", // 쉼표 추가
    workoutConfigs:
        "id, createdAt, updatedAt, routineConfigId, setConfigs, workoutLibrary",
    setConfigs:
        "id, weight, rep, restSec, workoutSec, createdAt, updatedAt, workoutConfigId",
    workoutLibraries:
        "id, name, image, category, type, createdAt, updatedAt, userId",
    routineRecords:
        "id, name, color, workoutTime, createdAt, updatedAt, userId, workoutRecords", // 쉼표 추가
    workoutRecords:
        "id, createdAt, updatedAt, routineRecordId, setRecords, workoutLibrary",
    setRecords:
        "id, weight, rep, restSec, workoutSec, createdAt, updatedAt, workoutRecordId",
});

export { db };
