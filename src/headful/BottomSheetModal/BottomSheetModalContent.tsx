/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import Modal from "headless/Modal/Modal";
import React from "react";

type BottomSheetModalContentProps = {
    children: React.ReactNode;
};

const BottomSheetModalContent = ({children}: BottomSheetModalContentProps) => {
    const theme = useTheme();

    const bottomSheetModalContentStyle = css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 100%;
        left: 0;
        right: 0;
        background: ${theme.color.background.box};
        padding: 25px;
        box-sizing: border-box;
        border-top-left-radius: ${theme.borderRadius.lg};
        border-top-right-radius: ${theme.borderRadius.lg};
        z-index: ${theme.zIndex.modal};
        width: 100%;
        transition: all 0.5s ease-in-out;
        box-shadow: ${theme.boxShadow};
        transform: translateY(-100%);
    `;
    return (
        <Modal.Content defaultStyle={bottomSheetModalContentStyle}>
            {children}
        </Modal.Content>
    );
};

export default BottomSheetModalContent;
