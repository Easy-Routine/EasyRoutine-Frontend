/** @jsxImportSource @emotion/react */
import React from "react";
import ImageTextTextBold from "./ImageTextTextBold";
import ImageTextTextRegular from "./ImageTextTextRegular";
import {css} from "@emotion/react";

type ImageTextTextProps = {
    children: React.ReactNode;
};

const ImageTextText = ({children}: ImageTextTextProps) => {
    const imageTextTextStyle = css`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `;

    return <div css={imageTextTextStyle}>{children}</div>;
};

export default ImageTextText;

ImageTextText.Bold = ImageTextTextBold;
ImageTextText.Regular = ImageTextTextRegular;
