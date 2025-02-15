/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";

type CircleButtonProps = {
    children: React.ReactNode;
    width: number;
    height: number;
    onCircleButtonClick?: () => void;
};

const CircleButton = ({
    children,
    width,
    height,
    onCircleButtonClick,
}: CircleButtonProps) => {
    const theme = useTheme();

    const basicButtonStyle = css`
        width: ${width}px;
        height: ${height}px;
        min-width: ${width}px;
        border-radius: ${theme.borderRadius.circle};
        background-color: ${theme.color.primary};
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: ${theme.boxShadow};
        color: ${theme.color.text.white};
        border: none;
    `;

    return (
        <button css={basicButtonStyle} onClick={onCircleButtonClick}>
            {children}
        </button>
    );
};

export default CircleButton;
