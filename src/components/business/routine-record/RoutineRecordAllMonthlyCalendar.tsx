import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import "./CalendarStyle.css";
import Box from "components/box/Box/Box";
import styled from "styled-components";
import { ReactComponent as CalendarArrowLeftIcon } from "assets/image/calendar-arrow-left.svg";
import { ReactComponent as CalendarArrowRightIcon } from "assets/image/calendar-arrow-right.svg";
import moment from "moment";
import "moment/locale/ko";
import useGetRoutineRecordAllMonthlyQuery from "hooks/server/useGetRoutineRecordAllMonthlyQuery";

const CalendarArrowLeft = styled(CalendarArrowLeftIcon)`
    padding: 5px;
`;
const CalendarArrowRight = styled(CalendarArrowRightIcon)`
    padding: 5px;
`;

const Container = styled.div`
    padding: 20px;
    .react-calendar__navigation {
        display: none; /* 내비게이션을 숨김 */
    }

    .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    .react-calendar {
        width: 100%;
        border: none;
        background-color: ${({ theme }) => theme.color.background.box};
        font-family: "Noto Sans Korean";
    }

    .react-calendar__month-view__weekdays {
        font-size: ${({ theme }) => theme.fontSize.lg};
    }

    abbr[title] {
        text-decoration: none;
    }

    .react-calendar__month-view__days__day {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: ${({ theme }) => theme.color.text.black};
        transition: background-color 0.2s;
        box-sizing: border-box; /* 패딩과 마진 포함 */
    }
    .react-calendar__month-view__days__day--weekend {
        color: ${({ theme }) => theme.color.warning};
    }
    .react-calendar__month-view__days__day--neighboringMonth {
        color: ${({ theme }) => theme.color.gray.light};
    }

    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus,
    .react-calendar__tile--active {
        background: none;
    }

    .react-calendar__tile {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;
        padding: 5px 0;
        // color: ${({ theme }) => theme.color.text.black};
    }

    .react-calendar__tile abbr {
        display: none;
    }

    .react-calendar__tile--now {
        background: none;
    }

    .react-calendar__tile
        react-calendar__month-view__days__day
        react-calendar__month-view__days__day--weekend {
    }
    react-calendar__tile--now {
        background: none;
    }
`;

const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 0 10px;
`;

const DateInfo = styled.span`
    font-size: 18px;
    font-weight: bold;
`;

const NavigationButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60px;
`;

const Circle = styled.div<{ isActive: boolean; isToday: boolean }>`
    width: 75%;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${({ theme, isToday }) =>
        isToday ? theme.color.gray.light : null};
    background-color: ${({ theme, isActive }) =>
        isActive ? theme.color.primary : null};
    color: ${({ theme, isActive }) =>
        isActive ? theme.color.text.white : null};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DotWrapper = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    gap: 5px;
    align-items: center;
    flex-wrap: wrap;
    overflow: visible;
`;

const Dot = styled.div<{ backgroundColor: string }>`
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

type DotData = {
    _id: number;
    color: string; // 색상은 문자열로 가정
};

export type DotDataByDate = {
    date: string;
    [key: string]: string | DotData[];
};

type CustomCalendarProps = {
    onPrevMonthButtonClick: (date: any) => void;
    onNextMonthButtnClick: (date: any) => void;
    onDateButtonClick: (date: any) => void;
    // dotDataByDate: DotDataByDate[];
    currentMonth: Date;
    dotDataKey: string;
};

const RoutineRecordAllMonthlyCalendar = ({
    onPrevMonthButtonClick,
    onNextMonthButtnClick,
    onDateButtonClick,
    // dotDataByDate,
    currentMonth,
    dotDataKey,
}: CustomCalendarProps) => {
    const [date, setDate] = useState(new Date());
    const [activeStartDate, setActiveStartDate] = useState(new Date());

    const { data: routineRecordAllMonthly } =
        useGetRoutineRecordAllMonthlyQuery(currentMonth);

    const dotDataByDate = routineRecordAllMonthly!;

    const handleDateButtonClick = (date: any) => {
        onDateButtonClick(date);
        setDate(date);
    };

    const handlePrevMonthButtonClick = () => {
        const previousMonth = new Date(
            activeStartDate.getFullYear(),
            activeStartDate.getMonth() - 1,
            1
        );
        onPrevMonthButtonClick(previousMonth);
        setActiveStartDate(previousMonth); // 이전 달로 설정
    };

    const handleNextMonthButtnClick = () => {
        const nextMonth = new Date(
            activeStartDate.getFullYear(),
            activeStartDate.getMonth() + 1,
            1
        );
        onNextMonthButtnClick(nextMonth); // 다음 ��로 설정
        setActiveStartDate(nextMonth); // 다음 달로 설정
    };

    const formatDate = (date: Date) => {
        moment.locale("ko"); // 한국어 로케일 설정
        return moment(date).format("YYYY년 M월"); // 예: 2024년 9월
    };

    const getDotDataForDate = (date: Date, dotDataKey: string) => {
        const formattedDate = moment(date).format("YYYY-MM-DD");
        const record = dotDataByDate.find(
            (item) => item.date === formattedDate
        );
        return record ? record[dotDataKey] : [];
    };

    const tileContent = ({ date: tileDate }: { date: Date }) => {
        const isActive = moment(date).isSame(moment(tileDate), "day");
        const isToday = moment(tileDate).isSame(moment(), "day");
        const dotData = getDotDataForDate(tileDate, dotDataKey);
        return (
            <>
                <Circle isActive={isActive} isToday={isToday}>
                    {tileDate.getDate()}
                </Circle>
                <DotWrapper>
                    {Array.isArray(dotData) &&
                        dotData
                            .map((item) => (
                                <Dot
                                    key={item._id}
                                    backgroundColor={item.color}
                                />
                            ))
                            .splice(0, 3)}
                </DotWrapper>
            </>
        );
    };

    return (
        <Box>
            <Container>
                <CalendarHeader>
                    <DateInfo>{formatDate(activeStartDate)}</DateInfo>
                    <NavigationButtonWrapper>
                        <CalendarArrowLeft
                            onClick={handlePrevMonthButtonClick}
                        />

                        <CalendarArrowRight
                            onClick={handleNextMonthButtnClick}
                        />
                    </NavigationButtonWrapper>
                </CalendarHeader>
                <Calendar
                    onChange={handleDateButtonClick}
                    value={date}
                    activeStartDate={activeStartDate}
                    tileContent={tileContent}
                />
            </Container>
        </Box>
    );
};

export default RoutineRecordAllMonthlyCalendar;
