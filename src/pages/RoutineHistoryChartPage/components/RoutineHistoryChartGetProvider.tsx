import React, {createContext, useContext, useEffect, useState} from "react";
import {Category, Period, Type} from "types/enum";

type RoutineHistoryChartGetContextType = {
    exerciseId: number;
    setExerciseId: React.Dispatch<React.SetStateAction<number>>;
    period: Period;
    setPeriod: React.Dispatch<React.SetStateAction<Period>>;
    type: Type | "";
    setType: React.Dispatch<React.SetStateAction<Type | "">>;
};

const RoutineHistoryChartGetContext =
    createContext<RoutineHistoryChartGetContextType>({
        exerciseId: 1,
        setExerciseId: () => {},
        period: Period.WEEK,
        setPeriod: () => {},
        type: "",
        setType: () => {},
    });

type RoutineHistoryChartGetProviderProps = {
    children: React.ReactNode;
};

const RoutineHistoryChartGetProvider = ({
    children,
}: RoutineHistoryChartGetProviderProps) => {
    const [exerciseId, setExerciseId] = useState(0);
    const [period, setPeriod] = useState<Period>(Period.WEEK);
    const [type, setType] = useState<Type | "">("");

    useEffect(() => {
        console.log("exerciseId:", exerciseId);
    }, [exerciseId, period]);

    return (
        <RoutineHistoryChartGetContext.Provider
            value={{
                exerciseId,
                setExerciseId,
                period,
                setPeriod,
                type,
                setType,
            }}
        >
            {children}
        </RoutineHistoryChartGetContext.Provider>
    );
};

export const useRoutineHistoryChartGet = () =>
    useContext(RoutineHistoryChartGetContext);

export default RoutineHistoryChartGetProvider;
