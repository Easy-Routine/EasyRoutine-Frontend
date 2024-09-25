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
        const data = [
            { month: "1월", value: 400 },
            { month: "2월", value: 300 },
            { month: "3월", value: 200 },
            { month: "4월", value: 278 },
            { month: "5월", value: 189 },
            { month: "6월", value: 400 },
            { month: "7월", value: 300 },
            { month: "8월", value: 400 },
            { month: "9월", value: 300 },
            { month: "10월", value: 200 },
            { month: "11월", value: 278 },
            { month: "12월", value: 189 },
        ];

        return (
            <Box>
                <Graph
                    onDotClick={(data) => console.log(data)}
                    data={data}
                    lineKey="month"
                    areaKey="value"
                />
            </Box>
        );
    },
};
