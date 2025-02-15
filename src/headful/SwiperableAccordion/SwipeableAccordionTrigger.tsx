/** @jsxImportSource @emotion/react */
import React from "react";
import {css, useTheme} from "@emotion/react";
import Accordion from "headless/Accordion/Accordion";

type SwipeableAccordionTriggerProps = {
    isDragging: boolean;
    children: React.ReactNode;
};

const SwipeableAccordionTrigger = ({
    isDragging,
    children,
}: SwipeableAccordionTriggerProps) => {
    const theme = useTheme();

    const swipeableAccordionTriggerStyle = css`
        width: 100%;
        border: none;
        padding: 10px 20px;
        background-color: inherit;
        border-radius: ${theme.borderRadius.md};
    `;

    const handleSwipeableAccordionTriggerClick = () => isDragging;

    return (
        <Accordion.Button
            defaultStyle={swipeableAccordionTriggerStyle}
            onButtonClick={handleSwipeableAccordionTriggerClick}
        >
            {children}
        </Accordion.Button>
    );
};

export default SwipeableAccordionTrigger;
