import ChipTab from "components/content/ChipTab/ChipTab";

import SmallCardList from "components/content/SmallCard/SmallCardList";
import { useState } from "react";
import styled from "styled-components";
import { WorkoutLibrary } from "types/workout-library";
import SearchInput from "components/content/SearchInput/SearchInput";
import SeatedRowImage from "assets/image/seated-row.png";
import useTab from "hooks/client/useTab";
import useInput from "hooks/client/useInput";
import useModal from "hooks/client/useModal";
import WorkoutLibraryDetailBottomSheet from "./WorkoutLibraryDetailBottomSheet";
import WorkoutLibraryDeleteModal from "./WorkoutLibraryDeleteModal";
import WorkoutLibraryCreateFloatingActionButton from "./WorkoutLibraryCreateFloatingActionButton";
import WorkoutLibraryDetailSmallCard from "./WorkoutLibraryDetailSmallCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const WorkoutLibraryListView = () => {
    // TODO: API 교체
    const data: WorkoutLibrary[] = [
        {
            id: "1",
            name: "벤치프레스",
            workoutImage: SeatedRowImage,
            workoutPart: "가슴",
            type: ["weight", "rep"],
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
        },
        {
            id: "2",
            name: "데드리프트",
            workoutImage: SeatedRowImage,
            workoutPart: "등",
            type: ["weight", "rep"],
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
        },
        {
            id: "3",
            name: "스쿼트",
            workoutImage: SeatedRowImage,
            workoutPart: "하체",
            type: ["weight", "rep"],
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
        },
    ];

    const { selectedValue, handleTabClick } = useTab("가슴");
    const { value, handleInputChange, handleInputClear } = useInput();
    const [workoutLibraryId, setWorkoutLibraryId] = useState("");

    const {
        isOpen: isWorkoutDeleteModalOpen,
        handleOpenModal: openWorkoutDeleteModal,
        handleCloseModal: closeWorkoutDeleteModal,
    } = useModal();

    const {
        isOpen: isWorkoutLibraryBottomSheetOpen,
        handleOpenModal: openWorkoutLibraryBottomSheet,
        handleCloseModal: closeWorkoutLibraryBottomSheet,
    } = useModal();

    const handleFloatingActionButtonClick = (workoutLibraryId: string) => {
        setWorkoutLibraryId(workoutLibraryId);
        openWorkoutLibraryBottomSheet();
    };

    const handleSmallCardClick = (workoutLibraryId: string) => {
        setWorkoutLibraryId(workoutLibraryId);
        openWorkoutLibraryBottomSheet();
    };

    const handleSmallCardLongPress = (workoutLibraryId: string) => {
        setWorkoutLibraryId(workoutLibraryId);
        openWorkoutDeleteModal();
    };

    return (
        <Container>
            <SearchInput
                value={value}
                onInputChange={handleInputChange}
                onInputClear={handleInputClear}
            />
            <ChipTab>
                <ChipTab.Chip
                    value="가슴"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    가슴
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="등"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    등
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="어깨"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    어깨
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="하체"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    하체
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="팔"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    팔
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="기타"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    기타
                </ChipTab.Chip>
            </ChipTab>
            <SmallCardList<WorkoutLibrary>
                data={data}
                render={(item, index) => (
                    <WorkoutLibraryDetailSmallCard
                        data={item}
                        onSmallCardClick={handleSmallCardClick}
                        onSmallCardLongPress={handleSmallCardLongPress}
                    />
                )}
            />
            <WorkoutLibraryDetailBottomSheet
                workoutLibraryId={workoutLibraryId}
                isOpen={isWorkoutLibraryBottomSheetOpen}
                onBackdropClick={() => closeWorkoutLibraryBottomSheet()}
            />
            <WorkoutLibraryDeleteModal
                workoutLibraryId={workoutLibraryId}
                isOpen={isWorkoutDeleteModalOpen}
                onBackdropClick={() => closeWorkoutDeleteModal()}
                onCancelButtonClick={() => {
                    closeWorkoutDeleteModal();
                }}
                onConfirmButtonClick={() => {
                    closeWorkoutDeleteModal();
                }}
            />
            <WorkoutLibraryCreateFloatingActionButton
                onButtonClick={(workoutLibraryId: string) =>
                    handleFloatingActionButtonClick(workoutLibraryId)
                }
            />
        </Container>
    );
};

export default WorkoutLibraryListView;
