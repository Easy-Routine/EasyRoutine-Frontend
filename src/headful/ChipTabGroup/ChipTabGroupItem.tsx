import {css, useTheme} from "@emotion/react";
import TabGroupItem from "headless/TabGroup/TabGroupItem";
import React from "react";

type ChipTabGroupItemProps = {
    value: string;
    children: React.ReactNode;
};

const ChipTabGroupItem = ({value, children}: ChipTabGroupItemProps) => {
    const theme = useTheme();

    const chipTabGroupItemStyle = css`
        flex: 1;
        font-size: ${theme.fontSize.md};
        font-weight: ${theme.fontWeight.regular};
        border-radius: ${theme.borderRadius.lg};
        border: ${theme.color.gray.light};
        padding: 8px 10px;
        color: ${theme.color.gray.light};
        background-color: inherit;
        text-align: center;
        box-sizing: border-box;
        min-width: 50px;
    `;

    const activeChipTabGroupItemStyle = css`
        font-weight: ${theme.fontWeight.bold};
        border: 1px solid ${theme.color.primary};
        color: ${theme.color.text.white};
        background-color: ${theme.color.primary};
    `;

    return (
        <TabGroupItem
            value={value}
            defaultStyle={chipTabGroupItemStyle}
            activeStyle={activeChipTabGroupItemStyle}
        >
            {children}
        </TabGroupItem>
    );
};

export default ChipTabGroupItem;
