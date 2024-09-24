import type { Meta, StoryObj } from "@storybook/react";
import EmptyView from "components/content/EmptyView/EmptyView";

type EmptyViewProps = React.ComponentProps<typeof EmptyView>;

const meta: Meta<EmptyViewProps> = {
    component: EmptyView,
};

export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
    render: () => {
        return <EmptyView emptyText="현재 루틴이 없습니다." />;
    },
};
