import React, {createContext, useContext, useEffect, useState} from "react";
import {
    RoutineConfig,
    RoutineRecord,
    SetConfig,
    WorkoutConfig,
} from "types/model";

type RoutineProgressContextType = {
    routineProgress: RoutineConfig;
    routineRecord: RoutineRecord;
    currentWorkoutId: string;
    currentSetId: string;
    completedSetIds: string[];
    currentWorkoutConfig: WorkoutConfig;
    currentSetConfig: SetConfig;
    workoutConfigs: WorkoutConfig[];
    setConfigs: SetConfig[];
    setRoutineProgress: React.Dispatch<React.SetStateAction<RoutineConfig>>;
    setRoutineRecord: React.Dispatch<React.SetStateAction<RoutineRecord>>;
    setCurrentWorkoutId: React.Dispatch<React.SetStateAction<string>>;
    setCurrentSetId: React.Dispatch<React.SetStateAction<string>>;
    setCompletedSetIds: React.Dispatch<React.SetStateAction<string[]>>;
};

const RoutineProgressContext = createContext<RoutineProgressContextType>({
    routineProgress: {} as RoutineConfig,
    routineRecord: {} as RoutineRecord,
    currentWorkoutId: "",
    currentSetId: "",
    completedSetIds: [],
    currentWorkoutConfig: {} as WorkoutConfig,
    currentSetConfig: {} as SetConfig,
    workoutConfigs: [],
    setConfigs: [],
    setRoutineProgress: () => {},
    setRoutineRecord: () => {},
    setCurrentWorkoutId: () => {},
    setCurrentSetId: () => {},
    setCompletedSetIds: () => {},
});

type RoutineProgressProps = {
    routineConfig: RoutineConfig;
    children: React.ReactNode;
};

const RoutineProgressProvider = ({
    routineConfig,
    children,
}: RoutineProgressProps) => {
    const [routineProgress, setRoutineProgress] = useState(routineConfig);
    const [routineRecord, setRoutineRecord] = useState<RoutineRecord>(
        {} as RoutineRecord,
    );
    const [currentWorkoutId, setCurrentWorkoutId] = useState("");
    const [currentSetId, setCurrentSetId] = useState("");
    const [completedSetIds, setCompletedSetIds] = useState<string[]>([]);

    const {workoutConfigs} = routineProgress;
    const currentWorkoutConfig =
        workoutConfigs.find(
            workoutConfig => workoutConfig._id === currentWorkoutId,
        ) || ({} as WorkoutConfig);

    const setConfigs = currentWorkoutConfig?.setConfigs || [];

    const currentSetConfig =
        setConfigs.find(setConfig => setConfig._id === currentSetId) ||
        ({} as SetConfig);

    useEffect(() => {
        console.log(routineRecord, "데이터 변경");
    }, [routineRecord]);

    return (
        <RoutineProgressContext.Provider
            value={{
                routineProgress,
                routineRecord,
                currentWorkoutId,
                currentSetId,
                completedSetIds,
                workoutConfigs,
                currentWorkoutConfig,
                currentSetConfig,
                setConfigs,
                setRoutineProgress,
                setRoutineRecord,
                setCurrentWorkoutId,
                setCurrentSetId,
                setCompletedSetIds,
            }}
        >
            {children}
        </RoutineProgressContext.Provider>
    );
};

export const useRoutineProgress = () => {
    return useContext(RoutineProgressContext);
};

export default RoutineProgressProvider;
