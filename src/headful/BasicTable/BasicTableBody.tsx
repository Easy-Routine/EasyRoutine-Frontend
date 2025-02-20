/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from "react";

type BasicTableBodyProps = {
    children: React.ReactNode;
};

const BasicTableBody = ({children}: BasicTableBodyProps) => {
    const basicTableBodyStyle = css``;

    return <tbody css={basicTableBodyStyle}>{children}</tbody>;
};

export default BasicTableBody;
