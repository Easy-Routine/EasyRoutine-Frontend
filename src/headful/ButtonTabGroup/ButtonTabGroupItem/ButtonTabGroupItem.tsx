import TabGroupItem from "headless/TabGroup/TabGroupItem";
import React from "react";
import styles from "./ButtonTabGroupItem.module.scss";
import {useTabGroup} from "headless/TabGroup/TabGroup";

type ButtonTagGroupItemProps = React.ComponentProps<typeof TabGroupItem>;

const ButtonTabGroupItem = (props: ButtonTagGroupItemProps) => {
    const {tabGroupValue} = useTabGroup();

    const isCurrentItem = tabGroupValue === props.value;

    const combinedStyles = `${styles.ButtonTabGroupItem} ${isCurrentItem && styles.ButtonTabGroupItemActive}`;

    return <TabGroupItem {...props} className={combinedStyles} />;
};

export default ButtonTabGroupItem;
