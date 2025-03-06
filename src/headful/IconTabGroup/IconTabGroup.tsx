import React from "react";
import TabGroup from "headless/TabGroup/TabGroup";
import styles from "./IconTabGroup.module.scss";
import IconTabGroupItem from "./IconTabGroupItem/IconTabGroupItem";

type IconTabGroupProps = {
    defaultValue: string;
    children: React.ReactNode;
};

const IconTabGroup = ({defaultValue, children}: IconTabGroupProps) => {
    return (
        <TabGroup defaultValue={defaultValue}>
            <div className={styles.IconTabGroup}>{children}</div>
        </TabGroup>
    );
};

export default IconTabGroup;

IconTabGroup.Item = IconTabGroupItem;
