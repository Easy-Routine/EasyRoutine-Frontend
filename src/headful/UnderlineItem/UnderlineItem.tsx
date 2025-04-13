import React from "react";
import styles from "./UnderlineItem.module.scss";

type UnderlineItemProps = {
    children: React.ReactNode;
};

const UnderlineItem = ({children}: UnderlineItemProps) => {
    return <div className={styles.UnderlineItem}>{children}</div>;
};

export default UnderlineItem;
