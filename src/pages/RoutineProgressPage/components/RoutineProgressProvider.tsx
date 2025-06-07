import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import useTimer from "hooks/client/useTimer";
import moment, {Moment} from "moment";
import React, {createContext, useContext, useEffect, useState} from "react";
import {Color} from "types/enum";
import {Routine, RoutineHistory, Set, RoutineExercise} from "types/model";

type RoutineProgressContextType = {
    routine: Routine;
    routineHistory: RoutineHistory;
    // currentWorkoutId: string;
    // currentSetId: string;
    // completedSetIds: string[];
    // currentRoutineExercise: RoutineExercise;
    // currentSet: Set;
    // routineExercises: RoutineExercise[];
    // sets: Set[];
    setRoutine: React.Dispatch<React.SetStateAction<Routine>>;
    setRoutineHistory: React.Dispatch<React.SetStateAction<RoutineHistory>>;
    // setCurrentWorkoutId: React.Dispatch<React.SetStateAction<string>>;
    // setCurrentSetId: React.Dispatch<React.SetStateAction<string>>;
    // setCompletedSetIds: React.Dispatch<React.SetStateAction<string[]>>;
    // 타이머 관련 프로퍼티
    endTime: Moment | null;
    isActive: boolean;
    startTimer: (initialSeconds: number) => void;
    skipTimer: () => void;
    remainingTime: number;
    // isAllCompleted: boolean;
};

const RoutineProgressContext = createContext<RoutineProgressContextType>({
    routine: {} as Routine,
    routineHistory: {} as RoutineHistory,
    // currentWorkoutId: "",
    // currentSetId: "",
    // completedSetIds: [],
    // currentRoutineExercise: {} as RoutineExercise,
    // currentSet: {} as Set,
    // routineExercises: [],
    // sets: [],
    setRoutine: () => {},
    setRoutineHistory: () => {},
    // setCurrentWorkoutId: () => {},
    // setCurrentSetId: () => {},
    // setCompletedSetIds: () => {},
    // 기본 타이머 값
    endTime: moment(),
    isActive: false,
    startTimer: () => {},
    skipTimer: () => {},
    remainingTime: 0,
    // isAllCompleted: false,
});

type RoutineProgressProps = {
    routine: Routine;
    children: React.ReactNode;
};

const RoutineProgressProvider = ({
    routine: rawRoutine,
    children,
}: RoutineProgressProps) => {
    const [routine, setRoutine] = useState(rawRoutine);
    const [routineHistory, setRoutineHistory] = useState<RoutineHistory>({
        id: routine.id,
        name: routine.name,
        color: routine.color as Color,
        workoutTime: 0,
        routineExercises: [],
    });
    // const [currentWorkoutId, setCurrentWorkoutId] = useState("");
    // const [currentSetId, setCurrentSetId] = useState("");
    // const [completedSetIds, setCompletedSetIds] = useState<string[]>([]);
    const {endTime, isActive, startTimer, skipTimer, remainingTime} =
        useTimer();

    useEffect(() => {
        console.log("디버그", routine, routineHistory);
    }, [routineHistory, routine]);

    // const {routineExercises} = routineProgress;
    // const currentRoutineExercise =
    //     routineExercises.find(
    //         routineExercise => routineExercise.id === currentWorkoutId,
    //     ) || ({} as RoutineExercise);

    // const sets = currentRoutineExercise?.sets || [];

    // const currentSet = sets.find(set => set.id === currentSetId) || ({} as Set);

    // const totalSetIds = routineExercises.flatMap(routineExercise =>
    //     routineExercise.sets.map(set => set.id),
    // );

    // const isAllCompleted = totalSetIds.length === completedSetIds.length;

    return (
        <RoutineProgressContext.Provider
            value={{
                routine,
                routineHistory,
                // routineExercises,
                // currentWorkoutId,
                // currentSetId,
                // completedSetIds,
                // currentRoutineExercise,
                // currentSet,
                // sets,
                setRoutine,
                setRoutineHistory,
                // setCurrentWorkoutId,
                // setCurrentSetId,
                // setCompletedSetIds,
                endTime,
                isActive,
                startTimer,
                skipTimer,
                remainingTime,
                // isAllCompleted,
            }}
        >
            {children}
        </RoutineProgressContext.Provider>
    );
};

export const useRoutineProgress = () => useContext(RoutineProgressContext);

export default RoutineProgressProvider;
