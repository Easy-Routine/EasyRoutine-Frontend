import ChipTab from "components/content/ChipTab/ChipTab";

import SmallCardList from "components/content/SmallCard/SmallCardList";
import { useState } from "react";
import styled from "styled-components";
import SearchInput from "components/content/SearchInput/SearchInput";
import useTab from "hooks/client/useTab";
import useInput from "hooks/client/useInput";
import useModal from "hooks/client/useModal";
import WorkoutLibraryDetailBottomSheet from "./WorkoutLibraryDetailBottomSheet";
import WorkoutLibraryDeleteModal from "./WorkoutLibraryDeleteModal";
import WorkoutLibraryCreateFloatingActionButton from "./WorkoutLibraryCreateFloatingActionButton";
import WorkoutLibraryDetailSmallCard from "./WorkoutLibraryDetailSmallCard";
import useGetWorkoutLibraryAllQuery from "hooks/server/useGetWorkoutLibraryAllQuery";
import { WorkoutLibrary } from "db";
import { Category } from "type/Category";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const WorkoutLibraryListView = () => {
    const { selectedValue, handleTabClick } = useTab(Category.CHEST);
    const { value, handleInputChange, handleInputClear } = useInput();
    const [workoutLibraryId, setWorkoutLibraryId] = useState("");

    const { data: workoutLibraryAllData } =
        useGetWorkoutLibraryAllQuery(selectedValue);

    const workoutLibraryAll = workoutLibraryAllData ?? [];

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
                    value={Category.CHEST}
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    가슴
                </ChipTab.Chip>
                <ChipTab.Chip
                    value={Category.BACK}
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    등
                </ChipTab.Chip>
                <ChipTab.Chip
                    value={Category.SHOULDER}
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    어깨
                </ChipTab.Chip>
                <ChipTab.Chip
                    value={Category.LEG}
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    하체
                </ChipTab.Chip>
                <ChipTab.Chip
                    value={Category.ARM}
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    팔
                </ChipTab.Chip>
                <ChipTab.Chip
                    value={Category.ETC}
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    기타
                </ChipTab.Chip>
            </ChipTab>
            <SmallCardList<WorkoutLibrary>
                data={workoutLibraryAll}
                render={(workoutLibrary, index) => (
                    <WorkoutLibraryDetailSmallCard
                        key={workoutLibrary.id}
                        data={workoutLibrary}
                        onSmallCardClick={handleSmallCardClick}
                        onSmallCardLongPress={handleSmallCardLongPress}
                    />
                )}
            />
            <WorkoutLibraryDetailBottomSheet
                workoutLibraryId={workoutLibraryId}
                isOpen={isWorkoutLibraryBottomSheetOpen}
                onBackdropClick={() => closeWorkoutLibraryBottomSheet()}
                onSubmitButtonClick={() => closeWorkoutLibraryBottomSheet()}
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
