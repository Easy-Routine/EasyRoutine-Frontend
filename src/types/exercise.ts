import {Category, Type} from "./enum";

export type ExerciseCreateReq = {
    image: string;
    name: string;
    types: Type[];
    category: Category;
};
