import useExerciseAllGetQuery from "hooks/server/useExerciseAllGetQuery";
import React, {createContext, useContext, useState} from "react";
import {Category} from "types/enum";
import {Exercise} from "types/model";

type ExerciseAllGetContextType = {
    category: Category;
    name: string;
    setCategory: React.Dispatch<React.SetStateAction<Category>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
    exercises: Exercise[];
};

const ExerciseAllGetContext = createContext<ExerciseAllGetContextType>({
    category: Category.ALL,
    name: "",
    setCategory: () => {},
    setName: () => {},
    exercises: [],
});

type ExerciseAllGetProviderProps = {
    children: React.ReactNode;
};

const ExerciseAllGetProvider = ({children}: ExerciseAllGetProviderProps) => {
    const [category, setCategory] = useState(Category.ALL);
    const [name, setName] = useState("");

    const {data} = useExerciseAllGetQuery({
        name,
        category,
    });

    const exercises = data?.exercises ?? [];

    return (
        <ExerciseAllGetContext.Provider
            value={{
                category,
                name,
                setCategory,
                setName,
                exercises,
            }}
        >
            {children}
        </ExerciseAllGetContext.Provider>
    );
};

export const useExerciseAllGet = () => useContext(ExerciseAllGetContext);

export default ExerciseAllGetProvider;
