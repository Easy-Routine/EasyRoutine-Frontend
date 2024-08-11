import { createContext, ReactNode } from "react";

export type ProgressContextType = {
    currentItem: any;
    currentInput: string;
    setCurrentItem: React.Dispatch<React.SetStateAction<string>>;
    setCurrentInput: React.Dispatch<React.SetStateAction<string>>;
    model: any[];
    iteratorRef: React.MutableRefObject<
        Generator<any, void, unknown> | undefined
    >;
    completedInputs: string[];
    setCompletedInputs: React.Dispatch<React.SetStateAction<string[]>>;
    // setModel: React.Dispatch<React.SetStateAction<any[]>>;
};
type ProgressProviderProps = {
    children: ReactNode;
    value: ProgressContextType;
};

export const ProgressContext = createContext<ProgressContextType | {}>({});
const ProgressProvider = ({ children, value }: ProgressProviderProps) => {
    const {
        currentItem,
        currentInput,
        setCurrentItem,
        setCurrentInput,
        model,
        iteratorRef,
        completedInputs,
        setCompletedInputs,
    } = value;
    return (
        <ProgressContext.Provider
            value={{
                currentItem,
                currentInput,
                setCurrentItem,
                setCurrentInput,
                model,
                iteratorRef,
                completedInputs,
                setCompletedInputs,
            }}
        >
            {children}
        </ProgressContext.Provider>
    );
};

export default ProgressProvider;
