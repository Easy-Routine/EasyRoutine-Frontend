import Box from "components/box/Box/Box";
import Button from "components/content/Button/Button";
import ChipTab from "components/content/ChipTab/ChipTab";
import Graph from "components/content/Graph/Graph";
import useTab from "hooks/client/useTab";
import styled from "styled-components";
import useModal from "hooks/client/useModal";
import { useState } from "react";
import TitleText from "components/content/TitleText/TitleText";
import WorkoutLibraryListGraphBottomSheet from "../workout-library/WorkoutLibraryListGraphBottomSheet";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineRecorListGraphView = () => {
    const { selectedValue, handleTabClick } = useTab("1week");
    const {
        isOpen: isWorkoutLibraryListGraphBottomSheetOpen,
        handleOpenModal: openWorkoutLibraryListGraphBottomSheet,
        handleCloseModal: closeWorkoutLibraryListGraphBottomSheet,
    } = useModal();

    const [workoutLibraryId, setWorkoutLibraryId] = useState("");

    // TODO: workoutLibraryId로 운동 종목 상세 데이터 가져오기
    const workoutLibraryDetailData = {
        id: 1,
        name: "벤치프레스",
    };

    // TODO: 운동 id와 기간값으로 데이터 가져오기
    const data = {
        workoutRecordByDateList: [
            { key: "1월", value: 400 },
            { key: "2월", value: 300 },
            { key: "3월", value: 200 },
            { key: "4월", value: 278 },
            { key: "5월", value: 189 },
            { key: "6월", value: 400 },
            { key: "7월", value: 300 },
            { key: "8월", value: 400 },
            { key: "9월", value: 300 },
            { key: "10월", value: 200 },
            { key: "11월", value: 278 },
            { key: "12월", value: 189 },
        ],
    };

    const handleButtonClick = () => {
        openWorkoutLibraryListGraphBottomSheet();
    };

    const handleSmallCardClick = (id: string) => {
        setWorkoutLibraryId(id);
        closeWorkoutLibraryListGraphBottomSheet();
    };

    return (
        <Container>
            <Box>
                <TitleText>{workoutLibraryDetailData.name}</TitleText>
            </Box>
            <Box>
                <Graph
                    onDotClick={(data) => console.log(data)}
                    data={data.workoutRecordByDateList}
                    lineKey="key"
                    areaKey="value"
                />
            </Box>

            <ChipTab>
                <ChipTab.Chip
                    value="1week"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    1주
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="1month"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    1달
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="3month"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    3달
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="1year"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    1년
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="all"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    전체
                </ChipTab.Chip>
            </ChipTab>

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
