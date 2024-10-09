// db.ts
import Dexie, { type EntityTable } from "dexie";

export type RoutineConfig = {
    id: string;
    name: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    workoutConfigs: WorkoutConfig[];
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
    order: number;
    weight: number;
    rep: number;
    restSec: number;
    createdAt: Date;
    updatedAt: Date;
    workoutConfigId: string;
};

export type WorkoutLibrary = {
    id: string;
    name: string;
    workoutImage: string;
    workoutPart: string;
    type: string[];
    createdAt: Date;
    updatedAt: Date;
    userId: string;
};

const db = new Dexie("healper-client-db") as Dexie & {
    routineConfigs: EntityTable<RoutineConfig, "id">;
    workoutConfigs: EntityTable<WorkoutConfig, "id">;
    setConfigs: EntityTable<SetConfig, "id">;
    workoutLibraries: EntityTable<WorkoutLibrary, "id">;
};

// Schema declaration:
db.version(1).stores({
    routineConfigs:
        "id, name, color, createdAt, updatedAt, userId, workoutConfigs", // 쉼표 추가
    workoutConfigs:
        "id, createdAt, updatedAt, routineConfigId, setConfigs, workoutLibrary",
    setConfigs:
        "id, order, weight, rep, restSec, createdAt, updatedAt, workoutConfigId",
    workoutLibraries:
        "id, name, workoutImage, workoutPart, type, createdAt, updatedAt, userId",
});

export { db };
