/** @jsxImportSource @emotion/react */

import React from "react";

import {css} from "@emotion/react";
import TabGroup from "headless/TabGroup/TabGroup";
import ColorTabGroupItem from "./ColorTabGroupItem";

type ColorTabGroupProps = {
    defaultValue: string;
    children: React.ReactNode;
};

const ColorTabGroup = ({defaultValue, children}: ColorTabGroupProps) => {
    const colorTabGroupStyle = css`
        display: flex;
        justify-content: space-between;
        width: 80%;
    `;

    return (
        <TabGroup defaultValue={defaultValue}>
            <div css={[colorTabGroupStyle]}>{children}</div>
        </TabGroup>
    );
};

export default ColorTabGroup;

ColorTabGroup.Item = ColorTabGroupItem;
