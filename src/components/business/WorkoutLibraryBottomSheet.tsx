import Modal from "components/box/Modal/Modal";
import CheckBoxGroup from "components/content/CheckBoxGroup/CheckBoxGroup";
import ChipTab from "components/content/ChipTab/ChipTab";
import SmallCard from "components/content/SmallCard/SmallCard";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import useCheckBox from "hooks/client/useCheckBox";
import useInput from "hooks/client/useInput";
import useModal from "hooks/client/useModal";
import useTab from "hooks/client/useTab";
import React from "react";
import SearchInput from "components/content/SearchInput/SearchInput";
import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import styled from "styled-components";
import SeatedRowImage from "assets/image/seated-row.png";
import { WorkoutLibrary } from "types/workout-library";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const WorkoutLibraryBottomSheet = () => {
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();
    const { selectedValue, handleTabClick } = useTab("가슴");
    const { selectedValues, handleCheckBoxClick } = useCheckBox();
    const { value, handleInputChange, handleInputClear } = useInput();

    // TODO: API 교체
    const data = [
        {
            id: "1",
            name: "벤치프레스",
            workoutImage: SeatedRowImage,
            workoutPart: "가슴",
            type: "weight, rep, workoutSec",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
        },
        {
            id: "2",
            name: "데드리프트",
            workoutImage: SeatedRowImage,
            workoutPart: "등",
            type: "weight, rep, workoutSec",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
        },
        {
            id: "3",
            name: "스쿼트",
            workoutImage: SeatedRowImage,
            workoutPart: "하체",
            type: "weight, rep, workoutSec",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
        },
    ];

    const handleWorkoutLibraryTabClick = (value: string) => {
        handleTabClick(value);
        // TODO: API 교체
    };

    return (
        <>
            <Modal>
                <Modal.Backdrop
                    isOpen={isOpen}
                    onBackdropClick={handleCloseModal}
                />
                <Modal.BottomSheet isOpen={isOpen}>
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
                                onTabClick={handleWorkoutLibraryTabClick}
                            >
                                가슴
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value="등"
                                selectedValue={selectedValue}
                                onTabClick={handleWorkoutLibraryTabClick}
                            >
                                등
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value="어깨"
                                selectedValue={selectedValue}
                                onTabClick={handleWorkoutLibraryTabClick}
                            >
                                어깨
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value="하체"
                                selectedValue={selectedValue}
                                onTabClick={handleWorkoutLibraryTabClick}
                            >
                                하체
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value="팔"
                                selectedValue={selectedValue}
                                onTabClick={handleWorkoutLibraryTabClick}
                            >
                                팔
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value="기타"
                                selectedValue={selectedValue}
                                onTabClick={handleWorkoutLibraryTabClick}
                            >
                                기타
                            </ChipTab.Chip>
                        </ChipTab>
                        <CheckBoxGroup>
                            <SmallCardList<WorkoutLibrary>
                                data={data}
                                render={(item, index) => (
                                    <CheckBoxGroup.Wrapper>
                                        <SmallCard>
                                            <SmallCard.ImageBox>
                                                <img
                                                    src={SeatedRowImage}
                                                    alt="seated row"
                                                />
                                            </SmallCard.ImageBox>
                                            <SmallCard.NormalText>
                                                {item.name}
                                            </SmallCard.NormalText>
                                        </SmallCard>
                                        <CheckBoxGroup.CheckBox
                                            value={item.id.toString()}
                                            selectedValues={selectedValues}
                                            onCheckBoxClick={
                                                handleCheckBoxClick
                                            }
                                        />
                                    </CheckBoxGroup.Wrapper>
                                )}
                            />
                        </CheckBoxGroup>
                        <CheckBoxGroup.SubmitButton
                            onButtonClick={(selectedValues) =>
                                console.log(selectedValues)
                            }
                            selectedValues={selectedValues}
                        />
                    </Container>
                </Modal.BottomSheet>
            </Modal>
            <FloatingActionButton onButtonClick={() => handleOpenModal()} />
        </>
    );
};

export default WorkoutLibraryBottomSheet;
