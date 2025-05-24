// db.ts
import Dexie, {type EntityTable} from "dexie";
import {Routine, RoutineHistory, Exercise} from "types/model";

const db = new Dexie("healper-client-db") as Dexie & {
    routines: EntityTable<Routine, "id">;
    workoutLibraries: EntityTable<Exercise, "id">;
    routineHistorys: EntityTable<RoutineHistory, "id">;
};

// Schema declaration:
db.version(2).stores({
    routines: "id, name, color, createdAt, updatedAt, userId, routineExercises", // 쉼표 추가
    workoutLibraries:
        "id, name, image, category, type, createdAt, updatedAt, userId",
    routineHistorys:
        "id, name, color, workoutTime, createdAt, updatedAt, userId, routineExercises", // 쉼표 추가
});

export {db};
