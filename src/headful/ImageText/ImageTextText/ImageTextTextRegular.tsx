/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";

type ImageTextTextRegularProps = {
    children: React.ReactNode;
};

const ImageTextTextRegular = ({children}: ImageTextTextRegularProps) => {
    const theme = useTheme();

    const imageTextTextRegularStyle = css`
        font-size: ${theme.fontSize.xs};
        font-weight: ${theme.fontWeight.regular};
        text-align: left;
    `;

    return <div css={imageTextTextRegularStyle}>{children}</div>;
};

export default ImageTextTextRegular;
