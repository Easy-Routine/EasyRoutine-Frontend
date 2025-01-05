import Accordion from "components/box/Accordion/Accordion";
import RoutineConfigDetailAccordion from "./RoutineConfigDetailAccordion";
import EmptyBoundary from "../EmptyBoundary";
import EmptyView from "components/content/EmptyView/EmptyView";
import styled from "styled-components";
import RoutineConfigDeleteModal from "./RoutineConfigDeleteModal";
import {Suspense, useState} from "react";
import useModal from "hooks/client/useModal";
import RoutineConfigProgressModal from "./RoutineConfigProgressModal";
import useRoutineConfigAllQuery from "hooks/server/useGetRoutineConfigAllQuery";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import useToast from "hooks/useToast";
import useHardwareBackPress from "hooks/client/useHardwareBackPress";
import {useNavigate} from "react-router-dom";

const Container = styled.div``;

const RoutineConfigListView = () => {
    const navigate = useNavigate();
    const {data: routineConfigAllData} = useRoutineConfigAllQuery();
    const {showToast} = useToast();
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
    useHardwareBackPress({
        onNativeBackButtonClick: () => {
            if (isRoutineProgressModalOpen) {
                closeRoutineProgressModal();
                return;
            }
            if (isRoutineConfigDeleteModalOpen) {
                closeRoutineConfigDeleteModal();
                return;
            }
            navigate(-1);
        },
        dependencies: [
            isRoutineProgressModalOpen,
            isRoutineConfigDeleteModalOpen,
        ],
    });

    const routineConfigAll = routineConfigAllData!;

    const [routineConfigId, setRoutineConfigId] = useState("");

    return (
        <Container>
            <EmptyBoundary
                fallback={<EmptyView emptyText="현재 루틴이 없습니다." />}
                data={routineConfigAll}
            >
                <Accordion.List
                    data={routineConfigAll}
                    render={routineConfig => (
                        <RoutineConfigDetailAccordion
                            key={routineConfig._id}
                            data={routineConfig}
                            onRoutineConfigProgressButtonClick={(
                                routineConfigId: string,
                            ) => {
                                if (routineConfig.workoutConfigs.length === 0) {
                                    showToast(
                                        "진행 할 수 있는 운동이 없습니다.",
                                        "error",
                                    );
                                    return;
                                }
                                setRoutineConfigId(routineConfigId);
                                openRoutineProgressModal();
                            }}
                            onRoutineConfigDeleteButtonClick={(
                                routineConfigId: string,
                            ) => {
                                setRoutineConfigId(routineConfigId);
                                openRoutineConfigDeleteModal();
                            }}
                        />
                    )}
                />
            </EmptyBoundary>

            <ErrorBoundary>
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <CommonLoading />
                        </DefferredComponent>
                    }
                >
                    {isRoutineProgressModalOpen && (
                        <RoutineConfigProgressModal
                            routineConfigId={routineConfigId}
                            isOpen={isRoutineProgressModalOpen}
                            onBackdropClick={() => closeRoutineProgressModal()}
                            onCancelButtonClick={() =>
                                closeRoutineProgressModal()
                            }
                            onConfirmButtonClick={() => {
                                closeRoutineProgressModal();
                            }}
                        />
                    )}
                </Suspense>
            </ErrorBoundary>

            <ErrorBoundary>
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <CommonLoading />
                        </DefferredComponent>
                    }
                >
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
                </Suspense>
            </ErrorBoundary>
        </Container>
    );
};

export default RoutineConfigListView;
