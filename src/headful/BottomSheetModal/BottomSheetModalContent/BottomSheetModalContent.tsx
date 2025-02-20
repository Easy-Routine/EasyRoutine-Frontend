import React from "react";
import Modal from "headless/Modal/Modal";
import styles from "./BottomSheetModalContent.module.scss";

type BottomSheetModalContentProps = {
    children: React.ReactNode;
};

const BottomSheetModalContent = ({children}: BottomSheetModalContentProps) => {
    return (
        <Modal.Content className={styles.bottomSheetModalContent}>
            {children}
        </Modal.Content>
    );
};

export default BottomSheetModalContent;
