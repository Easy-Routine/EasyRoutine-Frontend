import Accordion from "components/box/Accordion/Accordion";
import RoutineConfigDetailAccordion from "./RoutineConfigDetailAccordion";
import EmptyBoundary from "../EmptyBoundary";
import EmptyView from "components/content/EmptyView/EmptyView";
import styled from "styled-components";
import RoutineConfigDeleteModal from "./RoutineConfigDeleteModal";
import { useState } from "react";
import useModal from "hooks/client/useModal";
import RoutineConfigProgressModal from "./RoutineConfigProgressModal";
import useRoutineConfigAllQuery from "hooks/server/useGetRoutineConfigAllQuery";

const Container = styled.div``;

const RoutineConfigListView = () => {
    const { data: routineConfigAllData } = useRoutineConfigAllQuery();

    const routineConfigAll = routineConfigAllData ?? [];

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
                data={routineConfigAll}
            >
                <Accordion.List
                    data={routineConfigAll}
                    render={(routineConfig) => (
                        <RoutineConfigDetailAccordion
                            key={routineConfig.id}
                            data={routineConfig}
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

            {isRoutineProgressModalOpen && (
                <RoutineConfigProgressModal
                    routineConfigId={routineConfigId}
                    isOpen={isRoutineProgressModalOpen}
                    onBackdropClick={() => closeRoutineProgressModal()}
                    onCancelButtonClick={() => closeRoutineProgressModal()}
                    onConfirmButtonClick={() => {
                        closeRoutineProgressModal();
                    }}
                />
            )}

            {isRoutineConfigDeleteModalOpen && (
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
            )}
        </Container>
    );
};

export default RoutineConfigListView;
