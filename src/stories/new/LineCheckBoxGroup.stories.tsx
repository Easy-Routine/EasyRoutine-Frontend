/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import LineCheckBoxGroup from "headful/LineCheckBoxGroup/LineCheckBoxGroup";

type LineCheckBoxGroupProps = React.ComponentProps<typeof LineCheckBoxGroup>;

const meta: Meta<LineCheckBoxGroupProps> = {
    title: "Components/LineCheckBoxGroup", // Storybook에서 표시될 제목
    component: LineCheckBoxGroup,
};

export default meta;

type Story = StoryObj<LineCheckBoxGroupProps>;

export const DefaultLineCheckBoxGroup: Story = {
    render: () => (
        <LineCheckBoxGroup>
            <LineCheckBoxGroup.Item value="item1">1</LineCheckBoxGroup.Item>
            <LineCheckBoxGroup.Item value="item2">2</LineCheckBoxGroup.Item>
            <LineCheckBoxGroup.Item value="item3">3</LineCheckBoxGroup.Item>
        </LineCheckBoxGroup>
    ),
};
