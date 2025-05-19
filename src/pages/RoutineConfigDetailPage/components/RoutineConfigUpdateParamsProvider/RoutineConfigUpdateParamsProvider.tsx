import React, {createContext, useContext, useEffect, useState} from "react";
import {Routine} from "types/model";

type RoutineUpdateParamsContextType = {
    routine: Routine;
    setRoutine: React.Dispatch<React.SetStateAction<Routine>>;
};

const RoutineUpdateParamsContext =
    createContext<RoutineUpdateParamsContextType>({
        routine: {} as Routine,
        setRoutine: () => {},
    });

type RoutineUpdateParamsProviderProps = {
    defaultValue: Routine;
    children: React.ReactNode;
};

const RoutineUpdateParamsProvider = ({
    defaultValue,
    children,
}: RoutineUpdateParamsProviderProps) => {
    const [routine, setRoutine] = useState(defaultValue);

    useEffect(() => {
        console.log("루틴 설정 상태", routine);
    }, [routine]);

    return (
        <RoutineUpdateParamsContext.Provider
            value={{
                routine,
                setRoutine,
            }}
        >
            {children}
        </RoutineUpdateParamsContext.Provider>
    );
};

export const useRoutineUpdateParams = () =>
    useContext(RoutineUpdateParamsContext);

export default RoutineUpdateParamsProvider;
