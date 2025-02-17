/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";

type TextProps = {
    children: React.ReactNode;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    textAlign?: string;
};

const Text = ({
    children,
    color,
    fontSize,
    fontWeight,
    textAlign,
}: TextProps) => {
    const theme = useTheme();

    const imageTextTextBoldStyle = css`
        font-size: ${fontSize ?? theme.fontSize.md};
        font-weight: ${fontWeight ?? theme.fontWeight.regular};
        color: ${color ?? theme.color.text.black};
        text-align: ${textAlign ?? "left"};
    `;

    return <div css={imageTextTextBoldStyle}>{children}</div>;
};

export default Text;
