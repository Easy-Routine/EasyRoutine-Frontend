import { createContext, ReactNode } from "react";

export type AccordionContextType = {
    isOpen: boolean;
    handleToggleAccordion: () => void;
};
type AccordionProviderProps = {
    children: ReactNode;
    value: AccordionContextType;
};

export const AccordionContext = createContext<AccordionContextType | {}>({});
const AccordionProvider = ({ children, value }: AccordionProviderProps) => {
    const { isOpen, handleToggleAccordion } = value;
    return (
        <AccordionContext.Provider value={{ isOpen, handleToggleAccordion }}>
            {children}
        </AccordionContext.Provider>
    );
};

export default AccordionProvider;
