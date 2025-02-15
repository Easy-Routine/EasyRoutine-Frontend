/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";
import ConfirmModalCloseConfirm from "./ConfirmModalCloseConfirm";
import ConfirmModalCloseCancel from "./ConfirmModalCloseCancel";
import Modal from "headless/Modal/Modal";

type ConfirmModalCloseProps = {
    children: React.ReactNode;
};

const ConfirmModalClose = ({children}: ConfirmModalCloseProps) => {
    const theme = useTheme();

    const conrfirmModalCloseStyle = css`
        width: 100%;
        height: 40px;
        border-top: 1px solid ${theme.color.gray.light};
        font-size: ${theme.fontSize.lg};
        display: flex;
    `;

    return (
        <Modal.Close defaultStyle={conrfirmModalCloseStyle}>
            {children}
        </Modal.Close>
    );
};

export default ConfirmModalClose;

ConfirmModalClose.Confirm = ConfirmModalCloseConfirm;
ConfirmModalClose.Cancel = ConfirmModalCloseCancel;
