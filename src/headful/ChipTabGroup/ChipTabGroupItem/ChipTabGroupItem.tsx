import TabGroupItem from "headless/TabGroup/TabGroupItem";
import React from "react";
import styles from "./ChipTabGroupItem.module.scss";
import {useTabGroup} from "headless/TabGroup/TabGroup";

type ChipTagGroupItemProps = React.ComponentProps<typeof TabGroupItem>;

const ChipTabGroupItem = (props: ChipTagGroupItemProps) => {
    const {tabGroupValue} = useTabGroup();

    const isCurrentItem = tabGroupValue === props.value;

    const combinedStyles = `${styles.chipTabGroupItem} ${isCurrentItem && styles.chipTabGroupItemActive}`;

    return <TabGroupItem {...props} className={combinedStyles} />;
};

export default ChipTabGroupItem;
