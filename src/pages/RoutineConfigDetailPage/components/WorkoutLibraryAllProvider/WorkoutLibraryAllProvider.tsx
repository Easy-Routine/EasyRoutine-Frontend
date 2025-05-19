import usegetExerciseAllQuery from "hooks/server/useExerciseAllGetQuery";
import React, {createContext, useContext, useState} from "react";
import {Category} from "types/enum";
import {WorkoutLibrary} from "types/model";

type WorkoutLibraryAllContextType = {
    category: Category;
    name: string;
    setCategory: React.Dispatch<React.SetStateAction<Category>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
    workoutLibraries: WorkoutLibrary[];
};

const WorkoutLibraryAllContext = createContext<WorkoutLibraryAllContextType>({
    category: Category.ALL,
    name: "",
    setCategory: () => {},
    setName: () => {},
    workoutLibraries: [],
});

type WorkoutLibraryAllProviderProps = {
    children: React.ReactNode;
};

const WorkoutLibraryAllProvider = ({
    children,
}: WorkoutLibraryAllProviderProps) => {
    const [category, setCategory] = useState(Category.ALL);
    const [name, setName] = useState("");

    const {data: workoutLibraryAllData} = usegetExerciseAllQuery(
        name,
        category,
    );

    const workoutLibraries = workoutLibraryAllData ?? [];

    return (
        <WorkoutLibraryAllContext.Provider
            value={{
                category,
                name,
                setCategory,
                setName,
                workoutLibraries,
            }}
        >
            {children}
        </WorkoutLibraryAllContext.Provider>
    );
};

export const useWorkoutLibraryAll = () => useContext(WorkoutLibraryAllContext);

export default WorkoutLibraryAllProvider;
