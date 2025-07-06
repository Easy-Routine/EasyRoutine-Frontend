import React, {createContext, useContext, useEffect, useState} from "react";

export enum Before {
    HALF_HOUR = "HALF_HOUR",
    ONE_HOUR = "ONE_HOUR",
    TWO_HOUR = "TWO_HOUR",
    NONE = "NONE",
}

type AlramContextType = {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;

    routineStartHour: string;
    setRoutineStartHour: React.Dispatch<React.SetStateAction<string>>;
    routineStartMinute: string;
    setRoutineStartMinute: React.Dispatch<React.SetStateAction<string>>;
    beforeRoutineStartTime: Before;
    setBeforeRoutineStartTime: React.Dispatch<React.SetStateAction<Before>>;
};

const AlramContext = createContext<AlramContextType>({
    isActive: false,
    setIsActive: () => {},
    routineStartHour: "00",
    setRoutineStartHour: () => {},
    routineStartMinute: "00",
    setRoutineStartMinute: () => {},
    beforeRoutineStartTime: Before.HALF_HOUR,
    setBeforeRoutineStartTime: () => {},
});

type AlramProviderProps = {
    children: React.ReactNode;
};

const AlramProvider = ({children}: AlramProviderProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [routineStartHour, setRoutineStartHour] = useState<string>("00");
    const [routineStartMinute, setRoutineStartMinute] = useState<string>("00");
    const [beforeRoutineStartTime, setBeforeRoutineStartTime] =
        useState<Before>(Before.HALF_HOUR);

    return (
        <AlramContext.Provider
            value={{
                isActive,
                setIsActive,
                routineStartHour,
                setRoutineStartHour,
                routineStartMinute,
                setRoutineStartMinute,
                beforeRoutineStartTime,
                setBeforeRoutineStartTime,
            }}
        >
            {children}
        </AlramContext.Provider>
    );
};

export const useAlram = () => useContext(AlramContext);

export default AlramProvider;
