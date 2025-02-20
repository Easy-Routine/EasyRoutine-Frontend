import CheckboxGroup from "headless/CheckboxGroup/CheckboxGroup";
import React from "react";
import LineCheckBoxGroupItem from "./LineCheckBoxGroupItem/LineCheckBoxGroupItem";
import LineCheckBoxGroupCheck from "./LineCheckBoxGroupCheck/LineCheckBoxGroupCheck";
import styles from "./LineCheckBoxGroup.module.scss";

type CheckboxGroupProps = {
    children: React.ReactNode;
};

const LineCheckBoxGroup = ({children}: CheckboxGroupProps) => {
    return (
        <CheckboxGroup>
            <div className={styles.lineCheckBoxGroup}>{children}</div>
        </CheckboxGroup>
    );
};

export default LineCheckBoxGroup;

LineCheckBoxGroup.Item = LineCheckBoxGroupItem;
LineCheckBoxGroup.Check = LineCheckBoxGroupCheck;
