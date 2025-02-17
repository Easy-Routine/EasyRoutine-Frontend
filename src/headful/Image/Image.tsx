/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";

type ImageProps = {
    width: number;
    height: number;
    src: string;
};

const Image = ({width, height, src}: ImageProps) => {
    const theme = useTheme();
    const ImageStyle = css`
        width: ${width}px;
        height: ${height}px;
        border: 1px solid ${theme.color.gray.light};
        border-radius: ${theme.borderRadius.xs};
    `;

    return <img css={ImageStyle} src={src} />;
};

export default Image;
