import Accordion from "components/box/Accordion/Accordion";
import Box from "components/box/Box/Box";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";
import useRoutineOneQuery from "hooks/server/useRoutineGetQuery";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import useModal from "hooks/client/useModal";
import {Suspense} from "react";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import EmptyBoundary from "../EmptyBoundary";
import useHardwareBackPress from "hooks/client/useHardwareBackPress";
import ExerciseListBottomSheet from "../workout-library/WorkoutLibraryListBottomSheet";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineDetailView = () => {
    const {routineId} = useParams();
    const {data: routineDetail} = useRoutineOneQuery(routineId as string);
    const navigate = useNavigate();
    const {
        isOpen: isExerciseBottomSheetOpen,
        handleOpenModal: openExerciseListBottomSheet,
        handleCloseModal: closeExerciseListBottomSheet,
    } = useModal();

    useHardwareBackPress({
        onNativeBackButtonClick: () => {
            if (isExerciseBottomSheetOpen) {
                closeExerciseListBottomSheet();
                return;
            }
            navigate(-1);
        },
        dependencies: [isExerciseBottomSheetOpen],
    });

    return (
        <Container>
            {/* <Box>
                <RoutineUpdateNameTitleText
                    defaultValue={routineDetail!.name}
                />
            </Box>
            <Accordion.List
                data={routineDetail!.routineExercises}
                render={routineExercise => (
                    <RoutineExerciseDetailAccordion
                        data={routineExercise}
                        key={routineExercise.id}
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
                    {isExerciseBottomSheetOpen && (
                        <ExerciseListBottomSheet
                            isOpen={isExerciseBottomSheetOpen}
                            onBackdropClick={() =>
                                closeExerciseListBottomSheet()
                            }
                            onSubmitButtonClick={() =>
                                closeExerciseListBottomSheet()
                            }
                        />
                    )}
                </Suspense>
            </ErrorBoundary>

            <FloatingActionButton
                onButtonClick={() => openExerciseListBottomSheet()}
            />

            {/* <EmptyBoundary
                data={routineDetail?.routineExercises}
                fallback={
                    <FloatingActionButton
                        text={
                            <>
                                아래 버튼을 통해 원하는
                                <br /> 운동 종목을 추가해주세요
                            </>
                        }
                        onButtonClick={() =>
                            openExerciseListBottomSheet()
                        }
                    />
                }
            >
                <FloatingActionButton
                    onButtonClick={() => openExerciseListBottomSheet()}
                />
            </EmptyBoundary> */}

            {/* <RoutineColorTabBottomBar
                defaultValue={routineDetail!.color}
            /> */}
        </Container>
    );
};

export default RoutineDetailView;
