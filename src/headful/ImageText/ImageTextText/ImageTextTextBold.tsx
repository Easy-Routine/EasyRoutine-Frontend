/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";

type ImageTextTextBoldProps = {
    children: React.ReactNode;
};

const ImageTextTextBold = ({children}: ImageTextTextBoldProps) => {
    const theme = useTheme();

    const imageTextTextBoldStyle = css`
        font-size: ${theme.fontSize.lg};
        font-weight: ${theme.fontWeight.semibold};
    `;

    return <div css={imageTextTextBoldStyle}>{children}</div>;
};

export default ImageTextTextBold;
