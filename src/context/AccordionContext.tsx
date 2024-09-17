import { createContext, ReactNode } from 'react';

export type AccordionContextType = {
    isOpen: boolean;
    handleToggleAccordion: () => void;
    handleDragEnd: (event: any, info: any) => void;
    opacity: number;
    x: number;
};
type AccordionProviderProps = {
    children: ReactNode;
    value: AccordionContextType;
};

export const AccordionContext = createContext<AccordionContextType | {}>({});
const AccordionProvider = ({ children, value }: AccordionProviderProps) => {
    const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } = value;
    return (
        <AccordionContext.Provider value={{ isOpen, handleToggleAccordion, handleDragEnd, opacity, x }}>
            {children}
        </AccordionContext.Provider>
    );
};

export default AccordionProvider;
