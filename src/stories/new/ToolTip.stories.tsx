/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import ToolTip from "headful/ToolTip/ToolTip";

type ToolTipProps = React.ComponentProps<typeof ToolTip>;

const meta: Meta<ToolTipProps> = {
    title: "Components/ToolTip", // Storybook에서 표시될 제목
    component: ToolTip,
};

export default meta;

type Story = StoryObj<ToolTipProps>;

export const DefaultToolTip: Story = {
    render: () => <ToolTip text="안녕하세요" toolTipPosition="right" />,
};
