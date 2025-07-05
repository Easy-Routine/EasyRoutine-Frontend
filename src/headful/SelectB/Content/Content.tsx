import React from "react";
import Dropdown, {useDropdown} from "headless/Dropdown/Dropdown";
import styles from "./Content.module.scss";
import classNames from "classnames";

type ContentProps = {
    children: React.ReactNode;
};

const Content = ({children}: ContentProps) => {
    const {dropdownValue} = useDropdown();

    const combinedStyle = classNames(styles.Content, {
        [styles.Open]: dropdownValue, // dropdownValue가 true일 때 Open 클래스 적용
        [styles.Closed]: !dropdownValue, // dropdownValue가 false일 때 Closed 클래스 적용
    });

    return (
        <Dropdown.Content className={combinedStyle}>
            {children}
        </Dropdown.Content>
    );
};

export default Content;
