import React, {createContext, useContext, useState} from "react";
import {Category, Type} from "types/enum";
import {ExerciseUpdateReq} from "types/exercise";
import {Exercise} from "types/model";

type ExerciseUpdateContextType = {
    id: ExerciseUpdateReq["id"];
    setId: React.Dispatch<React.SetStateAction<ExerciseUpdateReq["id"]>>;
    imageUrl: ExerciseUpdateReq["imageUrl"];
    setImageUrl: React.Dispatch<
        React.SetStateAction<ExerciseUpdateReq["imageUrl"]>
    >;
    name: ExerciseUpdateReq["name"];
    setName: React.Dispatch<React.SetStateAction<ExerciseUpdateReq["name"]>>;
    category: ExerciseUpdateReq["category"];
    setCategory: React.Dispatch<
        React.SetStateAction<ExerciseUpdateReq["category"]>
    >;
    types: ExerciseUpdateReq["types"];
    setTypes: React.Dispatch<React.SetStateAction<ExerciseUpdateReq["types"]>>;

    mode: "update" | "delete";
    setMode: React.Dispatch<React.SetStateAction<"update" | "delete">>;
};

const ExerciseUpdateContext = createContext<ExerciseUpdateContextType>({
    id: 0,
    setId: () => {},
    imageUrl: "",
    setImageUrl: () => {},
    name: "",
    setName: () => {},
    category: Category.ALL,
    setCategory: () => {},
    types: [],
    setTypes: () => {},
    mode: "update",
    setMode: () => {},
});

type ExerciseUpdateProviderProps = {
    children: React.ReactNode;
};

const ExerciseUpdateProvider = ({children}: ExerciseUpdateProviderProps) => {
    const [id, setId] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState<Category>(Category.CHEST);
    const [types, setTypes] = useState<Type[]>([]);
    const [mode, setMode] = useState<"update" | "delete">("update");

    return (
        <ExerciseUpdateContext.Provider
            value={{
                id,
                setId,
                imageUrl,
                setImageUrl,
                name,
                setName,
                category,
                setCategory,
                types,
                setTypes,
                mode,
                setMode,
            }}
        >
            {children}
        </ExerciseUpdateContext.Provider>
    );
};

export const useExerciseUpdate = () => useContext(ExerciseUpdateContext);

export default ExerciseUpdateProvider;
