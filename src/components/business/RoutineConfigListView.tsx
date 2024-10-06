import Accordion from "components/box/Accordion/Accordion";
import RoutineConfigDetailAccordion from "./RoutineConfigDetailAccordion";
import { RoutineConfig } from "types/config";
import SeatedRowImage from "assets/image/seated-row.png";
import EmptyBoundary from "./EmptyBoundary";
import EmptyView from "components/content/EmptyView/EmptyView";
import styled from "styled-components";
import RoutineConfigDeleteModal from "./RoutineConfigDeleteModal";
import { useState } from "react";
import useModal from "hooks/client/useModal";
import RoutineConfigProgressModal from "./RoutineConfigProgressModal";

const Container = styled.div``;

const RoutineConfigListView = () => {
    const data: RoutineConfig[] = [
        {
            id: "1",
            name: "나의 가슴 루틴",
            color: "#f0fff0",
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
                    setConfigs: [],
                },
                {
                    id: "2",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
                {
                    id: "3",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
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
            workoutConfigs: [
                {
                    id: "1",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
                {
                    id: "2",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
                {
                    id: "3",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
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
            workoutConfigs: [
                {
                    id: "1",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
                {
                    id: "2",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
                {
                    id: "3",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: ["weight", "rep"],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
            ],
        },
    ];

    const {
        isOpen: isRoutineProgressModalOpen,
        handleOpenModal: openRoutineProgressModal,
        handleCloseModal: closeRoutineProgressModal,
    } = useModal();
    const {
        isOpen: isRoutineConfigDeleteModalOpen,
        handleOpenModal: openRoutineConfigDeleteModal,
        handleCloseModal: closeRoutineConfigDeleteModal,
    } = useModal();

    const [routineConfigId, setRoutineConfigId] = useState("");

    return (
        <Container>
            <EmptyBoundary
                fallback={<EmptyView emptyText="현재 루틴이 없습니다." />}
                data={data}
            >
                <Accordion.List
                    data={data}
                    render={(item) => (
                        <RoutineConfigDetailAccordion
                            data={item}
                            onRoutineConfigProgressButtonClick={(
                                routineConfigId: string
                            ) => {
                                setRoutineConfigId(routineConfigId);
                                openRoutineProgressModal();
                            }}
                            onRoutineConfigDeleteButtonClick={(
                                routineConfigId: string
                            ) => {
                                setRoutineConfigId(routineConfigId);
                                openRoutineConfigDeleteModal();
                            }}
                        />
                    )}
                />
            </EmptyBoundary>
            <RoutineConfigProgressModal
                routineConfigId={routineConfigId}
                isOpen={isRoutineProgressModalOpen}
                onBackdropClick={() => closeRoutineProgressModal()}
                onCancelButtonClick={() => closeRoutineProgressModal()}
                onConfirmButtonClick={() => {
                    closeRoutineProgressModal();
                }}
            />
            <RoutineConfigDeleteModal
                routineConfigId={routineConfigId}
                isOpen={isRoutineConfigDeleteModalOpen}
                onBackdropClick={() => {
                    closeRoutineConfigDeleteModal();
                }}
                onCancelButtonClick={() => {
                    closeRoutineConfigDeleteModal();
                }}
                onConfirmButtonClick={() => {
                    closeRoutineConfigDeleteModal();
                }}
            />
        </Container>
    );
};

export default RoutineConfigListView;
