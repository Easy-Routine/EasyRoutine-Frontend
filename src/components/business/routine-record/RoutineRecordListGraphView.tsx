import Box from "components/box/Box/Box";
import Button from "components/content/Button/Button";
import ChipTab from "components/content/ChipTab/ChipTab";
import Graph from "components/content/Graph/Graph";
import useTab from "hooks/client/useTab";
import styled from "styled-components";
import useModal from "hooks/client/useModal";
import { useState } from "react";
import TitleTextInput from "components/content/TitleTextInput/TitleTextInput";
import WorkoutLibraryListGraphBottomSheet from "../workout-library/WorkoutLibraryListGraphBottomSheet";
import useGetWorkoutRecordSumAllQuery from "hooks/server/useGetWorkoutRecordSumAllQuery";
import { Period } from "types/enum";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import useGetWorkoutLibraryOneMutation from "hooks/server/useGetWorkoutLibraryOneMutation";
import { WorkoutLibrary } from "types/model";
import useThrowError from "hooks/client/useThrowError";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineRecorListGraphView = () => {
    const { selectedValue, handleTabClick } = useTab(Period.Month);
    const { throwError } = useThrowError();
    const {
        isOpen: isWorkoutLibraryListGraphBottomSheetOpen,
        handleOpenModal: openWorkoutLibraryListGraphBottomSheet,
        handleCloseModal: closeWorkoutLibraryListGraphBottomSheet,
    } = useModal();

    const [workoutLibraryId, setWorkoutLibraryId] = useState("");
    const [workoutLibraryDetail, setWorkoutLibraryDetail] =
        useState<WorkoutLibrary | null>();

    // const { data: workoutLibraryDetail } =
    //     useGetWorkoutLibraryOneQuery(workoutLibraryId);

    const { mutateAsync: getWorkoutLibraryOneMutate } =
        useGetWorkoutLibraryOneMutation();

    const { data: workoutRecordSumListByDate } = useGetWorkoutRecordSumAllQuery(
        {
            workoutLibraryId,
            period: selectedValue as Period,
        }
    );

    const handleButtonClick = async () => {
        openWorkoutLibraryListGraphBottomSheet();
    };

    const handleSmallCardClick = async (_id: string) => {
        setWorkoutLibraryId(_id);
        await throwError({
            fetchFn: async () => await getWorkoutLibraryOneMutate(_id),
            onSuccess: (response) => {
                setWorkoutLibraryDetail(response);
                closeWorkoutLibraryListGraphBottomSheet();
            },
        });
    };

    return (
        <Container>
            {workoutLibraryId && (
                <>
                    <Box>
                        <TitleTextInput value={workoutLibraryDetail?.name} />
                    </Box>
                    <Box>
                        <Graph
                            onDotClick={(data) => console.log(data)}
                            data={workoutRecordSumListByDate!}
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
            )}
            <ErrorBoundary>
                <WorkoutLibraryListGraphBottomSheet
                    isOpen={isWorkoutLibraryListGraphBottomSheetOpen}
                    onBackdropClick={() =>
                        closeWorkoutLibraryListGraphBottomSheet()
                    }
                    onSmallCardClick={(workoutLibraryId: string) =>
                        handleSmallCardClick(workoutLibraryId)
                    }
                />
            </ErrorBoundary>

            <Button onClick={handleButtonClick}>운동 선택하기</Button>
        </Container>
    );
};

export default RoutineRecorListGraphView;
