/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import CircleButton from "headful/CircleButton/CircleButton";

type CircleButtonProps = React.ComponentProps<typeof CircleButton>;

const meta: Meta<CircleButtonProps> = {
    title: "Components/CircleButton", // Storybook에서 표시될 제목
    component: CircleButton,
};

export default meta;

type Story = StoryObj<CircleButtonProps>;

export const DefaultCircleButton: Story = {
    render: () => (
        <CircleButton width={42} height={42}>
            버튼
        </CircleButton>
    ),
};
