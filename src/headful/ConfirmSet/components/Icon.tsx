import React from "react";
import styles from "../ConfirmSet.module.scss";

type IconProps = {
    icon: string;
};

const Icon = ({icon}: IconProps) => {
    return (
        <div className={styles.Icon}>
            <img src={icon} alt="아이콘" />
        </div>
    );
};

export default Icon;
