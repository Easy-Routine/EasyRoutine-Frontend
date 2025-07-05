import React from "react";
import TabGroup from "headless/TabGroup/TabGroup";
import styles from "./BoxTabGroup.module.scss";
import BoxTabGroupItem from "./ChipTabGroupItem/BoxTabGroupItem";

type BoxTabGroupProps = {
    defaultValue: string;
    children: React.ReactNode;
};

const BoxTabGroup = ({defaultValue, children}: BoxTabGroupProps) => {
    return (
        <TabGroup defaultValue={defaultValue}>
            <div className={styles.BoxTabGroup}>{children}</div>
        </TabGroup>
    );
};

export default BoxTabGroup;

BoxTabGroup.Item = BoxTabGroupItem;
