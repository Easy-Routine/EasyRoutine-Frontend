/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import BasicButton from "headful/BasicButton/BasicButton";

type BasicButtonProps = React.ComponentProps<typeof BasicButton>;

const meta: Meta<BasicButtonProps> = {
    title: "Components/BasicButton", // Storybook에서 표시될 제목
    component: BasicButton,
};

export default meta;

type Story = StoryObj<BasicButtonProps>;

export const DefaultBasicButton: Story = {
    render: () => <BasicButton>버튼</BasicButton>,
};
