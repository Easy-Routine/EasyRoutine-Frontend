import React from "react";
import Accordion from "headless/Accordion/Accordion";
import styles from "./SwipeableAccordionVisible.module.scss";

type SwipeableAccordionVisibleProps = {
    children: React.ReactNode;
};

const SwipeableAccordionVisible = ({
    children,
}: SwipeableAccordionVisibleProps) => {
    return (
        <Accordion.Visible className={styles.swipeableAccordionVisible}>
            {children}
        </Accordion.Visible>
    );
};

export default SwipeableAccordionVisible;
