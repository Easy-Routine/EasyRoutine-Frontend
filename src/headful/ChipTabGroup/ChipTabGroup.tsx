import React from "react";
import TabGroup from "headless/TabGroup/TabGroup";
import ChipTabGroupItem from "./ChipTabGroupItem/ChipTabGroupItem";
import styles from "./ChipTabGroup.module.scss";

type ChipTabGroupProps = {
    defaultValue: string;
    children: React.ReactNode;
};

const ChipTabGroup = ({defaultValue, children}: ChipTabGroupProps) => {
    return (
        <TabGroup defaultValue={defaultValue}>
            <div className={styles.chipTabGroup}>{children}</div>
        </TabGroup>
    );
};

export default ChipTabGroup;

ChipTabGroup.Item = ChipTabGroupItem;
