import React from "react";
import styles from "./BasicTableCell.module.scss";

type BasicTableCellProps = {
    children: React.ReactNode;
    align?: "left" | "center" | "right";
};

const BasicTableCell = ({children, align = "center"}: BasicTableCellProps) => {
    const alignClass =
        align === "left"
            ? styles.alignLeft
            : align === "right"
              ? styles.alignRight
              : styles.alignCenter;

    return (
        <div className={`${styles.basicTableCell} ${alignClass}`}>
            {children}
        </div>
    );
};

export default BasicTableCell;
