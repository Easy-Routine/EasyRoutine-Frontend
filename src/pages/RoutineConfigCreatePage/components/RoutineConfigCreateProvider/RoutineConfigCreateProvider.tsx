import React, {createContext, useContext, useEffect, useState} from "react";
import {Color} from "types/enum";
import {RoutineConfig} from "types/model";

type RoutineConfigCreateRequest = Pick<
    RoutineConfig,
    "name" | "color" | "workoutConfigs"
>;

type RoutineConfigCreateContextType = {
    routineConfig: RoutineConfigCreateRequest;
    setRoutineConfig: React.Dispatch<
        React.SetStateAction<RoutineConfigCreateRequest>
    >;
};

const RoutineConfigCreateContext =
    createContext<RoutineConfigCreateContextType>({
        routineConfig: {} as RoutineConfigCreateRequest,
        setRoutineConfig: () => {},
    });

type RoutineConfigCreateProviderProps = {
    children: React.ReactNode;
};

const RoutineConfigCreateProvider = ({
    children,
}: RoutineConfigCreateProviderProps) => {
    const [routineConfig, setRoutineConfig] =
        useState<RoutineConfigCreateRequest>({
            name: "",
            color: Color.VIOLET,
            workoutConfigs: [],
        });

    useEffect(() => {
        console.log("루틴 설정 상태", routineConfig);
    }, [routineConfig]);

    return (
        <RoutineConfigCreateContext.Provider
            value={{
                routineConfig,
                setRoutineConfig,
            }}
        >
            {children}
        </RoutineConfigCreateContext.Provider>
    );
};

export const useRoutineConfigCreate = () =>
    useContext(RoutineConfigCreateContext);

export default RoutineConfigCreateProvider;
