import React from "react";
import CheckboxGroup from "headless/CheckboxGroup/CheckboxGroup";
import styles from "./LineCheckBoxGroupItem.module.scss";
import LineCheckBoxGroup from "../LineCheckBoxGroup";

type LineCheckBoxGroupItemProps = {
    value: string;
    children: React.ReactNode;
};

const LineCheckBoxGroupItem = ({
    value,
    children,
}: LineCheckBoxGroupItemProps) => {
    return (
        <CheckboxGroup.Item
            value={value}
            className={styles.lineCheckBoxGroupItem}
        >
            {children}
            <LineCheckBoxGroup.Check value={value} />
        </CheckboxGroup.Item>
    );
};

export default LineCheckBoxGroupItem;
