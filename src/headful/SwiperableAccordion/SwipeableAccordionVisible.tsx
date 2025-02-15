/** @jsxImportSource @emotion/react */
import React from "react";
import {css} from "@emotion/react";
import Accordion from "headless/Accordion/Accordion";

type SwipeableAccordionVisibleProps = {
    children: React.ReactNode;
};

const SwipeableAccordionVisible = ({
    children,
}: SwipeableAccordionVisibleProps) => {
    const swipeableAccordionVisibleStyle = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    `;

    return (
        <Accordion.Visible defalutStyle={swipeableAccordionVisibleStyle}>
            {children}
        </Accordion.Visible>
    );
};

export default SwipeableAccordionVisible;
