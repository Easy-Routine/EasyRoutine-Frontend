/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";

type BasicTableHeaderProps = {
    children: React.ReactNode;
};

const BasicTableHeader = ({children}: BasicTableHeaderProps) => {
    const theme = useTheme();
    const basicTableHeaderStyle = css`
        font-weight: ${theme.fontWeight.semibold};
    `;

    return (
        <thead>
            <tr css={basicTableHeaderStyle}>{children}</tr>
        </thead>
    );
};

export default BasicTableHeader;
