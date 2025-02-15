/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import ChipTabGroup from "headful/ChipTabGroup/ChipTabGroup";

type ChipTabGroupProps = React.ComponentProps<typeof ChipTabGroup>;

const meta: Meta<ChipTabGroupProps> = {
    title: "Components/ChipTabGroup", // Storybook에서 표시될 제목
    component: ChipTabGroup,
};

export default meta;

type Story = StoryObj<ChipTabGroupProps>;

export const DefaultChipTabGroup: Story = {
    render: () => (
        <ChipTabGroup defaultValue="1">
            <ChipTabGroup.Item value="1">1</ChipTabGroup.Item>
            <ChipTabGroup.Item value="2">2</ChipTabGroup.Item>
            <ChipTabGroup.Item value="3">3</ChipTabGroup.Item>
            <ChipTabGroup.Item value="4">4</ChipTabGroup.Item>
            <ChipTabGroup.Item value="5">5</ChipTabGroup.Item>
            <ChipTabGroup.Item value="6">6</ChipTabGroup.Item>
        </ChipTabGroup>
    ),
};
