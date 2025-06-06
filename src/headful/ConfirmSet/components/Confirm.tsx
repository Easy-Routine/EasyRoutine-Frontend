import React from "react";
import styles from "../ConfirmSet.module.scss";

type ConfirmProps = {
    text: string;
    onButtonClick?: () => void;
};

const Confirm = ({text, onButtonClick}: ConfirmProps) => {
    return (
        <div className={styles.Confirm}>
            <button onClick={onButtonClick}>{text}</button>
        </div>
    );
};

export default Confirm;
