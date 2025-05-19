import {Color} from "./enum";

export type User = {
    _id: number;
    provider: string;
    providerId: string;
    name: string;
    email: string;
    profileImage: string;
};
export type Routine = {
    id: string;
    name: string;
    color: Color;
    routineExercises: RoutineExercise[];
};

export type RoutineExercise = {
    id: string;
    exercise: Exercise;
    sets: Set[];
};

export type Set = {
    id: string;
    weight?: number;
    rep?: number;
    workoutSec?: number;
    restSec: number;
};

export type RoutineHistory = {
    id: string;
    name: string;
    color: Color;
    workoutTime: number;
    routineExercises: RoutineExercise[];
};

export type Exercise = {
    id: string;
    name: string;
    image: string;
    originImage: string;
    category: string;
    type: string[];
    isEditable: boolean;
    createdAt: string;
    updatedAt: string;
};

// export type WorkoutRecord = {
//     _id: string;
//     workoutConfigId: string;
//     createdAt: string;
//     updatedAt: string;
//     routineRecordId: string;
//     setRecords: SetRecord[];
//     workoutLibrary: WorkoutLibrary;
// };

// export type SetRecord = {
//     _id: string;
//     weight: number;
//     rep: number;
//     restSec: number;
//     workoutSec: number;
//     createdAt: string;
//     updatedAt: string;
//     workoutRecordId: string;
//     [key: string]: any;
// };
