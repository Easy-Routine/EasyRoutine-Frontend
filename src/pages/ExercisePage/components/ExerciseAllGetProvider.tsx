import React, {createContext, useContext, useState} from "react";
import {Category} from "types/enum";
import {Exercise} from "types/model";

type ExerciseAllGetContextType = {
    category: Category;
    name: string;
    setCategory: React.Dispatch<React.SetStateAction<Category>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
};

const ExerciseAllGetContext = createContext<ExerciseAllGetContextType>({
    category: Category.ALL,
    name: "",
    setCategory: () => {},
    setName: () => {},
});

type ExerciseAllGetProviderProps = {
    children: React.ReactNode;
};

const ExerciseAllGetProvider = ({children}: ExerciseAllGetProviderProps) => {
    const [category, setCategory] = useState(Category.ALL);
    const [name, setName] = useState("");

    return (
        <ExerciseAllGetContext.Provider
            value={{
                category,
                name,
                setCategory,
                setName,
            }}
        >
            {children}
        </ExerciseAllGetContext.Provider>
    );
};

export const useExerciseAllGetProvider = () =>
    useContext(ExerciseAllGetContext);

export default ExerciseAllGetProvider;
