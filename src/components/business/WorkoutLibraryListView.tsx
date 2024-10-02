import ChipTab from "components/content/ChipTab/ChipTab";
import SmallCard from "components/content/SmallCard/SmallCard";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { WorkoutLibrary } from "types/workout-library";
import SearchInput from "components/content/SearchInput/SearchInput";
import SeatedRowImage from "assets/image/seated-row.png";
import useTab from "hooks/client/useTab";
import useInput from "hooks/client/useInput";
import Modal from "components/box/Modal/Modal";
import LabelBox from "components/box/LabelBox/LabelBox";
import UnderlineInput from "components/content/UnderlineInput/UnderlineInput";
import CheckBoxGroup from "components/content/CheckBoxGroup/CheckBoxGroup";
import Button from "components/content/Button/Button";
import useCheckBox from "hooks/client/useCheckBox";
import useModal from "hooks/client/useModal";
import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const CheckBoxItem = styled.div`
    font-size: ${({ theme }) => theme.fontSize.md};
    display: flex;
    gap: 10px;
    align-items: center;
`;

const WorkoutLibraryListView = () => {
    const { selectedValue, handleTabClick } = useTab("가슴");
    const { value, handleInputChange, handleInputClear } = useInput();
    const [currentWorkoutLibrary, setCurrentWorkoutLibrary] =
        useState<WorkoutLibrary>({
            id: "",
            name: "",
            workoutImage: "",
            workoutPart: "",
            type: [],
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 0,
        });

    const {
        setValue,
        value: underlineInputValue,
        handleInputChange: handleUnderlineInputChange,
    } = useInput();
    const {
        selectedValue: selectedCategory,
        handleTabClick: handleCategoryChipTabClick,
    } = useTab("가슴");
    const { selectedValues, handleCheckBoxClick, setSelectedValues } =
        useCheckBox();
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();

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

    const handleFloatingActionButtonClick = () => {
        handleOpenModal();
        //TODO: 라이브러리 아이템 추가
        setCurrentWorkoutLibrary({
            id: "",
            name: "",
            workoutImage: "",
            workoutPart: "",
            type: [],
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 0,
        });
    };

    const handleSmallCardClick = (workoutLibraryId: string) => {
        const currentWorkoutLibrary = data.find(
            (item) => item.id === workoutLibraryId
        ) as WorkoutLibrary;

        setCurrentWorkoutLibrary(currentWorkoutLibrary);
        handleOpenModal();
    };

    useEffect(() => {
        setValue(currentWorkoutLibrary.name);
        handleCategoryChipTabClick(currentWorkoutLibrary.workoutPart);
        setSelectedValues(currentWorkoutLibrary.type);
    }, [currentWorkoutLibrary]);

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
                    <SmallCard
                        onCardClick={() => handleSmallCardClick(item.id)}
                    >
                        <SmallCard.ImageBox>
                            <img src={SeatedRowImage} alt="seated row" />
                        </SmallCard.ImageBox>
                        <SmallCard.NormalText>{item.name}</SmallCard.NormalText>
                    </SmallCard>
                )}
            />

            <Modal>
                <Modal.Backdrop
                    isOpen={isOpen}
                    onBackdropClick={handleCloseModal}
                />
                <Modal.BottomSheet isOpen={isOpen}>
                    <Container>
                        <LabelBox labelText="운동 이름" gap="20px">
                            <UnderlineInput
                                value={underlineInputValue}
                                placeholder="운동 이름을 입력하세요."
                                onInputChange={handleUnderlineInputChange}
                            />
                        </LabelBox>
                        <LabelBox labelText="운동 부위" gap="20px">
                            <ChipTab>
                                <ChipTab.Chip
                                    value="가슴"
                                    selectedValue={selectedCategory}
                                    onTabClick={handleCategoryChipTabClick}
                                >
                                    가슴
                                </ChipTab.Chip>
                                <ChipTab.Chip
                                    value="등"
                                    selectedValue={selectedCategory}
                                    onTabClick={handleCategoryChipTabClick}
                                >
                                    등
                                </ChipTab.Chip>
                                <ChipTab.Chip
                                    value="어깨"
                                    selectedValue={selectedCategory}
                                    onTabClick={handleCategoryChipTabClick}
                                >
                                    어깨
                                </ChipTab.Chip>
                                <ChipTab.Chip
                                    value="하체"
                                    selectedValue={selectedCategory}
                                    onTabClick={handleCategoryChipTabClick}
                                >
                                    하체
                                </ChipTab.Chip>
                                <ChipTab.Chip
                                    value="팔"
                                    selectedValue={selectedCategory}
                                    onTabClick={handleCategoryChipTabClick}
                                >
                                    팔
                                </ChipTab.Chip>
                                <ChipTab.Chip
                                    value="기타"
                                    selectedValue={selectedCategory}
                                    onTabClick={handleCategoryChipTabClick}
                                >
                                    기타
                                </ChipTab.Chip>
                            </ChipTab>
                        </LabelBox>
                        <LabelBox labelText="타입" gap="20px">
                            <CheckBoxGroup>
                                <CheckBoxGroup.Wrapper>
                                    <CheckBoxItem>
                                        <CheckBoxGroup.CheckBox
                                            value="weight"
                                            selectedValues={selectedValues}
                                            onCheckBoxClick={
                                                handleCheckBoxClick
                                            }
                                        />
                                        무게
                                    </CheckBoxItem>
                                    <CheckBoxItem>
                                        <CheckBoxGroup.CheckBox
                                            value="rep"
                                            selectedValues={selectedValues}
                                            onCheckBoxClick={
                                                handleCheckBoxClick
                                            }
                                        />
                                        횟수
                                    </CheckBoxItem>
                                    <CheckBoxItem>
                                        <CheckBoxGroup.CheckBox
                                            value="workoutSec"
                                            selectedValues={selectedValues}
                                            onCheckBoxClick={
                                                handleCheckBoxClick
                                            }
                                        />
                                        시간
                                    </CheckBoxItem>
                                </CheckBoxGroup.Wrapper>
                            </CheckBoxGroup>
                        </LabelBox>
                        <Button>운동 수정하기</Button>
                    </Container>
                </Modal.BottomSheet>
                <FloatingActionButton
                    onButtonClick={handleFloatingActionButtonClick}
                />
            </Modal>
        </Container>
    );
};

export default WorkoutLibraryListView;
