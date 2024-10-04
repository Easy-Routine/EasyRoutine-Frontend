import CustomCalendar from "components/content/CustomCalendar/CustomCalendar";
import styled from "styled-components";
import SeatedRowImage from "assets/image/seated-row.png";
import { useState } from "react";
import RoutineRecordDeleteModal from "./RoutineRecordDeleteModal";
import RoutineRecordDetailAccordion from "./RoutineRecordDetailAccordion";
import SummaryBox from "components/content/Summary/SummaryBox";
import Accordion from "components/box/Accordion/Accordion";
import { RoutineRecord, WorkoutRecord } from "types/recrod";
import useModal from "hooks/client/useModal";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineRecordListCalendarView = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const calculatedData = [
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

    // TODO: selectedDate에 따라 routine-record 가져오기
    const data: RoutineRecord[] = [
        {
            id: "1",
            name: "나의 가슴 루틴",
            color: "#f0fff0",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: "3",
            workoutRecords: [
                {
                    id: "1", // string으로 수정
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineRecordId: "1",
                    setRecords: [
                        {
                            id: "1",
                            order: 1,
                            weight: 10,
                            rep: 10,
                            restSec: 50,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                        {
                            id: "2",
                            order: 2,
                            weight: 15,
                            rep: 8,
                            restSec: 30,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                        {
                            id: "3",
                            order: 3,
                            weight: 20,
                            rep: 6,
                            restSec: 10,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                    ],
                },
                {
                    id: "2", // string으로 수정
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineRecordId: "1",
                    setRecords: [
                        {
                            id: "1",
                            order: 1,
                            weight: 10,
                            rep: 10,
                            restSec: 50,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                        {
                            id: "2",
                            order: 2,
                            weight: 15,
                            rep: 8,
                            restSec: 30,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                        {
                            id: "3",
                            order: 3,
                            weight: 20,
                            rep: 6,
                            restSec: 10,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                    ],
                },
                {
                    id: "3", // string으로 수정
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineRecordId: "1",
                    setRecords: [
                        {
                            id: "1",
                            order: 1,
                            weight: 10,
                            rep: 10,
                            restSec: 50,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                        {
                            id: "2",
                            order: 2,
                            weight: 15,
                            rep: 8,
                            restSec: 30,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                        {
                            id: "3",
                            order: 3,
                            weight: 20,
                            rep: 6,
                            restSec: 10,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                    ],
                },
            ],
        },
        {
            id: "2",
            name: "나의 가슴 루틴",
            color: "#f0fff0",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: "3",
            workoutRecords: [
                {
                    id: "1", // string으로 수정
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineRecordId: "1",
                    setRecords: [],
                },
                {
                    id: "2", // string으로 수정
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineRecordId: "1",
                    setRecords: [],
                },
                {
                    id: "3", // string으로 수정
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineRecordId: "1",
                    setRecords: [],
                },
            ],
        },
        {
            id: "3",
            name: "나의 가슴 루틴",
            color: "#f0fff0",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: "3",
            workoutRecords: [
                {
                    id: "1", // string으로 수정
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineRecordId: "1",
                    setRecords: [
                        {
                            id: "1",
                            order: 1,
                            weight: 10,
                            rep: 10,
                            restSec: 50,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                        {
                            id: "2",
                            order: 2,
                            weight: 15,
                            rep: 8,
                            restSec: 30,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                        {
                            id: "3",
                            order: 3,
                            weight: 20,
                            rep: 6,
                            restSec: 10,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                    ],
                },
                {
                    id: "2", // string으로 수정
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineRecordId: "1",
                    setRecords: [
                        {
                            id: "1",
                            order: 1,
                            weight: 10,
                            rep: 10,
                            restSec: 50,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                        {
                            id: "2",
                            order: 2,
                            weight: 15,
                            rep: 8,
                            restSec: 30,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                        {
                            id: "3",
                            order: 3,
                            weight: 20,
                            rep: 6,
                            restSec: 10,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                    ],
                },
                {
                    id: "3", // string으로 수정
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineRecordId: "1",
                    setRecords: [
                        {
                            id: "1",
                            order: 1,
                            weight: 10,
                            rep: 10,
                            restSec: 50,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                        {
                            id: "2",
                            order: 2,
                            weight: 15,
                            rep: 8,
                            restSec: 30,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                        {
                            id: "3",
                            order: 3,
                            weight: 20,
                            rep: 6,
                            restSec: 10,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            workoutRecordId: "1",
                        },
                    ],
                },
            ],
        },
    ];

    const {
        isOpen: isRoutineRecordDeleteModalOpen,
        handleOpenModal: openRoutineRecordDeleteModal,
        handleCloseModal: closeRoutineRecordDeleteModal,
    } = useModal();

    const totalWeight = data.reduce((acc, record) => {
        return (
            acc +
            record.workoutRecords.reduce(
                (innerAcc: number, workout: WorkoutRecord) => {
                    return (
                        innerAcc +
                        workout.setRecords.reduce((setAcc, set) => {
                            return setAcc + (set.weight || 0); // weight를 합산
                        }, 0)
                    );
                },
                0
            )
        );
    }, 0);

    const totalSeconds = data.reduce((acc, record) => {
        return (
            acc +
            record.workoutRecords.reduce(
                (innerAcc: number, workout: WorkoutRecord) => {
                    return (
                        innerAcc +
                        workout.setRecords.reduce((setAcc, set) => {
                            return setAcc + set.rep * (set.restSec || 0); // 초를 합산 (예시)
                        }, 0)
                    );
                },
                0
            )
        );
    }, 0);

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
                dotDataByDate={calculatedData}
                dotDataKey={"routineRecords"}
            />

            <SummaryBox seconds={totalSeconds} weight={totalWeight} />
            <Accordion.List
                data={data}
                render={(item) => (
                    <RoutineRecordDetailAccordion
                        data={item}
                        onRoutineRecordDeleteButtonClick={() => {
                            openRoutineRecordDeleteModal();
                        }}
                    />
                )}
            />

            <RoutineRecordDeleteModal
                isOpen={isRoutineRecordDeleteModalOpen}
                onBackdropClick={() => {
                    closeRoutineRecordDeleteModal();
                }}
                onCancelButtonClick={() => {
                    closeRoutineRecordDeleteModal();
                }}
                onConfirmButtonClick={() => {
                    closeRoutineRecordDeleteModal();
                }}
            />
        </Container>
    );
};

export default RoutineRecordListCalendarView;
