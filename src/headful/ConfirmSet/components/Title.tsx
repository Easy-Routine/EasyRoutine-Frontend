import React from "react";
import styles from "../ConfirmSet.module.scss";

const Title = ({text}: {text: string}) => {
    return (
        <div className={styles.Title}>
            <span>{text}</span>
        </div>
    );
};

export default Title;
