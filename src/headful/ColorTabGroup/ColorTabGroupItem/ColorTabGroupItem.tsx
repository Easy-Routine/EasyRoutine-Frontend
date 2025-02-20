import TabGroupItem from "headless/TabGroup/TabGroupItem";
import React from "react";
import styles from "./ColorTabGroupItem.module.scss";
import {useTabGroup} from "headless/TabGroup/TabGroup";

type ColorTabGroupItemProps = {
    value: string;
};

const ColorTabGroupItem = ({value}: ColorTabGroupItemProps) => {
    const {tabGroupValue} = useTabGroup();
    const isCurrentItem = tabGroupValue === value;
    const combinedStyles = `${styles.colorTabGroupItem} ${isCurrentItem ? styles.colorTabGroupItemActive : ""}`;

    return (
        <TabGroupItem
            value={value}
            className={combinedStyles}
            style={{backgroundColor: value}}
        />
    );
};

export default ColorTabGroupItem;
