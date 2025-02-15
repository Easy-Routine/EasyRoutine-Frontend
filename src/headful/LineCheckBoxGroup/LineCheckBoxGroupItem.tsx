import {css} from "@emotion/react";
import ImageText from "headful/ImageText/ImageText";
import ImageTextText from "headful/ImageText/ImageTextText/ImageTextText";
import CheckboxGroup, {
    useCheckboxGroup,
} from "headless/CheckboxGroup/CheckboxGroup";
import React from "react";
import LineCheckBoxGroup from "./LineCheckBoxGroup";

type LineCheckBoxGroupItemProps = {
    value: string;
    children: React.ReactNode;
};

const LineCheckBoxGroupItem = ({
    value,
    children,
}: LineCheckBoxGroupItemProps) => {
    const lineCheckBoxGroupItemStyle = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    return (
        <CheckboxGroup.Item
            defaultStyle={lineCheckBoxGroupItemStyle}
            value={value}
        >
            {children}
            <LineCheckBoxGroup.Check value={value} />
        </CheckboxGroup.Item>
    );
};

export default LineCheckBoxGroupItem;
