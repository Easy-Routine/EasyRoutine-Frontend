import Modal from "components/box/Modal/Modal";
import CheckBoxGroup from "components/content/CheckBoxGroup/CheckBoxGroup";
import ChipTab from "components/content/ChipTab/ChipTab";
import SmallCard from "components/content/SmallCard/SmallCard";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import useCheckBox from "hooks/client/useCheckBox";
import useInput from "hooks/client/useInput";
import useTab from "hooks/client/useTab";
import SearchInput from "components/content/SearchInput/SearchInput";
import styled from "styled-components";
import {Exercise} from "types/model";
import useGetExerciseAllQuery from "hooks/server/useExerciseAllGetQuery";
import useCreateRoutineExerciseAllMutation from "hooks/server/useCreateRoutineExerciseAllMutation";
import {useParams} from "react-router-dom";
import {Category} from "types/enum";
import DefaultImage from "assets/image/default-image.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    overflow: auto;
`;

const SmallCardListContainer = styled.div`
    height: 205px;
    overflow-y: auto;
`;

type ExerciseListBottomSheetProps = {
    isOpen: boolean;
    onBackdropClick: () => void;
    onSubmitButtonClick: () => void;
};

const ExerciseListBottomSheet = ({
    isOpen,
    onBackdropClick,
    onSubmitButtonClick,
}: ExerciseListBottomSheetProps) => {
    const {routineId} = useParams();
    const {selectedValue, handleTabClick} = useTab(Category.ALL);
    const {selectedValues, handleCheckBoxClick, resetSelectedValues} =
        useCheckBox();
    const {value, handleInputChange, handleInputClear} = useInput();

    const {data: exerciseAllData} = useGetExerciseAllQuery(
        value,
        selectedValue,
    );
    const {mutateAsync: createRoutineExerciseAllMutation} =
        useCreateRoutineExerciseAllMutation();

    const exerciseAll = exerciseAllData ?? [];

    const handleExerciseTabClick = (value: string) => {
        handleTabClick(value);
        // TODO: API 교체
    };

    const handleSubmitButtonClick = async (values: string[]) => {
        await createRoutineExerciseAllMutation({
            exerciseIds: values,
            routineId: routineId as string,
        });

        resetSelectedValues();
        onSubmitButtonClick();
    };

    return (
        <>
            <Modal>
                <Modal.Backdrop
                    isOpen={isOpen}
                    onBackdropClick={onBackdropClick}
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
                                value={Category.ALL}
                                selectedValue={selectedValue}
                                onTabClick={handleExerciseTabClick}
                            >
                                전체
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.CHEST}
                                selectedValue={selectedValue}
                                onTabClick={handleExerciseTabClick}
                            >
                                가슴
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.BACK}
                                selectedValue={selectedValue}
                                onTabClick={handleExerciseTabClick}
                            >
                                등
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.SHOULDER}
                                selectedValue={selectedValue}
                                onTabClick={handleExerciseTabClick}
                            >
                                어깨
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.LEG}
                                selectedValue={selectedValue}
                                onTabClick={handleExerciseTabClick}
                            >
                                하체
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.ARM}
                                selectedValue={selectedValue}
                                onTabClick={handleExerciseTabClick}
                            >
                                팔
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.ETC}
                                selectedValue={selectedValue}
                                onTabClick={handleExerciseTabClick}
                            >
                                기타
                            </ChipTab.Chip>
                        </ChipTab>
                        <CheckBoxGroup>
                            <SmallCardListContainer>
                                <SmallCardList<Exercise>
                                    data={exerciseAll}
                                    render={(item, index) => (
                                        <CheckBoxGroup.Wrapper key={item.id}>
                                            <SmallCard
                                                onCardClick={() =>
                                                    handleCheckBoxClick(
                                                        item.id.toString(),
                                                    )
                                                }
                                            >
                                                <SmallCard.ImageBox
                                                    src={
                                                        item.image ||
                                                        DefaultImage
                                                    }
                                                />

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
                            </SmallCardListContainer>
                        </CheckBoxGroup>
                        <CheckBoxGroup.SubmitButton
                            onButtonClick={handleSubmitButtonClick}
                            selectedValues={selectedValues}
                        />
                    </Container>
                </Modal.BottomSheet>
            </Modal>
            {/* <FloatingActionButton onButtonClick={() => handleOpenModal()} /> */}
        </>
    );
};

export default ExerciseListBottomSheet;
