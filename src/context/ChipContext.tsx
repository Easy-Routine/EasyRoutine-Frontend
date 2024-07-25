import { createContext, ReactNode } from "react";

export type ChipContextType = {
    selectedValue: string;
    handleButtonClick: (value: string) => void;
};
type ChipProviderProps = {
    children: ReactNode;
    value: ChipContextType;
};

export const ChipContext = createContext<ChipContextType | {}>({});
const ChipProvider = ({ children, value }: ChipProviderProps) => {
    const { selectedValue, handleButtonClick } = value;
    return (
        <ChipContext.Provider value={{ selectedValue, handleButtonClick }}>
            {children}
        </ChipContext.Provider>
    );
};

export default ChipProvider;
