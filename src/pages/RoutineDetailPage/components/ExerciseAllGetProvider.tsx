import useExerciseAllGetQuery from "hooks/server/useExerciseAllGetQuery";
import React, {createContext, useContext, useState} from "react";
import {Category} from "types/enum";
import {ExerciseAllGetReq} from "types/exercise";
import {Exercise} from "types/model";

type ExerciseAllGetContextType = {
    category: ExerciseAllGetReq["category"];
    name: ExerciseAllGetReq["name"];
    setCategory: React.Dispatch<
        React.SetStateAction<ExerciseAllGetReq["category"]>
    >;
    setName: React.Dispatch<React.SetStateAction<ExerciseAllGetReq["name"]>>;
    workoutLibraries: Exercise[];
};

const ExerciseAllGetContext = createContext<ExerciseAllGetContextType>({
    category: Category.ALL,
    name: "",
    setCategory: () => {},
    setName: () => {},
    workoutLibraries: [],
});

type ExerciseAllGetProviderProps = {
    children: React.ReactNode;
};

const ExerciseAllGetProvider = ({children}: ExerciseAllGetProviderProps) => {
    const [category, setCategory] = useState(Category.ALL);
    const [name, setName] = useState("");

    const {data: ExerciseAllGetData} = useExerciseAllGetQuery({name, category});

    const workoutLibraries = ExerciseAllGetData ?? [];

    return (
        <ExerciseAllGetContext.Provider
            value={{
                category,
                name,
                setCategory,
                setName,
                workoutLibraries,
            }}
        >
            {children}
        </ExerciseAllGetContext.Provider>
    );
};

export const useExerciseAllGet = () => useContext(ExerciseAllGetContext);

export default ExerciseAllGetProvider;
