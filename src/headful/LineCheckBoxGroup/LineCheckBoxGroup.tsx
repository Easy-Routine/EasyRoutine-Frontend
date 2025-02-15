/** @jsxImportSource @emotion/react */
import CheckboxGroup from "headless/CheckboxGroup/CheckboxGroup";
import React from "react";
import LineCheckBoxGroupItem from "./LineCheckBoxGroupItem";
import LineCheckBoxGroupCheck from "./LineCheckBoxGroupCheck";
import {css} from "@emotion/react";

type CheckboxGroupProps = {
    children: React.ReactNode;
};

const LineCheckBoxGroup = ({children}: CheckboxGroupProps) => {
    const lineCheckBoxGroupStyle = css`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `;
    return (
        <CheckboxGroup>
            <div css={lineCheckBoxGroupStyle}>{children}</div>
        </CheckboxGroup>
    );
};

export default LineCheckBoxGroup;

LineCheckBoxGroup.Item = LineCheckBoxGroupItem;
LineCheckBoxGroup.Check = LineCheckBoxGroupCheck;
