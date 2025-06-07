import React, {createContext, useContext, useState} from "react";

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
