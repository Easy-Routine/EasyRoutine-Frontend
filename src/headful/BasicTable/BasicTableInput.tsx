/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";

type BasicTableInputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const BasicTableInput = ({...props}: BasicTableInputProps) => {
    const theme = useTheme();

    const basicTableInputWrapperStyle = css`
        width: 100%;
        height: 20px;

        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-bottom: 2px solid ${theme.color.gray.light};
        &:focus-within {
            border-bottom: 2px solid ${theme.color.primary};
        }
    `;
    const basicTableInputStyle = css`
        width: 100%;
        padding: 5px 10px;
        outline: none;
        border: none;
        background-color: inherit;
        font-size: ${theme.fontSize.sm};
        color: ${theme.color.text.black};
        text-align: center;
    `;

    return (
        <div css={basicTableInputWrapperStyle}>
            <input {...props} css={basicTableInputStyle} />
        </div>
    );
};

export default BasicTableInput;
