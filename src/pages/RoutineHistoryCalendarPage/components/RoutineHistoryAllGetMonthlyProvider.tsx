import React, {createContext, useContext, useEffect, useState} from "react";

type RoutineHistoryAllGetMonthlyContextType = {
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
};

const RoutineHistoryAllGetContext =
    createContext<RoutineHistoryAllGetMonthlyContextType>({
        date: new Date(),
        setDate: () => {},
    });

type RoutineHistoryAllGetMonthlyProviderProps = {
    children: React.ReactNode;
};

const RoutineHistoryAllGetMonthlyProvider = ({
    children,
}: RoutineHistoryAllGetMonthlyProviderProps) => {
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

export const useRoutineHistoryAllGetMonthlyProvider = () =>
    useContext(RoutineHistoryAllGetContext);

export default RoutineHistoryAllGetMonthlyProvider;
