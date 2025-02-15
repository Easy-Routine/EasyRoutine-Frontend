/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from "react";
import ImageTextImage from "./ImageTextImage";
import ImageTextText from "./ImageTextText/ImageTextText";

type ImageTextProps = {
    children: React.ReactNode;
};

const ImageText = ({children}: ImageTextProps) => {
    const imageTextStyle = css`
        display: flex;
        gap: 16px;
    `;

    return <div css={imageTextStyle}>{children}</div>;
};

export default ImageText;

ImageText.Image = ImageTextImage;
ImageText.Text = ImageTextText;
