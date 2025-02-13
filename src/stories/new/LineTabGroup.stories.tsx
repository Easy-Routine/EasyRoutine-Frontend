/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import LineTabGroup from "headful/LineTabGroup/LineTabGroup";

type LineTabGroupProps = React.ComponentProps<typeof LineTabGroup>;

const meta: Meta<LineTabGroupProps> = {
    title: "Components/LineTabGroup", // Storybook에서 표시될 제목
    component: LineTabGroup,
};

export default meta;

type Story = StoryObj<LineTabGroupProps>;

export const DefaultLineTabGroup: Story = {
    render: () => (
        <LineTabGroup defaultValue="1">
            <LineTabGroup.Item value="1">1</LineTabGroup.Item>
            <LineTabGroup.Item value="2">2</LineTabGroup.Item>
        </LineTabGroup>
    ),
};
