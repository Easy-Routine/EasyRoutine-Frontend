import React from "react";
import styles from "./ConfirmModalCloseCancel.module.scss";

type ConfirmModalCloseCancelProps = {
    children: React.ReactNode;
};

const ConfirmModalCloseCancel = ({children}: ConfirmModalCloseCancelProps) => {
    return <div className={styles.confirmModalCloseCancel}>{children}</div>;
};

export default ConfirmModalCloseCancel;
