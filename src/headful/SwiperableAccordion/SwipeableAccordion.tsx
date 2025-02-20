import React from "react";
import SwipeableAccordionHidden from "./SwipeableAccordionHidden/SwipeableAccordionHidden";
import SwipeableAccordionVisible from "./SwipeableAccordionVisible/SwipeableAccordionVisible";
import SwipeableAccordionBox from "./SwipeableAccordionBox/SwipeableAccordionBox";
import Accordion from "headless/Accordion/Accordion";
import SwipeableAccordionTrigger from "./SwipeableAccordionTrigger/SwipeableAccordionTrigger";
import SwipeableAccordionButton from "./SwipeableAccordionDeleteButton/SwipeableAccordionDeleteButton";

type SwipeableAccordionProps = {
    children: React.ReactNode;
};

const SwipeableAccordion = ({children}: SwipeableAccordionProps) => {
    return <Accordion>{children}</Accordion>;
};

export default SwipeableAccordion;

SwipeableAccordion.Hidden = SwipeableAccordionHidden;
SwipeableAccordion.Visible = SwipeableAccordionVisible;
SwipeableAccordion.Box = SwipeableAccordionBox;
SwipeableAccordion.Trigger = SwipeableAccordionTrigger;
SwipeableAccordion.DeleteButton = SwipeableAccordionButton;
