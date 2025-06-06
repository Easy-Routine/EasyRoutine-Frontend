import {Category, Type} from "./enum";

export type ExerciseCreateReq = {
    image: string;
    name: string;
    types: Type[];
    category: Category;
};
export type ExerciseUpdateReq = {
    id: number;
    image: string;
    name: string;
    types: Type[];
    category: Category;
};

export type ExerciseAllGetReq = {
    category: Category;
    name: string;
};

export type ExerciseAllGetRes = {
    id: number;
    name: string;
    image: string;
    category: Category;
    types: Type[];
    isEditable: 1 | 0;
    shareLevel: 1 | 0;
}[];
