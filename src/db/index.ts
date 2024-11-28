// db.ts
import Dexie, { type EntityTable } from "dexie";
import { RoutineConfig, RoutineRecord, WorkoutLibrary } from "types/model";

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
