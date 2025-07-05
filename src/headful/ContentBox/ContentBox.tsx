import React from "react";
import styles from "./ContentBox.module.scss";

type ContentBoxProps = {
    children?: React.ReactNode;
};

const ContentBox = ({children}: ContentBoxProps) => {
    return <div className={styles.ContentBox}>{children}</div>;
};

export default ContentBox;
