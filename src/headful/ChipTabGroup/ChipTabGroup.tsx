/** @jsxImportSource @emotion/react */

import React from "react";

import {css} from "@emotion/react";
import TabGroup from "headless/TabGroup/TabGroup";
import ChipTabGroupItem from "./ChipTabGroupItem";

type ChipTabGroupProps = {
    defaultValue: string;
    children: React.ReactNode;
};

const ChipTabGroup = ({defaultValue, children}: ChipTabGroupProps) => {
    const lineTabGroupStyle = css`
        width: 100%;
        display: flex;
        overflow-x: scroll;
        gap: 10px;
        min-height: 32px;

        &::-webkit-scrollbar {
            display: none; /* 크롬, 사파리에서 스크롤바 숨김 */
        }
    `;

    return (
        <TabGroup defaultValue={defaultValue}>
            <div css={[lineTabGroupStyle]}>{children}</div>
        </TabGroup>
    );
};

export default ChipTabGroup;

ChipTabGroup.Item = ChipTabGroupItem;
