import React from "react";
import styles from "./GrayContentBox.module.scss";

type GrayContentBoxProps = {
    children?: React.ReactNode;
};

const GrayContentBox = ({children}: GrayContentBoxProps) => {
    return <div className={styles.GrayContentBox}>{children}</div>;
};

export default GrayContentBox;
