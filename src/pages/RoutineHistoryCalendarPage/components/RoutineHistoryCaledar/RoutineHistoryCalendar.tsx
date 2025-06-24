import React, {useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./RoutineHistoryCalendar.module.scss";
import Box from "components/box/Box/Box";
import {ReactComponent as CalendarArrowLeftIcon} from "assets/image/calendar-arrow-left.svg";
import {ReactComponent as CalendarArrowRightIcon} from "assets/image/calendar-arrow-right.svg";
import moment from "moment";
import "moment/locale/ko";
import useRoutineHistoryAllGetMonthlyQuery from "hooks/server/useRoutineHistoryAllGetMonthlyQuery";
import {useRoutineHistoryAllGetDailyProvider} from "../RoutineHistoryAllGetDailyProvider";

type DotData = {
    _id: number;
    color: string;
};

export type DotDataByDate = {
    date: string;
    [key: string]: string | DotData[];
};

type CustomCalendarProps = {
    // onPrevMonthButtonClick: (date: any) => void;
    // onNextMonthButtnClick: (date: any) => void;
    // onDateButtonClick: (date: any) => void;
    // currentMonth: Date;
    // dotDataKey: string;
};

const RoutineHistoryCalendar = (
    {
        // onPrevMonthButtonClick,
        // onNextMonthButtnClick,
        // onDateButtonClick,
        // currentMonth,
        // dotDataKey,
    }: CustomCalendarProps,
) => {
    const {date: dailyDate, setDate: setDailyDate} =
        useRoutineHistoryAllGetDailyProvider();
    // const [date, setDate] = useState(new Date());
    const [activeStartDate, setActiveStartDate] = useState(new Date());

    const {
        data: {routineHistories},
    } = useRoutineHistoryAllGetMonthlyQuery({date: dailyDate});

    const handleDateButtonClick = (date: any) => {
        setDailyDate(date);
    };

    const handlePrevMonthButtonClick = () => {
        const previousMonth = new Date(
            activeStartDate.getFullYear(),
            activeStartDate.getMonth() - 1,
            1,
        );
        // onPrevMonthButtonClick(previousMonth);
        setActiveStartDate(previousMonth);
    };

    const handleNextMonthButtnClick = () => {
        const nextMonth = new Date(
            activeStartDate.getFullYear(),
            activeStartDate.getMonth() + 1,
            1,
        );
        // onNextMonthButtnClick(nextMonth);
        setActiveStartDate(nextMonth);
    };

    const formatDate = (date: Date) => {
        moment.locale("ko");
        return moment(date).format("YYYY년 M월");
    };

    const getDotDataForDate = (date: Date) => {
        const formattedDate = moment(date).format("YYYY-MM-DD");
        const record = routineHistories.find(
            rh => moment(rh.createdAt).format("YYYY-MM-DD") === formattedDate,
        );
        return record ? [{}] : [];
    };

    const tileContent = ({date: tileDate}: {date: Date}) => {
        const isActive = moment(dailyDate).isSame(moment(tileDate), "day");
        const isToday = moment(tileDate).isSame(moment(), "day");
        const dotData = getDotDataForDate(tileDate);
        return (
            <>
                <div
                    className={`${styles.circle} ${
                        isActive ? styles.active : isToday ? styles.today : ""
                    }`}
                >
                    {tileDate.getDate()}
                </div>
                <div className={styles.dotWrapper}>
                    {Array.isArray(dotData) &&
                        dotData
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.dot}
                                    style={{backgroundColor: "red"}}
                                />
                            ))
                            .splice(0, 3)}
                </div>
            </>
        );
    };

    return (
        <Box>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.dateInfo}>
                        {formatDate(activeStartDate)}
                    </span>
                    <div className={styles.navButtons}>
                        <CalendarArrowLeftIcon
                            onClick={handlePrevMonthButtonClick}
                        />
                        <CalendarArrowRightIcon
                            onClick={handleNextMonthButtnClick}
                        />
                    </div>
                </div>
                <Calendar
                    onChange={handleDateButtonClick}
                    value={dailyDate}
                    activeStartDate={activeStartDate}
                    tileContent={tileContent}
                />
            </div>
        </Box>
    );
};

export default RoutineHistoryCalendar;
