import React from "react";
import styles from "./BasicTableHeader.module.scss";

type BasicTableHeaderProps = {
    children: React.ReactNode;
};

const BasicTableHeader = ({children}: BasicTableHeaderProps) => {
    return (
        <thead>
            <tr className={styles.basicTableHeader}>{children}</tr>
        </thead>
    );
};

export default BasicTableHeader;
