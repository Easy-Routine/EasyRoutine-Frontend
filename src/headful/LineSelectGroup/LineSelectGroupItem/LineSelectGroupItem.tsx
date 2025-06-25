import React from "react";
import styles from "./LineSelectGroupItem.module.scss";
import LineSelectGroup from "../LineSelectGroup";
import SelectGroup from "headless/SelectGroup/SelectGroup";

type LineSelectGroupItemProps = React.ComponentProps<typeof SelectGroup.Item>;
const LineSelectGroupItem = ({...props}: LineSelectGroupItemProps) => {
    return (
        <SelectGroup.Item className={styles.LineSelectGroupItem} {...props}>
            {props.children}
            <LineSelectGroup.Check value={props.value as string} />
        </SelectGroup.Item>
    );
};

export default LineSelectGroupItem;
