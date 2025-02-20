import TabGroupItem from "headless/TabGroup/TabGroupItem";
import React from "react";
import styles from "./ChipTabGroupItem.module.scss";
import {useTabGroup} from "headless/TabGroup/TabGroup";

type ChipTabGroupItemProps = {
    value: string;
    children: React.ReactNode;
};

const ChipTabGroupItem = ({value, children}: ChipTabGroupItemProps) => {
    const {tabGroupValue} = useTabGroup();

    const isCurrentItem = tabGroupValue === value;

    const combinedStyles = `${styles.chipTabGroupItem} ${isCurrentItem && styles.chipTabGroupItemActive}`;

    return (
        <TabGroupItem value={value} className={combinedStyles}>
            {children}
        </TabGroupItem>
    );
};

export default ChipTabGroupItem;
