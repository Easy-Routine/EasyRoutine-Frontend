/** @jsxImportSource @emotion/react */

import React from "react";

import {css} from "@emotion/react";
import TabGroup from "headless/TabGroup/TabGroup";
import LineTabGroupItem from "./LineTabGroupItem";

type LineTabGroupProps = {
    defaultValue: string;
    children: React.ReactNode;
};

const LineTabGroup = ({defaultValue, children}: LineTabGroupProps) => {
    const lineTabGroupStyle = css`
        display: flex;
        width: 100%;
    `;

    return (
        <TabGroup defaultValue={defaultValue}>
            <div css={[lineTabGroupStyle]}>{children}</div>
        </TabGroup>
    );
};

export default LineTabGroup;

LineTabGroup.Item = LineTabGroupItem;
