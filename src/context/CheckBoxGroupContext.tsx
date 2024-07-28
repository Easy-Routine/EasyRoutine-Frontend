import { createContext, ReactNode } from "react";

export type CheckBoxGroupContextType = {
    selectedValues: string[];
    handleButtonClick: (value: string) => void;
};
type CheckBoxGroupProviderProps = {
    children: ReactNode;
    value: CheckBoxGroupContextType;
};

export const CheckBoxGroupContext = createContext<
    CheckBoxGroupContextType | {}
>({});
const CheckBoxGroupProvider = ({
    children,
    value,
}: CheckBoxGroupProviderProps) => {
    const { selectedValues, handleButtonClick } = value;
    return (
        <CheckBoxGroupContext.Provider
            value={{ selectedValues, handleButtonClick }}
        >
            {children}
        </CheckBoxGroupContext.Provider>
    );
};

export default CheckBoxGroupProvider;
