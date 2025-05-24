import Accordion from "components/box/Accordion/Accordion";
import EmptyBoundary from "../EmptyBoundary";
import EmptyView from "components/content/EmptyView/EmptyView";
import styled from "styled-components";
import {Suspense, useState} from "react";
import useModal from "hooks/client/useModal";
import useRoutineAllQuery from "hooks/server/useRoutineAllGetQuery";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import useToast from "hooks/useToast";
import useHardwareBackPress from "hooks/client/useHardwareBackPress";
import {useNavigate} from "react-router-dom";
import RoutineDeleteModal from "./RoutineConfigDeleteModal";

const Container = styled.div``;

const RoutineListView = () => {
    const navigate = useNavigate();
    const {data: routineAllData} = useRoutineAllQuery();
    const {showToast} = useToast();
    const {
        isOpen: isRoutineProgressModalOpen,
        handleOpenModal: openRoutineProgressModal,
        handleCloseModal: closeRoutineProgressModal,
    } = useModal();
    const {
        isOpen: isRoutineDeleteModalOpen,
        handleOpenModal: openRoutineDeleteModal,
        handleCloseModal: closeRoutineDeleteModal,
    } = useModal();
    useHardwareBackPress({
        onNativeBackButtonClick: () => {
            if (isRoutineProgressModalOpen) {
                closeRoutineProgressModal();
                return;
            }
            if (isRoutineDeleteModalOpen) {
                closeRoutineDeleteModal();
                return;
            }
            navigate(-1);
        },
        dependencies: [isRoutineProgressModalOpen, isRoutineDeleteModalOpen],
    });

    const routineAll = routineAllData!;

    const [routineId, setRoutineId] = useState("");

    return (
        <Container>
            <EmptyBoundary
                fallback={<EmptyView emptyText="현재 루틴이 없습니다." />}
                data={routineAll}
            >
                임시 주석처리
                {/* <Accordion.List
                    data={routineAll}
                    render={routine => (
                        <RoutineDetailAccordion
                            key={routine.id}
                            data={routine}
                            onRoutineProgressButtonClick={(
                                routineId: string,
                            ) => {
                                if (routine.routineExercises.length === 0) {
                                    showToast(
                                        "진행 할 수 있는 운동이 없습니다.",
                                        "error",
                                    );
                                    return;
                                }
                                setRoutineId(routineId);
                                openRoutineProgressModal();
                            }}
                            onRoutineDeleteButtonClick={(
                                routineId: string,
                            ) => {
                                setRoutineId(routineId);
                                openRoutineDeleteModal();
                            }}
                        />
                    )}
                /> */}
            </EmptyBoundary>

            <ErrorBoundary>
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <CommonLoading />
                        </DefferredComponent>
                    }
                >
                    {/* {isRoutineProgressModalOpen && (
                        <RoutineProgressModal
                            routineId={routineId}
                            isOpen={isRoutineProgressModalOpen}
                            onBackdropClick={() => closeRoutineProgressModal()}
                            onCancelButtonClick={() =>
                                closeRoutineProgressModal()
                            }
                            onConfirmButtonClick={() => {
                                closeRoutineProgressModal();
                            }}
                        />
                    )} */}
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
                    {isRoutineDeleteModalOpen && (
                        <RoutineDeleteModal
                            routineId={routineId}
                            isOpen={isRoutineDeleteModalOpen}
                            onBackdropClick={() => {
                                closeRoutineDeleteModal();
                            }}
                            onCancelButtonClick={() => {
                                closeRoutineDeleteModal();
                            }}
                            onConfirmButtonClick={() => {
                                closeRoutineDeleteModal();
                            }}
                        />
                    )}
                </Suspense>
            </ErrorBoundary>
        </Container>
    );
};

export default RoutineListView;
