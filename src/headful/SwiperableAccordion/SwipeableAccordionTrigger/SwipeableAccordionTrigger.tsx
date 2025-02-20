import React from "react";
import Accordion from "headless/Accordion/Accordion";
import styles from "./SwipeableAccordionTrigger.module.scss";

type SwipeableAccordionTriggerProps = {
    isDragging: boolean;
    children: React.ReactNode;
};

const SwipeableAccordionTrigger = ({
    isDragging,
    children,
}: SwipeableAccordionTriggerProps) => {
    const handleSwipeableAccordionTriggerClick = () => isDragging;

    return (
        <Accordion.Button
            className={styles.swipeableAccordionTrigger}
            onButtonClick={handleSwipeableAccordionTriggerClick}
        >
            {children}
        </Accordion.Button>
    );
};

export default SwipeableAccordionTrigger;
