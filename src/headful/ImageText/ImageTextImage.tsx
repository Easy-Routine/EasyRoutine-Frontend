/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from "react";

type ImageTextImageProps = {
    width: number;
    height: number;
    src: string;
};

const ImageTextImage = ({width, height, src}: ImageTextImageProps) => {
    const ImageTextImageStyle = css`
        width: ${width}px;
        height: ${height}px;
        background-image: url(${src});
    `;

    return <img css={ImageTextImageStyle} />;
};

export default ImageTextImage;
