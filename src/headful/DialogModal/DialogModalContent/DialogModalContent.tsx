import React from "react";
import Modal from "headless/Modal/Modal";
import styles from "./DialogModalContent.module.scss";

type DialogModalContentProps = {
    children: React.ReactNode;
};

const DialogModalContent = ({children}: DialogModalContentProps) => {
    return (
        <Modal.Content className={styles.dialogModalContent}>
            {children}
        </Modal.Content>
    );
};

export default DialogModalContent;
