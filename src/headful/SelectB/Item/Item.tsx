import {useDropdown} from "headless/Dropdown/Dropdown";
import SelectGroup, {useSelectGroup} from "headless/SelectGroup/SelectGroup";
import React from "react";
import styles from "./Item.module.scss";
import {SelectGroupValue} from "headless/SelectGroup/SelectGroupItem";

type Item = React.ComponentProps<typeof SelectGroup.Item> & {};

const Item = ({value, onSelectGroupItemClick, children}: Item) => {
    const {closeDropdown} = useDropdown();
    const {selectGroupValue} = useSelectGroup();

    const isCurrentItem = value === selectGroupValue;

    const handleBaiscSelectItemPageSizeItemClick = async (
        value: SelectGroupValue,
    ) => {
        onSelectGroupItemClick && onSelectGroupItemClick(value as string);
        closeDropdown();
    };

    return (
        <SelectGroup.Item
            className={styles.Item}
            value={value}
            onSelectGroupItemClick={handleBaiscSelectItemPageSizeItemClick}
        >
            {children}
        </SelectGroup.Item>
    );
};

export default Item;
