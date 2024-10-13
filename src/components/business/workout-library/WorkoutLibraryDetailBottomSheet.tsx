import LabelBox from "components/box/LabelBox/LabelBox";
import Modal from "components/box/Modal/Modal";
import Button from "components/content/Button/Button";
import CheckBoxGroup from "components/content/CheckBoxGroup/CheckBoxGroup";
import ChipTab from "components/content/ChipTab/ChipTab";
import UnderlineInput from "components/content/UnderlineInput/UnderlineInput";
import { WorkoutLibrary } from "db";
import useCheckBox from "hooks/client/useCheckBox";
import useInput from "hooks/client/useInput";
import useTab from "hooks/client/useTab";
import useGetWorkoutLibraryOneQuery from "hooks/server/useGetWorkoutLibraryOneQuery";
import useUpdateWorkoutLibraryOneMutation from "hooks/server/useUpdateWorkoutLibraryOneMutation";
import { useEffect } from "react";
import styled from "styled-components";
import { Category } from "type/Category";
import { Type } from "type/Type";

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

type WorkoutLibraryBottomSheetProps = {
    isOpen: boolean;
    onBackdropClick: () => void;
    onSubmitButtonClick: () => void;
    workoutLibraryId: string;
};

const initialWorkoutLibraryOne: WorkoutLibrary = {
    id: "",
    name: "",
    image: "",
    category: "",
    type: [],
    isEditable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "",
};

const WorkoutLibraryDetailBottomSheet = ({
    isOpen,
    onBackdropClick,
    onSubmitButtonClick,
    workoutLibraryId,
}: WorkoutLibraryBottomSheetProps) => {
    // TODO: workoutLibraryId로 상세 데이터 가져오기

    const { data: workoutLibraryOneData } =
        useGetWorkoutLibraryOneQuery(workoutLibraryId);

    const workoutLibraryOne = workoutLibraryOneData ?? initialWorkoutLibraryOne;

    const {
        value: underlineInputValue,
        setValue,
        handleInputChange: handleUnderlineInputChange,
    } = useInput(workoutLibraryOne.name);
    const {
        selectedValue: selectedCategory,
        setSelectedValue,
        handleTabClick: handleCategoryChipTabClick,
    } = useTab(workoutLibraryOne.category);
    const { selectedValues, setSelectedValues, handleCheckBoxClick } =
        useCheckBox(workoutLibraryOne.type);

    const { mutateAsync: updateWorkoutLibraryOneMutate } =
        useUpdateWorkoutLibraryOneMutation();

    useEffect(() => {
        setValue(workoutLibraryOne.name);
        setSelectedValue(workoutLibraryOne.category);
        setSelectedValues(workoutLibraryOne.type);
    }, [workoutLibraryOne, setValue, setSelectedValue, setSelectedValues]);

    const handleWorkoutLibraryUpdateButtonClick = async () => {
        await updateWorkoutLibraryOneMutate({
            workoutLibraryId,
            updatedData: {
                name: underlineInputValue,
                category: selectedCategory,
                type: selectedValues,
            },
        });
        onSubmitButtonClick();
    };

    return (
        <Modal>
            <Modal.Backdrop isOpen={isOpen} onBackdropClick={onBackdropClick} />
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
                                value={Category.CHEST}
                                selectedValue={selectedCategory}
                                onTabClick={handleCategoryChipTabClick}
                            >
                                가슴
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.BACK}
                                selectedValue={selectedCategory}
                                onTabClick={handleCategoryChipTabClick}
                            >
                                등
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.SHOULDER}
                                selectedValue={selectedCategory}
                                onTabClick={handleCategoryChipTabClick}
                            >
                                어깨
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.LEG}
                                selectedValue={selectedCategory}
                                onTabClick={handleCategoryChipTabClick}
                            >
                                하체
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.ARM}
                                selectedValue={selectedCategory}
                                onTabClick={handleCategoryChipTabClick}
                            >
                                팔
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.ETC}
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
                                        value={Type.WEIGHT}
                                        selectedValues={selectedValues}
                                        onCheckBoxClick={handleCheckBoxClick}
                                    />
                                    무게
                                </CheckBoxItem>
                                <CheckBoxItem>
                                    <CheckBoxGroup.CheckBox
                                        value={Type.REP}
                                        selectedValues={selectedValues}
                                        onCheckBoxClick={handleCheckBoxClick}
                                    />
                                    횟수
                                </CheckBoxItem>
                                <CheckBoxItem>
                                    <CheckBoxGroup.CheckBox
                                        value={Type.WORKOUT_SEC}
                                        selectedValues={selectedValues}
                                        onCheckBoxClick={handleCheckBoxClick}
                                    />
                                    시간
                                </CheckBoxItem>
                            </CheckBoxGroup.Wrapper>
                        </CheckBoxGroup>
                    </LabelBox>
                    <Button onClick={handleWorkoutLibraryUpdateButtonClick}>
                        운동 수정하기
                    </Button>
                </Container>
            </Modal.BottomSheet>
        </Modal>
    );
};

export default WorkoutLibraryDetailBottomSheet;
