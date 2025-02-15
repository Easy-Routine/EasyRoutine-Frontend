import React from "react";
import SwipeableAccordionHidden from "./SwipeableAccordionHidden";
import SwipeableAccordionVisible from "./SwipeableAccordionVisible";
import SwipeableAccordionBox from "./SwipeableAccordionBox";
import Accordion from "headless/Accordion/Accordion";
import SwipeableAccordionTrigger from "./SwipeableAccordionTrigger";
import SwipeableAccordionButton from "./SwipeableAccordionDeleteButton";

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
