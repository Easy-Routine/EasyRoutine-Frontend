import React from "react";
import Item from "./Item/Item";
import CheckboxGroup from "headless/CheckboxGroup/CheckboxGroup";
import styles from "./CheckSet.module.scss";

type CheckSetProps = React.ComponentProps<typeof CheckboxGroup> & {};

const CheckSet = ({...props}: CheckSetProps) => {
    return (
        <CheckboxGroup {...props}>
            <div className={styles.CheckSet}>{props.children}</div>
        </CheckboxGroup>
    );
};

export default CheckSet;

CheckSet.Item = Item;
