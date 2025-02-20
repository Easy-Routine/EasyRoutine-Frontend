import React from "react";
import Accordion from "headless/Accordion/Accordion";

import styles from "./SwipeableAccordionBox.module.scss";
import SwipeableAccordionMotion from "../SwipeableAccordionMotion/SwipeableAccordionMotion";
import SwipeableAccordionTrigger from "../SwipeableAccordionTrigger/SwipeableAccordionTrigger";

type SwipeableAccordionBoxProps = {
    children: React.ReactNode;
};

const SwipeableAccordionBox = ({children}: SwipeableAccordionBoxProps) => {
    return (
        <Accordion.Box className={styles.swipeableAccordionBox}>
            <SwipeableAccordionMotion>
                {isDragging => (
                    <>
                        <SwipeableAccordionTrigger isDragging={isDragging}>
                            {children}
                        </SwipeableAccordionTrigger>
                    </>
                )}
            </SwipeableAccordionMotion>
        </Accordion.Box>
    );
};

export default SwipeableAccordionBox;
