import React from "react";
import TabGroup from "headless/TabGroup/TabGroup";
import LineTabGroupItem from "./LineTabGroupItem/LineTabGroupItem";
import styles from "./LineTabGroup.module.scss";

type LineTabGroupProps = {
    defaultValue: string;
    children: React.ReactNode;
};

const LineTabGroup = ({defaultValue, children}: LineTabGroupProps) => {
    return (
        <TabGroup defaultValue={defaultValue}>
            <div className={styles.lineTabGroup}>{children}</div>
        </TabGroup>
    );
};

export default LineTabGroup;

LineTabGroup.Item = LineTabGroupItem;
