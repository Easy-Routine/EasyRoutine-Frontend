import Box from "components/box/Box/Box";
import Button from "components/content/Button/Button";
import ChipTab from "components/content/ChipTab/ChipTab";
import Graph from "components/content/Graph/Graph";
import useTab from "hooks/client/useTab";
import styled from "styled-components";
import useModal from "hooks/client/useModal";
import { Suspense, useState } from "react";
import TitleTextInput from "components/content/TitleTextInput/TitleTextInput";
import WorkoutLibraryListGraphBottomSheet from "../workout-library/WorkoutLibraryListGraphBottomSheet";
import { Period } from "types/enum";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import useGetWorkoutLibraryOneQuery from "hooks/server/useGetWorkoutLibraryOneQuery";
import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import SimpleTextEmptyView from "components/content/EmptyView/SimpleTextEmptyView";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineRecorListGraphView = () => {
    const { selectedValue, handleTabClick } = useTab(Period.Month);
    const {
        isOpen: isWorkoutLibraryListGraphBottomSheetOpen,
        handleOpenModal: openWorkoutLibraryListGraphBottomSheet,
        handleCloseModal: closeWorkoutLibraryListGraphBottomSheet,
    } = useModal();

    const [workoutLibraryId, setWorkoutLibraryId] = useState("");

    const { data: workoutLibraryDetailData } =
        useGetWorkoutLibraryOneQuery(workoutLibraryId);
    const workoutLibraryDetail = workoutLibraryDetailData!;

    const handleButtonClick = async () => {
        openWorkoutLibraryListGraphBottomSheet();
    };

    const handleSmallCardClick = async (_id: string) => {
        setWorkoutLibraryId(_id);
        closeWorkoutLibraryListGraphBottomSheet();
    };

    return (
        <Container>
            {workoutLibraryId ? (
                <>
                    <Box>
                        <TitleTextInput value={workoutLibraryDetail?.name} />
                    </Box>
                    <Box>
                        <Graph
                            onDotClick={(data) => console.log(data)}
                            workoutLibraryId={workoutLibraryId}
                            selectedValue={selectedValue}
                            lineKey="key"
                            areaKey="value"
                        />
                    </Box>
                    <ChipTab>
                        <ChipTab.Chip
                            value={Period.Month}
                            selectedValue={selectedValue}
                            onTabClick={handleTabClick}
                        >
                            1개월
                        </ChipTab.Chip>
                        <ChipTab.Chip
                            value={Period.Quarter}
                            selectedValue={selectedValue}
                            onTabClick={handleTabClick}
                        >
                            3개월
                        </ChipTab.Chip>
                        <ChipTab.Chip
                            value={Period.Half}
                            selectedValue={selectedValue}
                            onTabClick={handleTabClick}
                        >
                            6개월
                        </ChipTab.Chip>
                        <ChipTab.Chip
                            value={Period.Year}
                            selectedValue={selectedValue}
                            onTabClick={handleTabClick}
                        >
                            1년
                        </ChipTab.Chip>
                        <ChipTab.Chip
                            value={Period.All}
                            selectedValue={selectedValue}
                            onTabClick={handleTabClick}
                        >
                            전체
                        </ChipTab.Chip>
                    </ChipTab>
                </>
            ) : (
                <SimpleTextEmptyView>
                    현재 선택된 운동이 없습니다.
                </SimpleTextEmptyView>
            )}
            <ErrorBoundary>
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <CommonLoading />
                        </DefferredComponent>
                    }
                >
                    {isWorkoutLibraryListGraphBottomSheetOpen && (
                        <WorkoutLibraryListGraphBottomSheet
                            isOpen={isWorkoutLibraryListGraphBottomSheetOpen}
                            onBackdropClick={() =>
                                closeWorkoutLibraryListGraphBottomSheet()
                            }
                            onSmallCardClick={(workoutLibraryId: string) => {
                                handleSmallCardClick(workoutLibraryId);
                            }}
                        />
                    )}
                </Suspense>
            </ErrorBoundary>

            <Button onClick={handleButtonClick}>운동 선택하기</Button>
        </Container>
    );
};

export default RoutineRecorListGraphView;
