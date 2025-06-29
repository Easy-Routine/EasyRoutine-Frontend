import useExerciseAllGetQuery from "hooks/server/useExerciseAllGetQuery";
import React, {createContext, useContext, useState} from "react";
import {Category} from "types/enum";
import {ExerciseAllGetReq} from "types/exercise";
import {Exercise} from "types/model";

type ExerciseAllGetContextType = {
    category: ExerciseAllGetReq["category"];
    keyword: ExerciseAllGetReq["keyword"];
    setCategory: React.Dispatch<
        React.SetStateAction<ExerciseAllGetReq["category"]>
    >;
    setKeyword: React.Dispatch<
        React.SetStateAction<ExerciseAllGetReq["keyword"]>
    >;
    exercises: Exercise[];
};

const ExerciseAllGetContext = createContext<ExerciseAllGetContextType>({
    category: Category.ALL,
    keyword: "",
    setCategory: () => {},
    setKeyword: () => {},
    exercises: [],
});

type ExerciseAllGetProviderProps = {
    children: React.ReactNode;
};

const ExerciseAllGetProvider = ({children}: ExerciseAllGetProviderProps) => {
    const [category, setCategory] = useState(Category.ALL);
    const [keyword, setKeyword] = useState("");

    const {data} = useExerciseAllGetQuery({keyword, category});

    const exercises = data?.exercises ?? [];

    return (
        <ExerciseAllGetContext.Provider
            value={{
                category,
                keyword,
                setCategory,
                setKeyword,
                exercises,
            }}
        >
            {children}
        </ExerciseAllGetContext.Provider>
    );
};

export const useExerciseAllGet = () => useContext(ExerciseAllGetContext);

export default ExerciseAllGetProvider;
