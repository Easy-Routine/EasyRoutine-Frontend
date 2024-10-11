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
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    [key: string]: any;
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
        "id, weight, rep, restSec, createdAt, updatedAt, workoutConfigId",
    workoutLibraries:
        "id, name, image, category, type, createdAt, updatedAt, userId",
});

export { db };
