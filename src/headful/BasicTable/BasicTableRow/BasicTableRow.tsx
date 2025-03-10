import React from "react";
import styles from "./BasicTableRow.module.scss";

// (선택) classNames 라이브러리를 사용하면 조건부 클래스 결합이 편리합니다.
import classNames from "classnames";

type BasicTableRowProps = {
    children: React.ReactNode;
    isGrayLine?: boolean;
    isPrimaryLine?: boolean;
};

const BasicTableRow = ({
    children,
    isGrayLine,
    isPrimaryLine,
}: BasicTableRowProps) => {
    const rowClassName = classNames(styles.basicTableRow, {
        [styles.PrimaryLine]: isPrimaryLine,
        [styles.GrayLine]: isGrayLine && !isPrimaryLine, // primaryLine이 우선 적용되도록 함
    });

    return <tr className={rowClassName}>{children}</tr>;
};

export default BasicTableRow;
