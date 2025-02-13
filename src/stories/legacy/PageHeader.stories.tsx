import type { Meta, StoryObj } from "@storybook/react";
import PageHeader from "components/content/PageHeader/PageHeader";

const meta: Meta<any> = {};

export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
    render: () => {
        return (
            <PageHeader>
                <PageHeader.ReturnCircle
                    onReturnCircleClick={() => console.log("")}
                />
                <PageHeader.PageTitle>루틴 생성</PageHeader.PageTitle>
            </PageHeader>
        );
    },
};
