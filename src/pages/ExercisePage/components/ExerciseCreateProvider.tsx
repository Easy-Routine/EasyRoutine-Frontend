import React, {createContext, useContext, useEffect, useState} from "react";
import {Category, Type} from "types/enum";
import {ExerciseCreateReq} from "types/exercise";
import {Exercise} from "types/model";

type ExerciseCreateContextType = {
    // category: Category;
    // setCategory: React.Dispatch<React.SetStateAction<Category>>;

    imageUrl: ExerciseCreateReq["imageUrl"];
    setImageUrl: React.Dispatch<
        React.SetStateAction<ExerciseCreateReq["imageUrl"]>
    >;
    name: ExerciseCreateReq["name"];
    setName: React.Dispatch<React.SetStateAction<ExerciseCreateReq["name"]>>;
    category: ExerciseCreateReq["category"];
    setCategory: React.Dispatch<
        React.SetStateAction<ExerciseCreateReq["category"]>
    >;
    types: ExerciseCreateReq["types"];
    setTypes: React.Dispatch<React.SetStateAction<ExerciseCreateReq["types"]>>;
};

const ExerciseCreateContext = createContext<ExerciseCreateContextType>({
    imageUrl: "",
    setImageUrl: () => {},
    name: "",
    setName: () => {},
    category: Category.ALL,
    setCategory: () => {},
    types: [],
    setTypes: () => {},
});

type ExerciseCreateProviderProps = {
    children: React.ReactNode;
};

const ExerciseCreateProvider = ({children}: ExerciseCreateProviderProps) => {
    const [imageUrl, setImageUrl] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState(Category.ALL);
    const [types, setTypes] = useState<Type[]>([]);

    useEffect(() => {
        console.log("ExerciseCreateProvider", {
            imageUrl,
            name,
            category,
            types,
        });
    }, [imageUrl, name, category, types]);

    return (
        <ExerciseCreateContext.Provider
            value={{
                imageUrl,
                setImageUrl,
                name,
                setName,
                category,
                setCategory,
                types,
                setTypes,
            }}
        >
            {children}
        </ExerciseCreateContext.Provider>
    );
};

export const useExerciseCreate = () => useContext(ExerciseCreateContext);

export default ExerciseCreateProvider;
