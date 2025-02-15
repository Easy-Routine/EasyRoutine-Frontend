/** @jsxImportSource @emotion/react */
import {motion} from "framer-motion";
import styled from "styled-components";
import {ReactComponent as TrashIcon} from "assets/image/trash.svg";
import {css, useTheme} from "@emotion/react";

type SwipeableAccordionDeleteButtonProps = {
    onSwipeableAccordionDeleteButtonClick?: () => void;
};
const SwipeableAccordionDeleteButton = ({
    onSwipeableAccordionDeleteButtonClick,
}: SwipeableAccordionDeleteButtonProps) => {
    const theme = useTheme();

    const swipeableAccordionButtonStyle = css`
        position: absolute;
        left: 100%;
        top: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 65px;
        height: 80px;
        background-color: ${theme.color.warning};
        opacity: 0.7;
        color: white;
        border-radius: ${theme.borderRadius.md};
        transition: transform 0.3s;
    `;

    return (
        <div
            css={swipeableAccordionButtonStyle}
            onClick={onSwipeableAccordionDeleteButtonClick}
        >
            <TrashIcon />
        </div>
    );
};

export default SwipeableAccordionDeleteButton;
