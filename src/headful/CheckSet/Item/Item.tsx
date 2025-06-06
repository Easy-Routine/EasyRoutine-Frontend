import CheckboxGroup, {
    useCheckboxGroup,
} from "headless/CheckboxGroup/CheckboxGroup";
import React from "react";
import styles from "./Item.module.scss";
import classNames from "classnames";

type ItemProps = React.ComponentProps<typeof CheckboxGroup.Item> & {};

const Item = ({...props}: ItemProps) => {
    const {isChecked} = useCheckboxGroup();

    const CheckboxStyle = classNames(styles.Checkbox, {
        [styles.Active]: isChecked(props.value),
    });

    return (
        <CheckboxGroup.Item {...props} className={styles.Item}>
            <div className={CheckboxStyle} />
            <span>{props.children}</span>
        </CheckboxGroup.Item>
    );
};

export default Item;
