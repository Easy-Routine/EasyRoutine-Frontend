import TabGroupItem from "headless/TabGroup/TabGroupItem";
import React from "react";
import styles from "./IconTabGroupItem.module.scss";
import {useTabGroup} from "headless/TabGroup/TabGroup";

type IconTabGroupItemProps = {
    icon: React.ReactElement;
    label: string;
} & React.ComponentProps<typeof TabGroupItem>;

const IconTabGroupItem = ({icon, label, ...props}: IconTabGroupItemProps) => {
    const {tabGroupValue} = useTabGroup();

    const isCurrentItem = tabGroupValue === props.value;

    const combinedStyles = `${styles.IconTabGroupItem} ${isCurrentItem && styles.Active}`;

    return (
        <TabGroupItem {...props} className={combinedStyles}>
            <div>{icon}</div>
            <div>{label}</div>
        </TabGroupItem>
    );
};

export default IconTabGroupItem;
