import React from "react";
import styles from "./Label.module.scss";

type LabelProps = {
    text: string;
    children: React.ReactNode;
    required?: boolean;
};

const Label = ({text, required, children}: LabelProps) => {
    return (
        <div className={styles.Label}>
            <div className={styles.Text}>
                <span>{text}</span>
                {required && <span className={styles.Dot}>*</span>}
            </div>
            <div className={styles.Form}>{children}</div>
        </div>
    );
};

export default Label;
