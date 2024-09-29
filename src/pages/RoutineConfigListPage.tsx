import Box from "components/box/Box/Box";
import PageHeader from "components/content/PageHeader/PageHeader";
import TitleText from "components/content/TitleText/TitleText";
import React from "react";
import styled from "styled-components";
import SeatedRowImage from "assets/image/seated-row.png";
import Accordion from "components/box/Accordion/Accordion";
import useTab from "hooks/client/useTab";
import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import RoutineConfigAccordion from "components/business/RoutineConfigAccordion/RoutineConfigAccordion";
import { RoutineConfig } from "types/config";
import NavigationBottomBar from "components/business/NavigationBottomBar/NavigationBottomBar";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigListPage = () => {
    const { selectedValue, handleTabClick } = useTab("violet");

    const data: RoutineConfig[] = [
        {
            id: 1,
            name: "나의 가슴 루틴",
            color: "#f0fff0",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 3,
            workoutConfigs: [
                {
                    id: 1,
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: 1,
                    setConfigs: [],
                },
                {
                    id: 2,
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: 1,
                    setConfigs: [],
                },
                {
                    id: 3,
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: 1,
                    setConfigs: [],
                },
            ],
        },
        {
            id: 2,
            name: "나의 가슴 루틴",
            color: "#f0fff0",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 3,
            workoutConfigs: [
                {
                    id: 1,
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: 1,
                    setConfigs: [],
                },
                {
                    id: 2,
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: 1,
                    setConfigs: [],
                },
                {
                    id: 3,
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: 1,
                    setConfigs: [],
                },
            ],
        },
        {
            id: 3,
            name: "나의 가슴 루틴",
            color: "#f0fff0",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 3,
            workoutConfigs: [
                {
                    id: 1,
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: 1,
                    setConfigs: [],
                },
                {
                    id: 2,
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: 1,
                    setConfigs: [],
                },
                {
                    id: 3,
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: 1,
                    setConfigs: [],
                },
            ],
        },
    ];

    return (
        <Container>
            <PageHeader>
                <PageHeader.ReturnCircle />
                <PageHeader.PageTitle>루틴 생성</PageHeader.PageTitle>
            </PageHeader>
            <Accordion.List
                data={data}
                render={(item) => <RoutineConfigAccordion data={item} />}
            />

            <NavigationBottomBar defaultValue="home" />

            <FloatingActionButton
                onButtonClick={() => console.log("루틴 생성")}
            />
        </Container>
    );
};

export default RoutineConfigListPage;
