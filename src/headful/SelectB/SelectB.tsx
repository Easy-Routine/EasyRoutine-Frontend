import React from "react";
import Dropdown from "headless/Dropdown/Dropdown";
import SelectGroup from "headless/SelectGroup/SelectGroup";
import styles from "./SelectB.module.scss";
import Item from "./Item/Item";
import Content from "./Content/Content";
import {SelectGroupValue} from "headless/SelectGroup/SelectGroupItem";
import classNames from "classnames";
import Trigger from "./Trigger/Trigger";

export interface SelectBContextType {
    disabled?: boolean;
}

const SelectBContext = React.createContext<SelectBContextType | undefined>(
    undefined,
);

export const useSelectBContext = () => {
    const context = React.useContext(SelectBContext);
    if (!context) {
        throw new Error(
            "useSelectBContext must be used within a SelectBProvider",
        );
    }
    return context;
};

type SelectBProps = {
    children: React.ReactNode;
    defaultValue: SelectGroupValue;
    disabled?: boolean;
};

const SelectB = ({children, defaultValue, disabled = false}: SelectBProps) => {
    return (
        <SelectBContext.Provider value={{disabled}}>
            <SelectGroup defaultValue={defaultValue}>
                <Dropdown>
                    <Dropdown.Box className={styles.SelectB}>
                        {children}
                    </Dropdown.Box>
                </Dropdown>
            </SelectGroup>
        </SelectBContext.Provider>
    );
};

export default SelectB;

SelectB.Item = Item;
SelectB.Content = Content;
SelectB.Trigger = Trigger;
