import React from "react";
import Dropdown, {useDropdown} from "headless/Dropdown/Dropdown";
import styles from "./Content.module.scss";
import classNames from "classnames";

type ContentProps = {
    children: React.ReactNode;
    height?: number;
};

const Content = ({children, height}: ContentProps) => {
    const {dropdownValue} = useDropdown();

    const cssVariables: React.CSSProperties = {
        "--height": `${height}px`,
    } as React.CSSProperties;

    const combinedStyle = classNames(styles.Content, {
        [styles.Open]: dropdownValue, // dropdownValue가 true일 때 Open 클래스 적용
        [styles.Closed]: !dropdownValue, // dropdownValue가 false일 때 Closed 클래스 적용
    });

    return (
        <Dropdown.Content className={combinedStyle} style={{...cssVariables}}>
            {children}
        </Dropdown.Content>
    );
};

export default Content;
