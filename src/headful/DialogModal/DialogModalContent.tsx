/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import Modal from "headless/Modal/Modal";
import React from "react";

type DialogModalContentProps = {
    children: React.ReactNode;
};

const DialogModalContent = ({children}: DialogModalContentProps) => {
    const theme = useTheme();

    const dialogModalContentStyle = css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${theme.color.background.box};
        border-radius: ${theme.borderRadius.lg};
        z-index: ${theme.zIndex.modal};
        width: 80%;
    `;
    return (
        <Modal.Content defaultStyle={dialogModalContentStyle}>
            {children}
        </Modal.Content>
    );
};

export default DialogModalContent;
