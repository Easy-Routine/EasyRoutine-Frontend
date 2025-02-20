/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";

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
    const theme = useTheme();
    const basicTableRowStyle = css`
        background-color: ${isPrimaryLine ? theme.color.primary + 30 : ""};
        background-color: ${isGrayLine ? theme.color.gray.dark + 30 : ""};
        background-opacity: 0.5;
    `;

    return <tr css={basicTableRowStyle}>{children}</tr>;
};

export default BasicTableRow;
