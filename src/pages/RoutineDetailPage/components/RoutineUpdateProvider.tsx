import React, {createContext, useContext, useEffect, useState} from "react";
import {Routine} from "types/model";

type RoutineUpdateContextType = {
    routine: Routine;
    setRoutine: React.Dispatch<React.SetStateAction<Routine>>;
};

const RoutineUpdateContext = createContext<RoutineUpdateContextType>({
    routine: {} as Routine,
    setRoutine: () => {},
});

type RoutineUpdateProviderProps = {
    defaultValue: Routine;
    children: React.ReactNode;
};

const RoutineUpdateProvider = ({
    defaultValue,
    children,
}: RoutineUpdateProviderProps) => {
    const [routine, setRoutine] = useState(defaultValue);

    useEffect(() => {
        console.log("루틴 설정 상태", routine);
    }, [routine]);

    return (
        <RoutineUpdateContext.Provider
            value={{
                routine,
                setRoutine,
            }}
        >
            {children}
        </RoutineUpdateContext.Provider>
    );
};

export const useRoutineUpdate = () => useContext(RoutineUpdateContext);

export default RoutineUpdateProvider;
