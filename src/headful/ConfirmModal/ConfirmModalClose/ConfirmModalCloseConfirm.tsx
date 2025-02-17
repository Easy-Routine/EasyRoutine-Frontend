/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";

type ConfirmModalCloseConfirmProps = {
    children: React.ReactNode;
    onConfirmButtonClick?: () => void;
};

const ConfirmModalCloseConfirm = ({
    children,
    onConfirmButtonClick,
}: ConfirmModalCloseConfirmProps) => {
    const theme = useTheme();

    const handleConfirmButtonClick = () => {
        onConfirmButtonClick && onConfirmButtonClick();
    };

    const confirmModalCloseConfirmStyle = css`
        width: 100%;
        height: 100%;
        color: ${theme.color.text.white};
        background-color: ${theme.color.primary};
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom-right-radius: ${theme.borderRadius.lg};
    `;

    return (
        <div
            onClick={handleConfirmButtonClick}
            css={confirmModalCloseConfirmStyle}
        >
            {children}
        </div>
    );
};

export default ConfirmModalCloseConfirm;
