import type { Meta, StoryObj } from "@storybook/react";
import Box from "components/box/Box/Box";
import CustomCalendar from "components/content/CustomCalendar/CustomCalendar";
import Graph from "components/content/Graph/Graph";

type LabelBoxProps = React.ComponentProps<typeof Graph>;

const meta: Meta<LabelBoxProps> = {
    component: Graph,
};

export default meta;

type Story = StoryObj<any>;

export const WithCalendar: Story = {
    render: () => {
        const data = [
            {
                date: "2024-09-26",
                routineRecords: [
                    { id: 1, color: "#855CF8" },
                    { id: 2, color: "#F26B2C" },
                    { id: 3, color: "#2DAF2D" },
                ],
            },
            {
                date: "2024-09-27",
                routineRecords: [
                    { id: 3, color: "#F26B2C" },
                    { id: 4, color: "#2DAF2D" },
                ],
            },
        ];
        return (
            <div>
                <h1>My Custom Calendar</h1>
                <CustomCalendar
                    onNextMonthButtnClick={(date) =>
                        console.log(date, "이전 달의 날짜별 루틴 기록 가져오기")
                    }
                    onPrevMonthButtonClick={(date) => console.log(date, "")}
                    onDateButtonClick={(date) =>
                        console.log(date, "해당 날짜의 운동 기록 가져오기")
                    }
                    dotDataByDate={data}
                    dotDataKey={"routineRecords"}
                />
            </div>
        );
    },
};
