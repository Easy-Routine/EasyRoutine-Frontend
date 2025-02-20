import React from "react";
import TabGroup from "headless/TabGroup/TabGroup";
import ColorTabGroupItem from "./ColorTabGroupItem/ColorTabGroupItem";
import styles from "./ColorTabGroup.module.scss";

type ColorTabGroupProps = {
    defaultValue: string;
    children: React.ReactNode;
};

const ColorTabGroup = ({defaultValue, children}: ColorTabGroupProps) => {
    return (
        <TabGroup defaultValue={defaultValue}>
            <div className={styles.colorTabGroup}>{children}</div>
        </TabGroup>
    );
};

export default ColorTabGroup;

ColorTabGroup.Item = ColorTabGroupItem;
