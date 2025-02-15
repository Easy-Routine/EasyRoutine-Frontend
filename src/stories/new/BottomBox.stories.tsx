/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import BottomBox from "headful/BottomBox/BottomBox";

type BottomBoxProps = React.ComponentProps<typeof BottomBox>;

const meta: Meta<BottomBoxProps> = {
    title: "Components/BottomBox", // Storybook에서 표시될 제목
    component: BottomBox,
};

export default meta;

type Story = StoryObj<BottomBoxProps>;

export const DefaultBottomBox: Story = {
    render: () => <BottomBox>바텀박스</BottomBox>,
};
