import type { Meta, StoryObj } from "@storybook/react";
import Logo from "components/content/Logo/Logo";
import SummaryBox from "components/content/Summary/SummaryBox";

const meta: Meta<any> = {};

export default meta;

type Story = StoryObj<any>;

export const LogoComp: Story = {
    render: () => {
        return <Logo />;
    },
};

export const SummaryComp: Story = {
    render: () => {
        return <SummaryBox seconds={3450} weight={3450} />;
    },
};
