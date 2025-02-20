import {useCheckboxGroup} from "headless/CheckboxGroup/CheckboxGroup";
import {ReactComponent as CheckIcon} from "assets/image/check.svg";
import React from "react";
import styles from "./LineCheckBoxGroupCheck.module.scss";

type LineCheckBoxGroupCheckProps = {
    value: string;
};

const LineCheckBoxGroupCheck = ({value}: LineCheckBoxGroupCheckProps) => {
    const {isChecked} = useCheckboxGroup();
    const checked = isChecked(value);
    const combinedClassName = `${styles.lineCheckBoxGroupCheck} ${
        checked ? styles.lineCheckBoxGroupCheckChecked : ""
    }`;

    return (
        <div className={combinedClassName}>
            {checked && <CheckIcon width={12.5} />}
        </div>
    );
};

export default LineCheckBoxGroupCheck;
