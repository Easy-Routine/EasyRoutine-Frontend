import React, {createContext, useContext, useState} from "react";
import {Category, Type} from "types/enum";
import {ExerciseUpdateReq} from "types/exercise";
import {Exercise} from "types/model";

type ExerciseUpdateContextType = {
    id: ExerciseUpdateReq["id"];
    setId: React.Dispatch<React.SetStateAction<ExerciseUpdateReq["id"]>>;
    image: ExerciseUpdateReq["image"];
    setImage: React.Dispatch<React.SetStateAction<ExerciseUpdateReq["image"]>>;
    name: ExerciseUpdateReq["name"];
    setName: React.Dispatch<React.SetStateAction<ExerciseUpdateReq["name"]>>;
    category: ExerciseUpdateReq["category"];
    setCategory: React.Dispatch<
        React.SetStateAction<ExerciseUpdateReq["category"]>
    >;
    types: ExerciseUpdateReq["types"];
    setTypes: React.Dispatch<React.SetStateAction<ExerciseUpdateReq["types"]>>;
};

const ExerciseUpdateContext = createContext<ExerciseUpdateContextType>({
    id: 0,
    setId: () => {},
    image: "",
    setImage: () => {},
    name: "",
    setName: () => {},
    category: Category.ALL,
    setCategory: () => {},
    types: [],
    setTypes: () => {},
});

type ExerciseUpdateProviderProps = {
    children: React.ReactNode;
};

const ExerciseUpdateProvider = ({children}: ExerciseUpdateProviderProps) => {
    const [id, setId] = useState(0);
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState<Category>(Category.CHEST);
    const [types, setTypes] = useState<Type[]>([]);

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
