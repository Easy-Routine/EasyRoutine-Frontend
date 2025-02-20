import React from "react";
import Accordion from "headless/Accordion/Accordion";
import styles from "./SwipeableAccordionHidden.module.scss";

type SwipeableAccordionHiddenProps = {
    children: React.ReactNode;
};

const SwipeableAccordionHidden = ({
    children,
}: SwipeableAccordionHiddenProps) => {
    return (
        <Accordion.Hidden className={styles.swipeableAccordionHidden}>
            {children}
        </Accordion.Hidden>
    );
};

export default SwipeableAccordionHidden;
