import React, {createContext, useContext, useEffect, useState} from "react";
import {Category} from "types/enum";
import {RoutineHistory} from "types/model";
import {RoutineHistoryAllGetDailyReq} from "types/routine-history";

type RoutineHistoryAllGetDailyContextType = {
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
};

const RoutineHistoryAllGetContext =
    createContext<RoutineHistoryAllGetDailyContextType>({
        date: new Date(),
        setDate: () => {},
    });

type RoutineHistoryAllGetDailyProviderProps = {
    children: React.ReactNode;
};

const RoutineHistoryAllGetDailyProvider = ({
    children,
}: RoutineHistoryAllGetDailyProviderProps) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log("데이트", date);
    }, [date]);

    return (
        <RoutineHistoryAllGetContext.Provider
            value={{
                date,
                setDate,
            }}
        >
            {children}
        </RoutineHistoryAllGetContext.Provider>
    );
};

export const useRoutineHistoryAllGetDailyProvider = () =>
    useContext(RoutineHistoryAllGetContext);

export default RoutineHistoryAllGetDailyProvider;
