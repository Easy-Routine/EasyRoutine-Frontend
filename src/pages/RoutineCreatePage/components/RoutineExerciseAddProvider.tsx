import React, {createContext, useContext, useEffect, useState} from "react";

type RoutineExerciseAddContextType = {
    exerciseIds: string[];
    setExerciseIds: React.Dispatch<React.SetStateAction<string[]>>;
};

const RoutineExerciseAddContext = createContext<RoutineExerciseAddContextType>({
    exerciseIds: [],
    setExerciseIds: () => {},
});

type RoutineExerciseAddProviderProps = {
    children: React.ReactNode;
};

const RoutineExerciseAddProvider = ({
    children,
}: RoutineExerciseAddProviderProps) => {
    const [exerciseIds, setExerciseIds] = useState<string[]>([]);

    useEffect(() => {
        console.log("exerciseId", exerciseIds);
    }, [exerciseIds]);

    return (
        <RoutineExerciseAddContext.Provider
            value={{
                exerciseIds,
                setExerciseIds,
            }}
        >
            {children}
        </RoutineExerciseAddContext.Provider>
    );
};

export const useRoutineExerciseAdd = () =>
    useContext(RoutineExerciseAddContext);

export default RoutineExerciseAddProvider;
