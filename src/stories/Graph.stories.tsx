import type { Meta, StoryObj } from "@storybook/react";
import Box from "components/box/Box/Box";
import Graph from "components/content/Graph/Graph";

type LabelBoxProps = React.ComponentProps<typeof Graph>;

const meta: Meta<LabelBoxProps> = {
    component: Graph,
};

export default meta;

type Story = StoryObj<any>;

export const WithGraph: Story = {
    render: () => {
        return (
            <Box>
                <Graph />
            </Box>
        );
    },
};
