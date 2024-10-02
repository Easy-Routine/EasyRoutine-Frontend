import LabelBox from "components/box/LabelBox/LabelBox";
import Modal from "components/box/Modal/Modal";
import Button from "components/content/Button/Button";
import CheckBoxGroup from "components/content/CheckBoxGroup/CheckBoxGroup";
import ChipTab from "components/content/ChipTab/ChipTab";
import UnderlineInput from "components/content/UnderlineInput/UnderlineInput";
import useCheckBox from "hooks/client/useCheckBox";
import useInput from "hooks/client/useInput";
import useTab from "hooks/client/useTab";
import styled from "styled-components";

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
    workoutLibraryId: string;
};

const WorkoutLibraryDetailBottomSheet = ({
    isOpen,
    onBackdropClick,
    workoutLibraryId,
}: WorkoutLibraryBottomSheetProps) => {
    // TODO: workoutLibraryId로 상세 데이터 가져오기

    const {
        value: underlineInputValue,
        handleInputChange: handleUnderlineInputChange,
    } = useInput();
    const {
        selectedValue: selectedCategory,
        handleTabClick: handleCategoryChipTabClick,
    } = useTab("가슴");
    const { selectedValues, handleCheckBoxClick } = useCheckBox();

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
                                        onCheckBoxClick={handleCheckBoxClick}
                                    />
                                    무게
                                </CheckBoxItem>
                                <CheckBoxItem>
                                    <CheckBoxGroup.CheckBox
                                        value="rep"
                                        selectedValues={selectedValues}
                                        onCheckBoxClick={handleCheckBoxClick}
                                    />
                                    횟수
                                </CheckBoxItem>
                                <CheckBoxItem>
                                    <CheckBoxGroup.CheckBox
                                        value="workoutSec"
                                        selectedValues={selectedValues}
                                        onCheckBoxClick={handleCheckBoxClick}
                                    />
                                    시간
                                </CheckBoxItem>
                            </CheckBoxGroup.Wrapper>
                        </CheckBoxGroup>
                    </LabelBox>
                    <Button>운동 수정하기</Button>
                </Container>
                {workoutLibraryId}
            </Modal.BottomSheet>
        </Modal>
    );
};

export default WorkoutLibraryDetailBottomSheet;
