import React, { useContext, useEffect } from "react";
import Accordion from "../Accordion";
import { ProgressContext, ProgressContextType } from "context/ProgressContext";

type ProgressAccordionProps = {
    children: React.ReactNode;
    id: string | number;
};

const ProgressAccordion = ({ children, id }: ProgressAccordionProps) => {
    const { currentItem } = useContext(ProgressContext) as ProgressContextType;

    const isCurrentAccordion = currentItem.accordionId === id;
    console.log("아코디언 id");

    useEffect(() => {
        console.log("현재 아코디언", currentItem);
        console.log("isCurrentAccordion", isCurrentAccordion);
    }, [currentItem, isCurrentAccordion]);

    return (
        <Accordion isCurrentAccordion={isCurrentAccordion}>
            {children}
        </Accordion>
    );
};

export default ProgressAccordion;
