/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

type ColumnFlexBoxProps = {
    children: React.ReactNode;
};

const ColumnFlexBox = ({children}: ColumnFlexBoxProps) => {
    const columnFlexBoxStyle = css`
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 10px 0;
    `;

    return <div css={columnFlexBoxStyle}>{children}</div>;
};

export default ColumnFlexBox;
