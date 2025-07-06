import React from "react";
import TabGroup from "headless/TabGroup/TabGroup";
import styles from "./ButtonTabGroup.module.scss";
import ButtonTabGroupItem from "./ButtonTabGroupItem/ButtonTabGroupItem";

type ButtonTabGroupProps = {
    defaultValue: string;
    children: React.ReactNode;
};

const ButtonTabGroup = ({defaultValue, children}: ButtonTabGroupProps) => {
    return (
        <TabGroup defaultValue={defaultValue}>
            <div className={styles.ButtonTabGroup}>{children}</div>
        </TabGroup>
    );
};

export default ButtonTabGroup;

ButtonTabGroup.Item = ButtonTabGroupItem;
