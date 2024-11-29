import Accordion from "components/box/Accordion/Accordion";
import Box from "components/box/Box/Box";
import RoutineConfigColorTabBottomBar from "./RoutineConfigUpdateColorTabBottomBar";
import styled from "styled-components";
import WorkoutConfigDetailAccordion from "../workout-config/WorkoutConfigDetailAccordion";
import { useParams } from "react-router-dom";
import useRoutineConfigOneQuery from "hooks/server/useGetRoutineConfigOneQuery";
import RoutineConfigUpdateNameTitleText from "./RoutineConfigUpdateNameTitleText";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import WorkoutLibraryListBottomSheet from "../workout-library/WorkoutLibraryListBottomSheet";
import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import useModal from "hooks/client/useModal";
import { Suspense } from "react";
import CommonLoading from "components/content/CommonLoading/CommonLoading";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigDetailView = () => {
    const { routineConfigId } = useParams();
    const { data: routineConfigDetail } = useRoutineConfigOneQuery(
        routineConfigId as string
    );
    const {
        isOpen: isWorkoutLibraryBottomSheetOpen,
        handleOpenModal: openWorkoutLibraryListBottomSheet,
        handleCloseModal: closeWorkoutLibraryListBottomSheet,
    } = useModal();

    return (
        <Container>
            <Box>
                <RoutineConfigUpdateNameTitleText
                    defaultValue={routineConfigDetail!.name}
                />
            </Box>
            <Accordion.List
                data={routineConfigDetail!.workoutConfigs}
                render={(workoutConfig) => (
                    <WorkoutConfigDetailAccordion
                        data={workoutConfig}
                        key={workoutConfig._id}
                    />
                )}
            />

            <ErrorBoundary>
                <Suspense fallback={<CommonLoading />}>
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

            <RoutineConfigColorTabBottomBar
                defaultValue={routineConfigDetail!.color}
            />
        </Container>
    );
};

export default RoutineConfigDetailView;
