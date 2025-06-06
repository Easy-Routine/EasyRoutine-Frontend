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
