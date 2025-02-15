import {css, useTheme} from "@emotion/react";
import TabGroupItem from "headless/TabGroup/TabGroupItem";
import React from "react";

type ColorTabGroupItemProps = {
    value: string;
};

const ColorTabGroupItem = ({value}: ColorTabGroupItemProps) => {
    const theme = useTheme();

    const chipTabGroupItemStyle = css`
        width: 35px;
        height: 35px;
        border-radius: ${theme.borderRadius.circle};
        background-color: ${value};
        border: none;
        box-sizing: border-box;
    `;

    const activeColorTabGroupItemStyle = css`
        border: 5px solid ${theme.color.primary};
    `;

    return (
        <TabGroupItem
            value={value}
            defaultStyle={chipTabGroupItemStyle}
            activeStyle={activeColorTabGroupItemStyle}
        />
    );
};

export default ColorTabGroupItem;
