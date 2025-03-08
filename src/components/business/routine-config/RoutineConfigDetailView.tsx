import Accordion from "components/box/Accordion/Accordion";
import Box from "components/box/Box/Box";
import RoutineConfigColorTabBottomBar from "./RoutineConfigUpdateColorTabBottomBar";
import styled from "styled-components";
import WorkoutConfigDetailAccordion from "../workout-config/WorkoutConfigDetailAccordion";
import {useNavigate, useParams} from "react-router-dom";
import useRoutineConfigOneQuery from "hooks/server/useRoutineConfigGetQuery";
import RoutineConfigUpdateNameTitleText from "./RoutineConfigUpdateNameTitleText";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import WorkoutLibraryListBottomSheet from "../workout-library/WorkoutLibraryListBottomSheet";
import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import useModal from "hooks/client/useModal";
import {Suspense} from "react";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import EmptyBoundary from "../EmptyBoundary";
import useHardwareBackPress from "hooks/client/useHardwareBackPress";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigDetailView = () => {
    const {routineConfigId} = useParams();
    const {data: routineConfigDetail} = useRoutineConfigOneQuery(
        routineConfigId as string,
    );
    const navigate = useNavigate();
    const {
        isOpen: isWorkoutLibraryBottomSheetOpen,
        handleOpenModal: openWorkoutLibraryListBottomSheet,
        handleCloseModal: closeWorkoutLibraryListBottomSheet,
    } = useModal();

    useHardwareBackPress({
        onNativeBackButtonClick: () => {
            if (isWorkoutLibraryBottomSheetOpen) {
                closeWorkoutLibraryListBottomSheet();
                return;
            }
            navigate(-1);
        },
        dependencies: [isWorkoutLibraryBottomSheetOpen],
    });

    return (
        <Container>
            {/* <Box>
                <RoutineConfigUpdateNameTitleText
                    defaultValue={routineConfigDetail!.name}
                />
            </Box>
            <Accordion.List
                data={routineConfigDetail!.workoutConfigs}
                render={workoutConfig => (
                    <WorkoutConfigDetailAccordion
                        data={workoutConfig}
                        key={workoutConfig._id}
                    />
                )}
            /> */}

            <ErrorBoundary>
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <CommonLoading />
                        </DefferredComponent>
                    }
                >
                    {isWorkoutLibraryBottomSheetOpen && (
                        <WorkoutLibraryListBottomSheet
                            isOpen={isWorkoutLibraryBottomSheetOpen}
                            onBackdropClick={() =>
                                closeWorkoutLibraryListBottomSheet()
                            }
                            onSubmitButtonClick={() =>
                                closeWorkoutLibraryListBottomSheet()
                            }
                        />
                    )}
                </Suspense>
            </ErrorBoundary>

            <FloatingActionButton
                onButtonClick={() => openWorkoutLibraryListBottomSheet()}
            />

            {/* <EmptyBoundary
                data={routineConfigDetail?.workoutConfigs}
                fallback={
                    <FloatingActionButton
                        text={
                            <>
                                아래 버튼을 통해 원하는
                                <br /> 운동 종목을 추가해주세요
                            </>
                        }
                        onButtonClick={() =>
                            openWorkoutLibraryListBottomSheet()
                        }
                    />
                }
            >
                <FloatingActionButton
                    onButtonClick={() => openWorkoutLibraryListBottomSheet()}
                />
            </EmptyBoundary> */}

            {/* <RoutineConfigColorTabBottomBar
                defaultValue={routineConfigDetail!.color}
            /> */}
        </Container>
    );
};

export default RoutineConfigDetailView;
