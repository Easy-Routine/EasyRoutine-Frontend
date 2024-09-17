import { createContext, ReactNode } from 'react';

export type TabContextType = {
    selectedValue: string;
    handleButtonClick: (value: string) => void;
};
type TabProviderProps = {
    children: ReactNode;
    value: TabContextType;
};

export const TabContext = createContext<TabContextType | {}>({});
const TabProvider = ({ children, value }: TabProviderProps) => {
    const { selectedValue, handleButtonClick } = value;
    return <TabContext.Provider value={{ selectedValue, handleButtonClick }}>{children}</TabContext.Provider>;
};

export default TabProvider;
