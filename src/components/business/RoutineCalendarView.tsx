import CustomCalendar from "components/content/CustomCalendar/CustomCalendar";
import styled from "styled-components";
import RoutineRecordListView from "./RoutineRecordListView";
import { useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineCalendarView = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

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
        <Container>
            <CustomCalendar
                onNextMonthButtnClick={(date) =>
                    console.log(date, "이전 달의 날짜별 루틴 기록 가져오기")
                }
                onPrevMonthButtonClick={(date) => console.log(date, "")}
                onDateButtonClick={(date) => {
                    console.log(date, "해당 날짜의 운동 기록 가져오기");
                    setSelectedDate(date);
                }}
                dotDataByDate={data}
                dotDataKey={"routineRecords"}
            />

            <RoutineRecordListView date={selectedDate} />
        </Container>
    );
};

export default RoutineCalendarView;
