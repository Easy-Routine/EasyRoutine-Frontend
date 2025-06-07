import React, {createContext, useContext, useEffect, useState} from "react";
import {Routine} from "types/model";
import {RoutineUpdateReq} from "types/routine";

type RoutineUpdateContextType = {
    routine: RoutineUpdateReq;
    setRoutine: React.Dispatch<React.SetStateAction<RoutineUpdateReq>>;
};

const RoutineUpdateContext = createContext<RoutineUpdateContextType>({
    routine: {} as RoutineUpdateReq,
    setRoutine: () => {},
});

type RoutineUpdateProviderProps = {
    defaultValue: RoutineUpdateReq;
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
