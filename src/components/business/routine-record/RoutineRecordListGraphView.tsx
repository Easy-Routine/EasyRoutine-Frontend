import Box from "components/box/Box/Box";
import Button from "components/content/Button/Button";
import ChipTab from "components/content/ChipTab/ChipTab";
import Graph from "components/content/Graph/Graph";
import useTab from "hooks/client/useTab";
import styled from "styled-components";
import useModal from "hooks/client/useModal";
import {Suspense, useState} from "react";
import TitleTextInput from "components/content/TitleTextInput/TitleTextInput";
import {Period} from "types/enum";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import useGetExerciseOneQuery from "hooks/server/useGetExerciseOneQuery";
import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import SimpleTextEmptyView from "components/content/EmptyView/SimpleTextEmptyView";
import {useNavigate} from "react-router-dom";
import useHardwareBackPress from "hooks/client/useHardwareBackPress";
import ExerciseListGraphBottomSheet from "../workout-library/WorkoutLibraryListGraphBottomSheet";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineRecorListGraphView = () => {
    const {selectedValue, handleTabClick} = useTab(Period.Month);
    const {
        isOpen: isExerciseListGraphBottomSheetOpen,
        handleOpenModal: openExerciseListGraphBottomSheet,
        handleCloseModal: closeExerciseListGraphBottomSheet,
    } = useModal();
    const navigate = useNavigate();
    useHardwareBackPress({
        onNativeBackButtonClick: () => {
            if (isExerciseListGraphBottomSheetOpen) {
                closeExerciseListGraphBottomSheet();
                return;
            }
            navigate(-1);
        },
        dependencies: [isExerciseListGraphBottomSheetOpen],
    });

    const [exerciseId, setExerciseId] = useState("");

    const {data: exerciseDetailData} = useGetExerciseOneQuery(exerciseId);
    const exerciseDetail = exerciseDetailData!;

    const handleButtonClick = async () => {
        openExerciseListGraphBottomSheet();
    };

    const handleSmallCardClick = async (id: string) => {
        setExerciseId(id);
        closeExerciseListGraphBottomSheet();
    };

    return (
        <Container>
            {exerciseId ? (
                <>
                    <Box>
                        <TitleTextInput value={exerciseDetail?.name} />
                    </Box>
                    <Box>
                        <Graph
                            onDotClick={data => console.log(data)}
                            exerciseId={exerciseId}
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
                    통계를 보고싶은 운동 종목을 선택해주세요.
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
                    {isExerciseListGraphBottomSheetOpen && (
                        <ExerciseListGraphBottomSheet
                            isOpen={isExerciseListGraphBottomSheetOpen}
                            onBackdropClick={() =>
                                closeExerciseListGraphBottomSheet()
                            }
                            onSmallCardClick={(exerciseId: string) => {
                                handleSmallCardClick(exerciseId);
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
