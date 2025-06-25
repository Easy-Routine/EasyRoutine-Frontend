import React from "react";
import styles from "./LineSelectGroup.module.scss";
import LineSelectGroupItem from "./LineSelectGroupItem/LineSelectGroupItem";
import LineSelectGroupCheck from "./LineSelectGroupCheck/LineSelectGroupCheck";
import SelectGroup from "headless/SelectGroup/SelectGroup";

type LineSelectGroupProps = React.ComponentProps<typeof SelectGroup>;

const LineSelectGroup = ({children, ...props}: LineSelectGroupProps) => {
    return (
        <SelectGroup {...props}>
            <div className={styles.LineSelectGroup}>{children}</div>
        </SelectGroup>
    );
};

export default LineSelectGroup;

LineSelectGroup.Item = LineSelectGroupItem;
LineSelectGroup.Check = LineSelectGroupCheck;
