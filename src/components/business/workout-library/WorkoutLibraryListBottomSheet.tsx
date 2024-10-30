import Modal from "components/box/Modal/Modal";
import CheckBoxGroup from "components/content/CheckBoxGroup/CheckBoxGroup";
import ChipTab from "components/content/ChipTab/ChipTab";
import SmallCard from "components/content/SmallCard/SmallCard";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import useCheckBox from "hooks/client/useCheckBox";
import useInput from "hooks/client/useInput";
import useModal from "hooks/client/useModal";
import useTab from "hooks/client/useTab";
import SearchInput from "components/content/SearchInput/SearchInput";
import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import styled from "styled-components";
import SeatedRowImage from "assets/image/seated-row.png";
import { WorkoutLibrary } from "db";
import useGetWorkoutLibraryAllQuery from "hooks/server/useGetWorkoutLibraryAllQuery";
import useCreateWorkoutConfigAllMutation from "hooks/server/useCreateWorkoutConfigAllMutation";
import { useParams } from "react-router-dom";
import { Category } from "type/Category";

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

const WorkoutLibraryListBottomSheet = () => {
    const { routineConfigId } = useParams();

    const { isOpen, handleOpenModal, handleCloseModal } = useModal();
    const { selectedValue, handleTabClick } = useTab(Category.ALL);
    const { selectedValues, handleCheckBoxClick } = useCheckBox();
    const { value, handleInputChange, handleInputClear } = useInput();

    const { data: workoutLibraryAllData } = useGetWorkoutLibraryAllQuery(
        value,
        selectedValue
    );
    const { mutateAsync: createWorkoutConfigAllMutation } =
        useCreateWorkoutConfigAllMutation();

    const workoutLibraryAll = workoutLibraryAllData ?? [];

    const handleWorkoutLibraryTabClick = (value: string) => {
        handleTabClick(value);
        // TODO: API 교체
    };

    const handleSubmitButtonClick = async (values: string[]) => {
        await createWorkoutConfigAllMutation({
            workoutLibraryIds: values,
            routineConfigId: routineConfigId as string,
        });
        handleCloseModal();
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
                                value={Category.ALL}
                                selectedValue={selectedValue}
                                onTabClick={handleWorkoutLibraryTabClick}
                            >
                                전체
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.CHEST}
                                selectedValue={selectedValue}
                                onTabClick={handleWorkoutLibraryTabClick}
                            >
                                가슴
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.BACK}
                                selectedValue={selectedValue}
                                onTabClick={handleWorkoutLibraryTabClick}
                            >
                                등
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.SHOULDER}
                                selectedValue={selectedValue}
                                onTabClick={handleWorkoutLibraryTabClick}
                            >
                                어깨
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.LEG}
                                selectedValue={selectedValue}
                                onTabClick={handleWorkoutLibraryTabClick}
                            >
                                하체
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.ARM}
                                selectedValue={selectedValue}
                                onTabClick={handleWorkoutLibraryTabClick}
                            >
                                팔
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.ETC}
                                selectedValue={selectedValue}
                                onTabClick={handleWorkoutLibraryTabClick}
                            >
                                기타
                            </ChipTab.Chip>
                        </ChipTab>
                        <CheckBoxGroup>
                            <SmallCardListContainer>
                                <SmallCardList<WorkoutLibrary>
                                    data={workoutLibraryAll}
                                    render={(item, index) => (
                                        <CheckBoxGroup.Wrapper key={item._id}>
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
                                                value={item._id.toString()}
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
            <FloatingActionButton onButtonClick={() => handleOpenModal()} />
        </>
    );
};

export default WorkoutLibraryListBottomSheet;
