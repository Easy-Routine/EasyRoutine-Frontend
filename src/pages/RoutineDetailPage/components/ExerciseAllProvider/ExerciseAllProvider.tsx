import useGetExerciseAllQuery from "hooks/server/useExerciseAllGetQuery";
import React, {createContext, useContext, useState} from "react";
import {Category} from "types/enum";
import {Exercise} from "types/model";

type ExerciseAllContextType = {
    category: Category;
    name: string;
    setCategory: React.Dispatch<React.SetStateAction<Category>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
    workoutLibraries: Exercise[];
};

const ExerciseAllContext = createContext<ExerciseAllContextType>({
    category: Category.ALL,
    name: "",
    setCategory: () => {},
    setName: () => {},
    workoutLibraries: [],
});

type ExerciseAllProviderProps = {
    children: React.ReactNode;
};

const ExerciseAllProvider = ({children}: ExerciseAllProviderProps) => {
    const [category, setCategory] = useState(Category.ALL);
    const [name, setName] = useState("");

    const {data: exerciseAllData} = useGetExerciseAllQuery(name, category);

    const workoutLibraries = exerciseAllData ?? [];

    return (
        <ExerciseAllContext.Provider
            value={{
                category,
                name,
                setCategory,
                setName,
                workoutLibraries,
            }}
        >
            {children}
        </ExerciseAllContext.Provider>
    );
};

export const useExerciseAll = () => useContext(ExerciseAllContext);

export default ExerciseAllProvider;
