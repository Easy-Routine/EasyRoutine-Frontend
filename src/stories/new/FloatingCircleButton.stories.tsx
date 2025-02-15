/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";

type FloatingCircleButtonProps = React.ComponentProps<
    typeof FloatingCircleButton
>;

const meta: Meta<FloatingCircleButtonProps> = {
    title: "Components/FloatingCircleButton", // Storybook에서 표시될 제목
    component: FloatingCircleButton,
};

export default meta;

type Story = StoryObj<FloatingCircleButtonProps>;

export const DefaultFloatingCircleButton: Story = {
    render: () => (
        <FloatingCircleButton
            width={64}
            height={64}
            onFloatingCircleButtonClick={() => {}}
        >
            버튼
        </FloatingCircleButton>
    ),
};
