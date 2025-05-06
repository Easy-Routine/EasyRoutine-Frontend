import {Color} from "./enum";

export type User = {
    _id: number;
    provider: string;
    providerId: string;
    name: string;
    email: string;
    profileImage: string;
};
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
    setConfigs: SetConfig[];
    workoutLibrary: WorkoutLibrary;
};

export type SetConfig = {
    _id: string;
    weight?: number;
    rep?: number;
    workoutSec?: number;
    restSec: number;
    createdAt: string;
    updatedAt: string;
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
    workoutConfigId: string;
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
