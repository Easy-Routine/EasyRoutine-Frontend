import React, {createContext, useContext, useEffect, useState} from "react";
import {Color} from "types/enum";
import {Routine} from "types/model";
import {RoutineCreateReq} from "types/routine";

type RoutineCreateContextType = {
    routine: RoutineCreateReq;
    setRoutine: React.Dispatch<React.SetStateAction<RoutineCreateReq>>;
};

const RoutineCreateContext = createContext<RoutineCreateContextType>({
    routine: {} as RoutineCreateReq,
    setRoutine: () => {},
});

type RoutineCreateProviderProps = {
    children: React.ReactNode;
};

const RoutineCreateProvider = ({children}: RoutineCreateProviderProps) => {
    const [routine, setRoutine] = useState<RoutineCreateReq>({
        name: "",
        color: Color.VIOLET,
        routineExercises: [],
    });

    useEffect(() => {
        console.log("루틴 설정 상태", routine);
    }, [routine]);

    return (
        <RoutineCreateContext.Provider
            value={{
                routine,
                setRoutine,
            }}
        >
            {children}
        </RoutineCreateContext.Provider>
    );
};

export const useRoutineCreate = () => useContext(RoutineCreateContext);

export default RoutineCreateProvider;
