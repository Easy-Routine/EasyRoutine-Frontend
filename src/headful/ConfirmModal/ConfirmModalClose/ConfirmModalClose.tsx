import React from "react";
import ConfirmModalCloseConfirm from "./ConfirmModalCloseConfirm/ConfirmModalCloseConfirm";
import ConfirmModalCloseCancel from "./ConfirmModalCloseCancel/ConfirmModalCloseCancel";
import Modal from "headless/Modal/Modal";
import styles from "./ConfirmModalClose.module.scss";

type ConfirmModalCloseProps = {
    children: React.ReactNode;
};

const ConfirmModalClose = ({children}: ConfirmModalCloseProps) => {
    return (
        <Modal.Close className={styles.confirmModalClose}>
            {children}
        </Modal.Close>
    );
};

export default ConfirmModalClose;

ConfirmModalClose.Confirm = ConfirmModalCloseConfirm;
ConfirmModalClose.Cancel = ConfirmModalCloseCancel;
