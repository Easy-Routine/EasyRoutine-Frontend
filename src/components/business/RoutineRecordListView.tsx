import Accordion from "components/box/Accordion/Accordion";
import SummaryBox from "components/content/Summary/SummaryBox";
import React from "react";
import RoutineRecordAccordion from "./RoutineRecordAccordion";
import SeatedRowImage from "assets/image/seated-row.png";
import styled from "styled-components";
import { RoutineRecord } from "types/recrod";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

type RoutineRecordListViewProps = {
    date: Date;
};

const RoutineRecordListView = ({ date }: RoutineRecordListViewProps) => {
    // TODO: date에 따라 routine-record 가져오기
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
    ];

    return (
        <Container>
            <SummaryBox hour={7} minute={30} weight={3450} />
            <Accordion.List
                data={data}
                render={(item) => <RoutineRecordAccordion data={item} />}
            />
        </Container>
    );
};

export default RoutineRecordListView;
