import React from "react";
import styles from "./ConfirmModalCloseConfirm.module.scss";

type ConfirmModalCloseConfirmProps = {
    children: React.ReactNode;
    onConfirmButtonClick?: () => void;
};

const ConfirmModalCloseConfirm = ({
    children,
    onConfirmButtonClick,
}: ConfirmModalCloseConfirmProps) => {
    const handleConfirmButtonClick = () => {
        onConfirmButtonClick && onConfirmButtonClick();
    };

    return (
        <div
            onClick={handleConfirmButtonClick}
            className={styles.confirmModalCloseConfirm}
        >
            {children}
        </div>
    );
};

export default ConfirmModalCloseConfirm;
