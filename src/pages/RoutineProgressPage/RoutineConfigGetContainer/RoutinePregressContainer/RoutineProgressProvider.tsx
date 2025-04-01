import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import useTimer from "hooks/client/useTimer";
import moment, {Moment} from "moment";
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
    // 타이머 관련 프로퍼티
    endTime: Moment | null;
    isActive: boolean;
    startTimer: (initialSeconds: number) => void;
    skipTimer: () => void;
    remainingTime: number;
    isAllCompleted: boolean;
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
    // 기본 타이머 값
    endTime: moment(),
    isActive: false,
    startTimer: () => {},
    skipTimer: () => {},
    remainingTime: 0,
    isAllCompleted: false,
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
    const {endTime, isActive, startTimer, skipTimer, remainingTime} =
        useTimer();

    const {workoutConfigs} = routineProgress;
    const currentWorkoutConfig =
        workoutConfigs.find(
            workoutConfig => workoutConfig._id === currentWorkoutId,
        ) || ({} as WorkoutConfig);

    const setConfigs = currentWorkoutConfig?.setConfigs || [];

    const currentSetConfig =
        setConfigs.find(setConfig => setConfig._id === currentSetId) ||
        ({} as SetConfig);

    const totalSetIds = workoutConfigs.flatMap(workoutConfig =>
        workoutConfig.setConfigs.map(setConfig => setConfig._id),
    );

    const isAllCompleted = totalSetIds.length === completedSetIds.length;

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
                endTime,
                isActive,
                startTimer,
                skipTimer,
                remainingTime,
                isAllCompleted,
            }}
        >
            {children}
        </RoutineProgressContext.Provider>
    );
};

export const useRoutineProgress = () => useContext(RoutineProgressContext);

export default RoutineProgressProvider;
