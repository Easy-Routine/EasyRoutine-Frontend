/** @jsxImportSource @emotion/react */
import React, {ChangeEvent} from "react";
import styled from "styled-components";
import {ReactComponent as MagnifyIcon} from "assets/image/magnify.svg";
import {ReactComponent as XIcon} from "assets/image/x.svg";
import {css, useTheme} from "@emotion/react";

type SearchProps = {
    value: string;
    onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onInputClear?: () => void;
};

const SearchInput = ({onInputChange, onInputClear, value}: SearchProps) => {
    const theme = useTheme();

    const searchInputStyle = css`
        width: 100%;
        height: 44px;
        min-height: 44px;
        padding: 15px; 20px;
        box-sizing: border-box;
        border-radius: ${theme.borderRadius.xl};
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        background-color: ${theme.color.gray.lighter};
    `;
    const inputStyle = css`
        flex: 1;
        outline: none;
        border: none;
        background-color: inherit;
        font-size: ${theme.fontSize.md};
        color: ${theme.color.gray.normal};
    `;

    return (
        <div css={searchInputStyle}>
            <MagnifyIcon width={20} height={20} />
            <input
                css={inputStyle}
                type="text"
                placeholder="Search"
                value={value}
                onChange={onInputChange}
            />
            {value.length > 0 && (
                <XIcon width={12.5} height={12.5} onClick={onInputClear} />
            )}
        </div>
    );
};

export default SearchInput;
