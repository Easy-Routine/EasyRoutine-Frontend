/** @jsxImportSource @emotion/react */
import React from "react";
import {css, useTheme} from "@emotion/react";
import Accordion from "headless/Accordion/Accordion";
import SwipeableAccordionMotion from "./SwipeableAccordionMotion";
import SwipeableAccordionTrigger from "./SwipeableAccordionTrigger";
import SwipeableAccordionButton from "./SwipeableAccordionDeleteButton";

type SwipeableAccordionBoxProps = {
    children: React.ReactNode;
};

const SwipeableAccordionBox = ({children}: SwipeableAccordionBoxProps) => {
    const theme = useTheme();

    const swipeableAccordionBoxStyle = css`
        display: block;
        width: 100%;
        position: relative;
        overflow: hidden;
        border-radius: ${theme.borderRadius.md};
        box-shadow: ${theme.boxShadow};
    `;

    return (
        <Accordion.Box defaultStyle={swipeableAccordionBoxStyle}>
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
