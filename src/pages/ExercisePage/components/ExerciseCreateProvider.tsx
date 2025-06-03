import React, {createContext, useContext, useState} from "react";
import {Category} from "types/enum";
import {Exercise} from "types/model";

type ExerciseCreateContextType = {
    // category: Category;
    // setCategory: React.Dispatch<React.SetStateAction<Category>>;

    image: string;
    setImage: React.Dispatch<React.SetStateAction<string>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    category: Category;
    setCategory: React.Dispatch<React.SetStateAction<Category>>;
    type: string[];
    setType: React.Dispatch<React.SetStateAction<string[]>>;
};

const ExerciseCreateContext = createContext<ExerciseCreateContextType>({
    image: "",
    setImage: () => {},
    name: "",
    setName: () => {},
    category: Category.ALL,
    setCategory: () => {},
    type: [],
    setType: () => {},
});

type ExerciseCreateProviderProps = {
    children: React.ReactNode;
};

const ExerciseCreateProvider = ({children}: ExerciseCreateProviderProps) => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState(Category.ALL);
    const [type, setType] = useState<string[]>([]);

    return (
        <ExerciseCreateContext.Provider
            value={{
                image,
                setImage,
                name,
                setName,
                category,
                setCategory,
                type,
                setType,
            }}
        >
            {children}
        </ExerciseCreateContext.Provider>
    );
};

export const useExerciseCreate = () => useContext(ExerciseCreateContext);

export default ExerciseCreateProvider;
