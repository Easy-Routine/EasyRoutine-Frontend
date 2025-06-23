import TabGroupItem from "headless/TabGroup/TabGroupItem";
import React from "react";
import styles from "./LineTabGroupItem.module.scss";
import {useTabGroup} from "headless/TabGroup/TabGroup";

type LineTabGroupItemProps = React.ComponentProps<typeof TabGroupItem> & {
    value: string;
    children: React.ReactNode;
};

const LineTabGroupItem = ({
    value,
    children,
    ...props
}: LineTabGroupItemProps) => {
    const {tabGroupValue} = useTabGroup();
    const isCurrentItem = tabGroupValue === value;
    const combinedStyles = `${styles.lineTabGroupItem} ${isCurrentItem ? styles.lineTabGroupItemActive : ""}`;

    return (
        <TabGroupItem {...props} value={value} className={combinedStyles}>
            {children}
        </TabGroupItem>
    );
};

export default LineTabGroupItem;
