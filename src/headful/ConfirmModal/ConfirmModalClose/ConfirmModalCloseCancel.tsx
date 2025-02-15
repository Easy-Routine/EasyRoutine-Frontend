/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";

type ConfirmModalCloseCancelProps = {
    children: React.ReactNode;
};

const ConfirmModalCloseCancel = ({children}: ConfirmModalCloseCancelProps) => {
    const theme = useTheme();

    const confirmModalCloseCancelStyle = css`
        width: 100%;
        height: 100%;
        color: ${theme.color.primary};
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    return <div css={confirmModalCloseCancelStyle}>{children}</div>;
};

export default ConfirmModalCloseCancel;
