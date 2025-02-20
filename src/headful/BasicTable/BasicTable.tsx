/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from "react";
import BasicTableHeader from "./BasicTableHeader";
import BasicTableRow from "./BasicTableRow";
import BasicTableCell from "./BasicTableCell";
import BasicTableBody from "./BasicTableBody";
import BasicTableInput from "./BasicTableInput";

type BasicTableProps = {
    children: React.ReactNode;
    // custom style prop for the table element
};

const BasicTable = ({children}: BasicTableProps) => {
    const basicTableStyle = css`
        width: 100%;
        border-collapse: separate; /* 변경 */
        border-spacing: 0 5px; /* 셀 간 간격 0 */
        table-layout: fixed; /* 셀 크기 균일화 */
    `;

    return (
        <table onClick={e => e.stopPropagation()} css={basicTableStyle}>
            {children}
        </table>
    );
};
export default BasicTable;

BasicTable.Header = BasicTableHeader;
BasicTable.Row = BasicTableRow;
BasicTable.Cell = BasicTableCell;
BasicTable.Body = BasicTableBody;
BasicTable.Input = BasicTableInput;
