import React from "react";
import styles from "./SummaryBox.module.scss";
type TextProps = {
    label: string;
    value: string;
};

const Text = ({label, value}: TextProps) => {
    return (
        <div className={styles.Text}>
            <div className={styles.Label}>{label}</div>
            <div className={styles.Value}>{value}</div>
        </div>
    );
};

export default Text;
