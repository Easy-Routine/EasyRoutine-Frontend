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
import useGetWorkoutLibraryOneQuery from "hooks/server/useGetWorkoutLibraryOneQuery";
import { WorkoutLibrary } from "db";
import useGetWorkoutRecordSumAllQuery from "hooks/server/useGetWorkoutRecordSumAllQuery";
import { Period } from "type/Period";
import moment from "moment";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const initialWorkoutLibraryDetail: WorkoutLibrary = {
    _id: "",
    name: "",
    image: "",
    originImage: "",
    category: "",
    type: [],
    isEditable: false,
    createdAt: moment().toISOString(),
    updatedAt: moment().toISOString(),
    userId: "",
};

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
    const workoutLibraryDetail =
        workoutLibraryDetailData ?? initialWorkoutLibraryDetail;

    const { data: workoutRecordSumListByDateData } =
        useGetWorkoutRecordSumAllQuery({
            workoutLibraryId,
            period: selectedValue as Period,
        });

    const workoutRecordSumListByDate = workoutRecordSumListByDateData ?? [];

    const handleButtonClick = () => {
        openWorkoutLibraryListGraphBottomSheet();
    };

    const handleSmallCardClick = (_id: string) => {
        console.log(_id);
        setWorkoutLibraryId(_id);
        closeWorkoutLibraryListGraphBottomSheet();
    };

    // workoutLibraryId, selectedValue 를 이용해서 전체 운동 볼륨을 구하기

    return (
        <Container>
            {workoutLibraryId && (
                <>
                    <Box>
                        <TitleTextInput value={workoutLibraryDetail.name} />
                    </Box>
                    <Box>
                        <Graph
                            onDotClick={(data) => console.log(data)}
                            data={workoutRecordSumListByDate}
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

            <WorkoutLibraryListGraphBottomSheet
                isOpen={isWorkoutLibraryListGraphBottomSheetOpen}
                onBackdropClick={() =>
                    closeWorkoutLibraryListGraphBottomSheet()
                }
                onSmallCardClick={(workoutLibraryId: string) =>
                    handleSmallCardClick(workoutLibraryId)
                }
            />

            <Button onClick={handleButtonClick}>운동 선택하기</Button>
        </Container>
    );
};

export default RoutineRecorListGraphView;
