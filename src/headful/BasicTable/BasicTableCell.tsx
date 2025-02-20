/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";

type BasicTableCellProps = {
    children: React.ReactNode;
    align?: "left" | "center" | "right";
};

const BasicTableCell = ({children, align = "center"}: BasicTableCellProps) => {
    const theme = useTheme();

    const tableCellStyle = css`
        padding: 5px;
        display: table-cell;
        vertical-align: top; /* 수직 정렬: 위쪽 */
        text-align: left;
        word-wrap: break-word; /* 긴 단어 줄바꿈 */
        word-break: break-word; /* 단어가 길 때 강제로 줄바꿈 */
        white-space: normal; /* 텍스트가 셀 너비를 초과하면 줄바꿈 */
        overflow-wrap: break-word; /* CSS3 기준 */
        font-size: ${theme.fontSize.sm};
    `;

    return <div css={[tableCellStyle, {textAlign: align}]}>{children}</div>;
};

export default BasicTableCell;
