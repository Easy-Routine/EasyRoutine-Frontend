import React, {createContext, useContext, useState} from "react";
import {Category, Period} from "types/enum";

type RoutineHistoryChartGetContextType = {
    exerciseId: number;
    setExerciseId: React.Dispatch<React.SetStateAction<number>>;
    period: Period;
    setPeriod: React.Dispatch<React.SetStateAction<Period>>;
};

const RoutineHistoryChartGetContext =
    createContext<RoutineHistoryChartGetContextType>({
        exerciseId: 1,
        setExerciseId: () => {},
        period: Period.All,
        setPeriod: () => {},
    });

type RoutineHistoryChartGetProviderProps = {
    children: React.ReactNode;
};

const RoutineHistoryChartGetProvider = ({
    children,
}: RoutineHistoryChartGetProviderProps) => {
    const [exerciseId, setExerciseId] = useState(0);
    const [period, setPeriod] = useState<Period>(Period.All);

    return (
        <RoutineHistoryChartGetContext.Provider
            value={{
                exerciseId,
                setExerciseId,
                period,
                setPeriod,
            }}
        >
            {children}
        </RoutineHistoryChartGetContext.Provider>
    );
};

export const useRoutineHistoryChartGet = () =>
    useContext(RoutineHistoryChartGetContext);

export default RoutineHistoryChartGetProvider;
