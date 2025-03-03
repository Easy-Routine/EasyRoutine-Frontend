import React from "react";
import CheckboxGroup from "headless/CheckboxGroup/CheckboxGroup";
import styles from "./LineCheckBoxGroupItem.module.scss";
import LineCheckBoxGroup from "../LineCheckBoxGroup";

type LineCheckBoxGroupItemProps = React.ComponentProps<
    typeof CheckboxGroup.Item
>;
const LineCheckBoxGroupItem = ({...props}: LineCheckBoxGroupItemProps) => {
    return (
        <CheckboxGroup.Item className={styles.lineCheckBoxGroupItem} {...props}>
            {props.children}
            <LineCheckBoxGroup.Check value={props.value} />
        </CheckboxGroup.Item>
    );
};

export default LineCheckBoxGroupItem;
