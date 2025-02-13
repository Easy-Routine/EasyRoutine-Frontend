import {css, useTheme} from "@emotion/react";
import TabGroupItem from "headless/TabGroup/TabGroupItem";
import React from "react";

type LineTabGroupItemProps = {
    value: string;
    children: React.ReactNode;
};

const LineTabGroupItem = ({value, children}: LineTabGroupItemProps) => {
    const theme = useTheme();

    const defaultLineTabGroupItemStyle = css`
        width: 100%;
        font-size: ${theme.fontSize.md};
        font-weight: ${theme.fontWeight.regular};
        border: none;
        padding: 15px 0;
        color: ${theme.color.text.black};
        text-align: center;
        border-bottom: 1px solid transparent;
        background: none;
    `;

    const activeLineTabGroupItemStyle = css`
        font-weight: ${theme.fontWeight.bold};
        border-bottom: 1px solid ${theme.color.primary};
        color: ${theme.color.primary};
    `;

    return (
        <TabGroupItem
            value={value}
            defaultStyle={defaultLineTabGroupItemStyle}
            activeStyle={activeLineTabGroupItemStyle}
        >
            {children}
        </TabGroupItem>
    );
};

export default LineTabGroupItem;
