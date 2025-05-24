import ChipTab from "components/content/ChipTab/ChipTab";

import SmallCardList from "components/content/SmallCard/SmallCardList";
import {Suspense, useState} from "react";
import styled from "styled-components";
import SearchInput from "components/content/SearchInput/SearchInput";
import useTab from "hooks/client/useTab";
import useInput from "hooks/client/useInput";
import useModal from "hooks/client/useModal";
import useGetExerciseAllQuery from "hooks/server/useExerciseAllGetQuery";
import {Exercise} from "types/model";
import {Category} from "types/enum";
import useToast from "hooks/useToast";
import useGetExerciseOneMutation from "hooks/server/useGetExerciseOneMutation";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import useHardwareBackPress from "hooks/client/useHardwareBackPress";
import {useNavigate} from "react-router-dom";
import ExerciseDetailSmallCard from "./WorkoutLibraryDetailSmallCard";
import ExerciseDetailBottomSheet from "./WorkoutLibraryDetailBottomSheet";
import ExerciseDeleteModal from "./WorkoutLibraryDeleteModal";
import ExerciseCreateFloatingActionButton from "./WorkoutLibraryCreateFloatingActionButton";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ExerciseListView = () => {
    const {selectedValue, handleTabClick} = useTab(Category.ALL);
    const {value, handleInputChange, handleInputClear} = useInput();
    const [exerciseId, setExerciseId] = useState("");
    const {showToast} = useToast();

    const {data: exerciseAllData} = useGetExerciseAllQuery(
        value,
        selectedValue,
    );
    const {mutateAsync: getExerciseOneMutate} = useGetExerciseOneMutation();

    const exerciseAll = exerciseAllData ?? [];

    const {
        isOpen: isWorkoutDeleteModalOpen,
        handleOpenModal: openWorkoutDeleteModal,
        handleCloseModal: closeWorkoutDeleteModal,
    } = useModal();

    const {
        isOpen: isExerciseBottomSheetOpen,
        handleOpenModal: openExerciseDetailBottomSheet,
        handleCloseModal: closeExerciseDetailBottomSheet,
    } = useModal();

    const navigate = useNavigate();
    useHardwareBackPress({
        onNativeBackButtonClick: () => {
            if (isWorkoutDeleteModalOpen) {
                closeWorkoutDeleteModal();
                return;
            }
            if (isExerciseBottomSheetOpen) {
                closeExerciseDetailBottomSheet();
                return;
            }
            navigate(-1);
        },
        dependencies: [isWorkoutDeleteModalOpen, isExerciseBottomSheetOpen],
    });

    const handleFloatingActionButtonClick = (exerciseId: string) => {
        setExerciseId(exerciseId);
        openExerciseDetailBottomSheet();
    };

    // 짧은 클릭
    const handleSmallCardClick = async (exerciseId: string) => {
        // TODO: 운동 라이브러리 하나 가져오기

        // isEditable이 true라면 아래 로직 실행하기
        // const isEditable = exerciseOne?.isEditable;

        setExerciseId(exerciseId);
        openExerciseDetailBottomSheet();
    };
    // 긴 클릭
    const handleSmallCardLongPress = async (exerciseId: string) => {
        const response = await getExerciseOneMutate(exerciseId);

        const isEditable = response?.isEditable;

        if (isEditable) {
            setExerciseId(exerciseId);
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
            <SmallCardList<Exercise>
                data={exerciseAll}
                render={(exercise, index) => (
                    <ExerciseDetailSmallCard
                        key={exercise.id}
                        data={exercise}
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
                    {isExerciseBottomSheetOpen && (
                        <ExerciseDetailBottomSheet
                            exerciseId={exerciseId}
                            isOpen={isExerciseBottomSheetOpen}
                            onBackdropClick={() =>
                                closeExerciseDetailBottomSheet()
                            }
                            onSubmitButtonClick={() =>
                                closeExerciseDetailBottomSheet()
                            }
                        />
                    )}
                </Suspense>
            </ErrorBoundary>

            {isWorkoutDeleteModalOpen && (
                <ExerciseDeleteModal
                    exerciseId={exerciseId}
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

            <ExerciseCreateFloatingActionButton
                onButtonClick={(exerciseId: string) =>
                    handleFloatingActionButtonClick(exerciseId)
                }
            />
        </Container>
    );
};

export default ExerciseListView;
