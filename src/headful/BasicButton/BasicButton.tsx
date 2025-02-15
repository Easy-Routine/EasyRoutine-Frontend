/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";

type BasicButtonProps = {
    disabled?: boolean;
    children: React.ReactNode;
    onBasicButtonClick?: () => void;
};

const BasicButton = ({
    disabled,
    children,
    onBasicButtonClick,
}: BasicButtonProps) => {
    const theme = useTheme();

    const basicButtonStyle = css`
        width: 100%;
        height: 40px;
        min-height: 40px;
        border: none;
        background-color: ${theme.color.primary};
        color: ${theme.color.text.white};
        border-radius: ${theme.borderRadius.xs};
        font-family: "Noto Sans Korean", sans-serif;
        opacity: ${disabled ? "0.5" : "1"};
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    return (
        <button css={basicButtonStyle} onClick={onBasicButtonClick}>
            {children}
        </button>
    );
};

export default BasicButton;
