import TabGroupItem from "headless/TabGroup/TabGroupItem";
import React from "react";
import styles from "./LineTabGroupItem.module.scss";
import {useTabGroup} from "headless/TabGroup/TabGroup";

type LineTabGroupItemProps = {
    value: string;
    children: React.ReactNode;
};

const LineTabGroupItem = ({value, children}: LineTabGroupItemProps) => {
    const {tabGroupValue} = useTabGroup();
    const isCurrentItem = tabGroupValue === value;
    const combinedStyles = `${styles.lineTabGroupItem} ${isCurrentItem ? styles.lineTabGroupItemActive : ""}`;

    return (
        <TabGroupItem value={value} className={combinedStyles}>
            {children}
        </TabGroupItem>
    );
};

export default LineTabGroupItem;
