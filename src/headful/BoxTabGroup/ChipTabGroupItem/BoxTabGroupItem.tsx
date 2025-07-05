import TabGroupItem from "headless/TabGroup/TabGroupItem";
import React from "react";
import styles from "./BoxTabGroupItem.module.scss";
import {useTabGroup} from "headless/TabGroup/TabGroup";

type BoxTagGroupItemProps = React.ComponentProps<typeof TabGroupItem>;

const BoxTabGroupItem = (props: BoxTagGroupItemProps) => {
    const {tabGroupValue} = useTabGroup();

    const isCurrentItem = tabGroupValue === props.value;

    const combinedStyles = `${styles.BoxTabGroupItem} ${isCurrentItem && styles.BoxTabGroupItemActive}`;

    return <TabGroupItem {...props} className={combinedStyles} />;
};

export default BoxTabGroupItem;
