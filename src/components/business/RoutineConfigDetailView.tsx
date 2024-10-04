import Accordion from "components/box/Accordion/Accordion";
import Box from "components/box/Box/Box";
import TitleText from "components/content/TitleText/TitleText";
import { RoutineConfig } from "types/config";
import SeatedRowImage from "assets/image/seated-row.png";
import RoutineConfigColorTabBottomBar from "./RoutineConfigColorTabBottomBar";
import styled from "styled-components";
import WorkoutConfigDetailAccordion from "./WorkoutConfigDetailAccordion";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigDetailView = () => {
    const data: RoutineConfig = {
        id: "1",
        name: "나의 가슴 루틴",
        color: "orange",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "3",
        workoutConfigs: [
            {
                id: "1",
                name: "벤치프레스",
                workoutImage: SeatedRowImage,
                type: ["weight", "rep"],
                createdAt: new Date(),
                updatedAt: new Date(),
                routineConfigId: "1",
                setConfigs: [
                    {
                        id: "1",
                        order: 1,
                        weight: 10,
                        rep: 10,
                        restSec: 50,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "2",
                        order: 2,
                        weight: 15,
                        rep: 8,
                        restSec: 30,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "3",
                        order: 3,
                        weight: 20,
                        rep: 6,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
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
                routineConfigId: "1",
                setConfigs: [
                    {
                        id: "1",
                        order: 1,
                        weight: 10,
                        rep: 10,
                        restSec: 50,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "2",
                        order: 2,
                        weight: 15,
                        rep: 8,
                        restSec: 30,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "3",
                        order: 3,
                        weight: 20,
                        rep: 6,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
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
                routineConfigId: "1",
                setConfigs: [
                    {
                        id: "1",
                        order: 1,
                        weight: 10,
                        rep: 10,
                        restSec: 50,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "2",
                        order: 2,
                        weight: 15,
                        rep: 8,
                        restSec: 30,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "3",
                        order: 3,
                        weight: 20,
                        rep: 6,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                ],
            },
        ],
    };

    return (
        <Container>
            <Box>
                <TitleText>월요일 루틴</TitleText>
            </Box>
            <Accordion.List
                data={data.workoutConfigs}
                render={(workoutConfig) => (
                    <WorkoutConfigDetailAccordion data={workoutConfig} />
                )}
            />
            <RoutineConfigColorTabBottomBar defaultValue={data.color} />
        </Container>
    );
};

export default RoutineConfigDetailView;
