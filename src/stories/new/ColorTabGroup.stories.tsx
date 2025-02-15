/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import ColorTabGroup from "headful/ColorTabGroup/ColorTabGroup";

type ColorTabGroupProps = React.ComponentProps<typeof ColorTabGroup>;

const meta: Meta<ColorTabGroupProps> = {
    title: "Components/ColorTabGroup", // Storybook에서 표시될 제목
    component: ColorTabGroup,
};

export default meta;

type Story = StoryObj<ColorTabGroupProps>;

export const DefaultColorTabGroup: Story = {
    render: () => (
        <ColorTabGroup defaultValue="1">
            <ColorTabGroup.Item value="#855CF8" />
            <ColorTabGroup.Item value="#F26B2C" />
            <ColorTabGroup.Item value="#2DAF2D" />
            <ColorTabGroup.Item value="#455A64" />
            <ColorTabGroup.Item value="#DD408F" />
        </ColorTabGroup>
    ),
};
