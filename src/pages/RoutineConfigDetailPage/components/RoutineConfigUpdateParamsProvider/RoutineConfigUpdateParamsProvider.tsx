import React, {createContext, useContext, useEffect, useState} from "react";
import {RoutineConfig} from "types/model";

type RoutineConfigUpdateParamsContextType = {
    routineConfig: RoutineConfig;
    setRoutineConfig: React.Dispatch<React.SetStateAction<RoutineConfig>>;
};

const RoutineConfigUpdateParamsContext =
    createContext<RoutineConfigUpdateParamsContextType>({
        routineConfig: {} as RoutineConfig,
        setRoutineConfig: () => {},
    });

type RoutineConfigUpdateParamsProviderProps = {
    defaultValue: RoutineConfig;
    children: React.ReactNode;
};

const RoutineConfigUpdateParamsProvider = ({
    defaultValue,
    children,
}: RoutineConfigUpdateParamsProviderProps) => {
    const [routineConfig, setRoutineConfig] = useState(defaultValue);

    useEffect(() => {
        console.log("루틴 설정 상태", routineConfig);
    }, [routineConfig]);

    return (
        <RoutineConfigUpdateParamsContext.Provider
            value={{
                routineConfig,
                setRoutineConfig,
            }}
        >
            {children}
        </RoutineConfigUpdateParamsContext.Provider>
    );
};

export const useRoutineConfigUpdateParams = () =>
    useContext(RoutineConfigUpdateParamsContext);

export default RoutineConfigUpdateParamsProvider;
