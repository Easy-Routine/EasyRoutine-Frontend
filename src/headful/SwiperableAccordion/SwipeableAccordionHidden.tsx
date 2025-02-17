/** @jsxImportSource @emotion/react */
import React from "react";
import {css, useTheme} from "@emotion/react";
import Accordion from "headless/Accordion/Accordion";

type SwipeableAccordionHiddenProps = {
    children: React.ReactNode;
};

const SwipeableAccordionHidden = ({
    children,
}: SwipeableAccordionHiddenProps) => {
    const theme = useTheme();

    const swipeableAccordionHiddenStyle = css`
        transition: height 0.5s ease-in-out;
        display: flex;
        gap: 15px;
        flex-direction: column;
        justify-content: space-between;
    `;

    return (
        <Accordion.Hidden defalutStyle={swipeableAccordionHiddenStyle}>
            {children}
        </Accordion.Hidden>
    );
};

export default SwipeableAccordionHidden;
