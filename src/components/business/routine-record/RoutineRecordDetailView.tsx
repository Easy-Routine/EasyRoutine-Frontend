import React from "react";
import styled from "styled-components";
import SeatedRowImage from "assets/image/seated-row.png";
import { RoutineRecord } from "types/recrod";
import Box from "components/box/Box/Box";
import TitleText from "components/content/TitleText/TitleText";
import Accordion from "components/box/Accordion/Accordion";
import WorkoutRecordAccordion from "../workout-record/WorkoutRecordAccordion";
import { Color } from "type/Color";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineRecordDetailView = () => {
    const data: RoutineRecord = {
        id: "1",
        name: "나의 가슴 루틴",
        color: Color.ORANGE,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "3",
        workoutRecords: [
            {
                id: "1",
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
                id: "2",
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
                id: "3",
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
    };

    return (
        <Container>
            <Box>
                <TitleText>{data.name}</TitleText>
            </Box>
            <Accordion.List
                data={data.workoutRecords}
                render={(workoutRecord) => (
                    <WorkoutRecordAccordion data={workoutRecord} />
                )}
            />
        </Container>
    );
};

export default RoutineRecordDetailView;
