import React, {createContext, useContext, useState} from "react";

type WorkoutConfigAddParamsContextType = {
    workoutLibraryIds: string[];
    setWorkoutLibraryIds: React.Dispatch<React.SetStateAction<string[]>>;
};

const WorkoutConfigAddParamsContext =
    createContext<WorkoutConfigAddParamsContextType>({
        workoutLibraryIds: [],
        setWorkoutLibraryIds: () => {},
    });

type WorkoutConfigAddParamsProviderProps = {
    children: React.ReactNode;
};

const WorkoutConfigAddParamsProvider = ({
    children,
}: WorkoutConfigAddParamsProviderProps) => {
    const [workoutLibraryIds, setWorkoutLibraryIds] = useState<string[]>([]);

    return (
        <WorkoutConfigAddParamsContext.Provider
            value={{
                workoutLibraryIds,
                setWorkoutLibraryIds,
            }}
        >
            {children}
        </WorkoutConfigAddParamsContext.Provider>
    );
};

export const useWorkoutConfigAddParams = () =>
    useContext(WorkoutConfigAddParamsContext);

export default WorkoutConfigAddParamsProvider;
