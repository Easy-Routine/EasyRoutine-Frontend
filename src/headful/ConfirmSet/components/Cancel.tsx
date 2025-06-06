import React from "react";
import styles from "../ConfirmSet.module.scss";

type CancelProps = {
    text: string;
    onButtonClick?: () => void;
};

const Cancel = ({text, onButtonClick}: CancelProps) => {
    return (
        <div className={styles.Cancel}>
            <button onClick={onButtonClick}>{text}</button>
        </div>
    );
};

export default Cancel;
