import React, {createContext, useContext, useState} from "react";
import {Category} from "types/enum";
import {Exercise} from "types/model";

type ExerciseUpdateContextType = {
    id: number;
    setId: React.Dispatch<React.SetStateAction<number>>;
    image: string | null;
    setImage: React.Dispatch<React.SetStateAction<string | null>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    types: string[];
    setTypes: React.Dispatch<React.SetStateAction<string[]>>;
};

const ExerciseUpdateContext = createContext<ExerciseUpdateContextType>({
    id: 0,
    setId: () => {},
    image: "",
    setImage: () => {},
    name: "",
    setName: () => {},
    category: "",
    setCategory: () => {},
    types: [],
    setTypes: () => {},
});

type ExerciseUpdateProviderProps = {
    children: React.ReactNode;
};

const ExerciseUpdateProvider = ({children}: ExerciseUpdateProviderProps) => {
    const [id, setId] = useState(0);
    const [image, setImage] = useState<string | null>("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [types, setTypes] = useState<string[]>([]);

    return (
        <ExerciseUpdateContext.Provider
            value={{
                id,
                setId,
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
        </ExerciseUpdateContext.Provider>
    );
};

export const useExerciseUpdate = () => useContext(ExerciseUpdateContext);

export default ExerciseUpdateProvider;
