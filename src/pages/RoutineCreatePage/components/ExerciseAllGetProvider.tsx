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

    const {data: ExerciseAllGetData} = useExerciseAllGetQuery({name, category});

    const exercises = ExerciseAllGetData ?? [];

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
