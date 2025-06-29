import {Category, Type} from "./enum";
import {Response} from "./response";

export type ExerciseCreateReq = {
    imageUrl: string;
    name: string;
    types: Type[];
    category: Category;
};
export type ExerciseUpdateReq = {
    id: number;
    imageUrl: string;
    name: string;
    types: Type[];
    category: Category;
};

export type ExerciseAllGetReq = {
    category: Category;
    keyword: string;
};

export type ExerciseAllGetItem = {
    id: number;
    name: string;
    image: string;
    category: Category;
    types: Type[];
    isEditable: 1 | 0;
    shareLevel: 1 | 0;
};

export type ExerciseAllGetResult = {
    contents: ExerciseAllGetItem[];
    total: number;
};

export type ExerciseAllGetRes = Response<ExerciseAllGetResult>;

export type ExerciseDeleteReq = {
    id: number;
};

export type ImageUploadReq = {
    image: File;
};

export type ImageUploadRes = Response<string>;
