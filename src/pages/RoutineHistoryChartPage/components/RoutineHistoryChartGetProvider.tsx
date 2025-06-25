import React, {createContext, useContext, useState} from "react";
import {Category} from "types/enum";

type RoutineHistoryChartGetContextType = {
    exerciseId: number;
    setExerciseId: React.Dispatch<React.SetStateAction<number>>;
};

const RoutineHistoryChartGetContext =
    createContext<RoutineHistoryChartGetContextType>({
        exerciseId: 1,
        setExerciseId: () => {},
    });

type RoutineHistoryChartGetProviderProps = {
    children: React.ReactNode;
};

const RoutineHistoryChartGetProvider = ({
    children,
}: RoutineHistoryChartGetProviderProps) => {
    const [exerciseId, setExerciseId] = useState(0);

    return (
        <RoutineHistoryChartGetContext.Provider
            value={{
                exerciseId,
                setExerciseId,
            }}
        >
            {children}
        </RoutineHistoryChartGetContext.Provider>
    );
};

export const useRoutineHistoryChartGet = () =>
    useContext(RoutineHistoryChartGetContext);

export default RoutineHistoryChartGetProvider;
