import React from "react";
import styles from "../ConfirmSet.module.scss";

const Description = ({text}: {text: React.ReactNode}) => {
    return (
        <div className={styles.Description}>
            <span>{text}</span>
        </div>
    );
};

export default Description;
