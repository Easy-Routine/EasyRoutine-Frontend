import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import useTimer from "hooks/client/useTimer";
import moment, {Moment} from "moment";
import React, {createContext, useContext, useEffect, useState} from "react";
import {Routine, RoutineHistory, Set, RoutineExercise} from "types/model";

type RoutineProgressContextType = {
    routineProgress: Routine;
    routineHistory: RoutineHistory;
    currentWorkoutId: string;
    currentSetId: string;
    completedSetIds: string[];
    currentRoutineExercise: RoutineExercise;
    currentSet: Set;
    routineExercises: RoutineExercise[];
    sets: Set[];
    setRoutineProgress: React.Dispatch<React.SetStateAction<Routine>>;
    setRoutineHistory: React.Dispatch<React.SetStateAction<RoutineHistory>>;
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
    routineProgress: {} as Routine,
    routineHistory: {} as RoutineHistory,
    currentWorkoutId: "",
    currentSetId: "",
    completedSetIds: [],
    currentRoutineExercise: {} as RoutineExercise,
    currentSet: {} as Set,
    routineExercises: [],
    sets: [],
    setRoutineProgress: () => {},
    setRoutineHistory: () => {},
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
    routine: Routine;
    children: React.ReactNode;
};

const RoutineProgressProvider = ({routine, children}: RoutineProgressProps) => {
    const [routineProgress, setRoutineProgress] = useState(routine);
    const [routineHistory, setRoutineHistory] = useState<RoutineHistory>(
        {} as RoutineHistory,
    );
    const [currentWorkoutId, setCurrentWorkoutId] = useState("");
    const [currentSetId, setCurrentSetId] = useState("");
    const [completedSetIds, setCompletedSetIds] = useState<string[]>([]);
    const {endTime, isActive, startTimer, skipTimer, remainingTime} =
        useTimer();

    const {routineExercises} = routineProgress;
    const currentRoutineExercise =
        routineExercises.find(
            routineExercise => routineExercise.id === currentWorkoutId,
        ) || ({} as RoutineExercise);

    const sets = currentRoutineExercise?.sets || [];

    const currentSet = sets.find(set => set.id === currentSetId) || ({} as Set);

    const totalSetIds = routineExercises.flatMap(routineExercise =>
        routineExercise.sets.map(set => set.id),
    );

    const isAllCompleted = totalSetIds.length === completedSetIds.length;

    return (
        <RoutineProgressContext.Provider
            value={{
                routineProgress,
                routineHistory,
                currentWorkoutId,
                currentSetId,
                completedSetIds,
                routineExercises,
                currentRoutineExercise,
                currentSet,
                sets,
                setRoutineProgress,
                setRoutineHistory,
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
