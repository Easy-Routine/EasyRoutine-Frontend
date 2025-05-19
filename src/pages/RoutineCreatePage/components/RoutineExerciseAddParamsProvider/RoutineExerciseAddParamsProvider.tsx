import React, {createContext, useContext, useState} from "react";

type RoutineExerciseAddParamsContextType = {
    exerciseIds: string[];
    setExerciseIds: React.Dispatch<React.SetStateAction<string[]>>;
};

const RoutineExerciseAddParamsContext =
    createContext<RoutineExerciseAddParamsContextType>({
        exerciseIds: [],
        setExerciseIds: () => {},
    });

type RoutineExerciseAddParamsProviderProps = {
    children: React.ReactNode;
};

const RoutineExerciseAddParamsProvider = ({
    children,
}: RoutineExerciseAddParamsProviderProps) => {
    const [exerciseIds, setExerciseIds] = useState<string[]>([]);

    return (
        <RoutineExerciseAddParamsContext.Provider
            value={{
                exerciseIds,
                setExerciseIds,
            }}
        >
            {children}
        </RoutineExerciseAddParamsContext.Provider>
    );
};

export const useRoutineExerciseAddParams = () =>
    useContext(RoutineExerciseAddParamsContext);

export default RoutineExerciseAddParamsProvider;
