import React from "react";
import styles from "./SummaryBox.module.scss";
import Text from "./Text";

type SummaryBoxProps = {
    children?: React.ReactNode;
};

const SummaryBox = ({children}: SummaryBoxProps) => {
    return <div className={styles.SummaryBox}>{children}</div>;
};

export default SummaryBox;

SummaryBox.Text = Text;
