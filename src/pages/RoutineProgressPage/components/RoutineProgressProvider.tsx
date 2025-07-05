import useTimer from "hooks/client/useTimer";
import moment, {Moment} from "moment";
import React, {createContext, useContext, useEffect, useState} from "react";
import {Color} from "types/enum";
import {Routine, RoutineHistory} from "types/model";

type RoutineProgressContextType = {
    routine: Routine;
    routineHistory: RoutineHistory;
    setRoutine: React.Dispatch<React.SetStateAction<Routine>>;
    setRoutineHistory: React.Dispatch<React.SetStateAction<RoutineHistory>>;
    // 타이머 관련 프로퍼티
    endTime: Moment | null;
    isActive: boolean;
    startTimer: (initialSeconds: number) => void;
    skipTimer: () => void;
    remainingTime: number;
    routineStartTime: Moment;
};

const RoutineProgressContext = createContext<RoutineProgressContextType>({
    routine: {} as Routine,
    routineHistory: {} as RoutineHistory,
    setRoutine: () => {},
    setRoutineHistory: () => {},
    // 기본 타이머 값
    endTime: moment(),
    isActive: false,
    startTimer: () => {},
    skipTimer: () => {},
    remainingTime: 0,
    routineStartTime: moment(),
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
        order: routine.order,
        name: routine.name,
        color: routine.color as Color,
        workoutTime: 0,
        createdAt: moment().toISOString(),
        routineExercises: [],
    });
    const {endTime, isActive, startTimer, skipTimer, remainingTime} =
        useTimer();

    const [routineStartTime, setRoutineStartTime] = useState<Moment>(moment());

    useEffect(() => {
        console.log("디버그", routine, routineHistory);
    }, [routineHistory, routine]);

    return (
        <RoutineProgressContext.Provider
            value={{
                routine,
                routineHistory,
                setRoutine,
                setRoutineHistory,
                endTime,
                isActive,
                startTimer,
                skipTimer,
                remainingTime,
                routineStartTime,
            }}
        >
            {children}
        </RoutineProgressContext.Provider>
    );
};

export const useRoutineProgress = () => useContext(RoutineProgressContext);

export default RoutineProgressProvider;
