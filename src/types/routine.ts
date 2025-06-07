import {Routine} from "./model";

export type RoutineAllGetRes = Routine[];

export type RoutineDeleteReq = {
    id: string | number;
};

export type RoutineCreateReq = Omit<Routine, "id">;

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
