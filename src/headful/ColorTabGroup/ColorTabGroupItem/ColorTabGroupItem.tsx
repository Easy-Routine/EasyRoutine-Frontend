import TabGroupItem from "headless/TabGroup/TabGroupItem";
import React from "react";
import styles from "./ColorTabGroupItem.module.scss";
import {useTabGroup} from "headless/TabGroup/TabGroup";
import classNames from "classnames";
import {Color} from "types/enum";

type ColorTabGroupItemProps = React.ComponentProps<typeof TabGroupItem>;

const ColorTabGroupItem = (props: ColorTabGroupItemProps) => {
    const {tabGroupValue} = useTabGroup();
    const isCurrentItem = tabGroupValue === props.value;
    const combinedStyles = classNames(styles.colorTabGroupItem, {
        [styles.Active]: isCurrentItem,
        [styles.Violet]: props.value === Color.VIOLET,
        [styles.Orange]: props.value === Color.ORANGE,
        [styles.Green]: props.value === Color.GREEN,
        [styles.Blue]: props.value === Color.BLUE,
        [styles.Pink]: props.value === Color.PINK,
    });

    return <TabGroupItem {...props} className={combinedStyles} />;
};

export default ColorTabGroupItem;
