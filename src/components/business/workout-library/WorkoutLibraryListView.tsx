import ChipTab from "components/content/ChipTab/ChipTab";

import SmallCardList from "components/content/SmallCard/SmallCardList";
import {Suspense, useState} from "react";
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
import {WorkoutLibrary} from "types/model";
import {Category} from "types/enum";
import useToast from "hooks/useToast";
import useGetWorkoutLibraryOneMutation from "hooks/server/useGetWorkoutLibraryOneMutation";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const WorkoutLibraryListView = () => {
    const {selectedValue, handleTabClick} = useTab(Category.ALL);
    const {value, handleInputChange, handleInputClear} = useInput();
    const [workoutLibraryId, setWorkoutLibraryId] = useState("");
    const {showToast} = useToast();

    const {data: workoutLibraryAllData} = useGetWorkoutLibraryAllQuery(
        value,
        selectedValue,
    );
    const {mutateAsync: getWorkoutLibraryOneMutate} =
        useGetWorkoutLibraryOneMutation();

    const workoutLibraryAll = workoutLibraryAllData ?? [];

    const {
        isOpen: isWorkoutDeleteModalOpen,
        handleOpenModal: openWorkoutDeleteModal,
        handleCloseModal: closeWorkoutDeleteModal,
    } = useModal();

    const {
        isOpen: isWorkoutLibraryBottomSheetOpen,
        handleOpenModal: openWorkoutLibraryDetailBottomSheet,
        handleCloseModal: closeWorkoutLibraryDetailBottomSheet,
    } = useModal();

    const handleFloatingActionButtonClick = (workoutLibraryId: string) => {
        setWorkoutLibraryId(workoutLibraryId);
        openWorkoutLibraryDetailBottomSheet();
    };

    // 짧은 클릭
    const handleSmallCardClick = async (workoutLibraryId: string) => {
        // TODO: 운동 라이브러리 하나 가져오기

        // isEditable이 true라면 아래 로직 실행하기
        // const isEditable = workoutLibraryOne?.isEditable;

        setWorkoutLibraryId(workoutLibraryId);
        openWorkoutLibraryDetailBottomSheet();
    };
    // 긴 클릭
    const handleSmallCardLongPress = async (workoutLibraryId: string) => {
        const response = await getWorkoutLibraryOneMutate(workoutLibraryId);

        const isEditable = response?.isEditable;

        if (isEditable) {
            setWorkoutLibraryId(workoutLibraryId);
            openWorkoutDeleteModal();
        } else {
            showToast("기본 운동은 변경할 수 없습니다.", "error");
        }
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
                    value={Category.ALL}
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    전체
                </ChipTab.Chip>
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
                        key={workoutLibrary._id}
                        data={workoutLibrary}
                        onSmallCardClick={handleSmallCardClick}
                        onSmallCardLongPress={handleSmallCardLongPress}
                    />
                )}
            />
            <ErrorBoundary>
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <CommonLoading />
                        </DefferredComponent>
                    }
                >
                    {isWorkoutLibraryBottomSheetOpen && (
                        <WorkoutLibraryDetailBottomSheet
                            workoutLibraryId={workoutLibraryId}
                            isOpen={isWorkoutLibraryBottomSheetOpen}
                            onBackdropClick={() =>
                                closeWorkoutLibraryDetailBottomSheet()
                            }
                            onSubmitButtonClick={() =>
                                closeWorkoutLibraryDetailBottomSheet()
                            }
                        />
                    )}
                </Suspense>
            </ErrorBoundary>

            {isWorkoutDeleteModalOpen && (
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
            )}

            <WorkoutLibraryCreateFloatingActionButton
                onButtonClick={(workoutLibraryId: string) =>
                    handleFloatingActionButtonClick(workoutLibraryId)
                }
            />
        </Container>
    );
};

export default WorkoutLibraryListView;
