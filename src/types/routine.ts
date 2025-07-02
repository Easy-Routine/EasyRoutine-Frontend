import {Routine} from "./model";
import {Response} from "./response";

export type RoutineAllGetItem = Routine;

export type RoutineAllGetResult = {
    contents: RoutineAllGetItem[];
    total: number;
};

export type RoutineAllGetRes = Response<RoutineAllGetResult>;

export type RoutineGetItem = Routine;

export type RoutineGetResult = {
    contents: RoutineGetItem;
    total: number;
};

export type RoutineGetRes = Response<RoutineGetResult>;

export type RoutineDeleteReq = {
    id: string | number;
};

export type RoutineCreateReq = Omit<Routine, "id">;

export type RoutineUpdateReq = Routine;

// {
//     id: number;
//     name: string;
//     color: string;
//     routineExercises: {
//         id: number;
//         exercise: {
//             id: number;
//             name: string;
//             image: string | null;
//             category: string;
//             types: string[];
//             isEditable: number;
//             shareLevel: number;
//         };
//         sets: {
//             id: number;
//             weight: number;
//             rep: number;
//             restSec: number;
//             exerciseSec: number;
//         }[];
//     }[];
// }
