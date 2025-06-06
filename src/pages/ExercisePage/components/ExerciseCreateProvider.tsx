import React, {createContext, useContext, useEffect, useState} from "react";
import {Category, Type} from "types/enum";
import {ExerciseCreateReq} from "types/exercise";
import {Exercise} from "types/model";

type ExerciseCreateContextType = {
    // category: Category;
    // setCategory: React.Dispatch<React.SetStateAction<Category>>;

    image: ExerciseCreateReq["image"];
    setImage: React.Dispatch<React.SetStateAction<ExerciseCreateReq["image"]>>;
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
    image: "",
    setImage: () => {},
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
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState(Category.ALL);
    const [types, setTypes] = useState<Type[]>([]);

    useEffect(() => {
        console.log("ExerciseCreateProvider", {image, name, category, types});
    }, [image, name, category, types]);

    return (
        <ExerciseCreateContext.Provider
            value={{
                image,
                setImage,
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
