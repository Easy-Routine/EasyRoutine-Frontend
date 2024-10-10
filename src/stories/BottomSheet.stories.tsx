import type { Meta, StoryObj } from "@storybook/react";
import CheckBoxGroup from "components/content/CheckBoxGroup/CheckBoxGroup";
import ChipTab from "components/content/ChipTab/ChipTab";
import BottomSheet from "components/box/Modal/BottomSheet";
import Modal from "components/box/Modal/Modal";
import SearchInput from "components/content/SearchInput/SearchInput";
import SmallCard from "components/content/SmallCard/SmallCard";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import useModal from "hooks/client/useModal";
import useTab from "hooks/client/useTab";
import SeatedRowImage from "assets/image/seated-row.png";
import useCheckBox from "hooks/client/useCheckBox";
import useInput from "hooks/client/useInput";

type BottomSheetProps = React.ComponentProps<typeof BottomSheet>;

const meta: Meta<BottomSheetProps> = {
    component: BottomSheet,
};

export default meta;

type Story = StoryObj<any>;

export const DefaultBottomSheet: Story = {
    render: () => {
        const { isOpen, handleOpenModal, handleCloseModal } = useModal();
        return (
            <>
                <Modal>
                    <Modal.Trigger onTriggerClick={handleOpenModal}>
                        트리거
                    </Modal.Trigger>
                    <Modal.Backdrop
                        isOpen={isOpen}
                        onBackdropClick={handleCloseModal}
                    />
                    <Modal.BottomSheet isOpen={isOpen}>내용</Modal.BottomSheet>
                </Modal>
            </>
        );
    },
};

export const WorkoutLibraryBottomSheet: Story = {
    render: () => {
        const { isOpen, handleOpenModal, handleCloseModal } = useModal();
        const { selectedValue, handleTabClick } = useTab("가슴");
        const { selectedValues, handleCheckBoxClick } = useCheckBox();
        const { value, handleInputChange, handleInputClear } = useInput();
        return (
            <>
                <Modal>
                    <Modal.Trigger onTriggerClick={handleOpenModal}>
                        트리거
                    </Modal.Trigger>
                    <Modal.Backdrop
                        isOpen={isOpen}
                        onBackdropClick={handleCloseModal}
                    />
                    <Modal.BottomSheet isOpen={isOpen}>
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
                        <CheckBoxGroup>
                            <SmallCardList<any>
                                data={[{}, {}, {}]}
                                render={(item, index) => (
                                    <CheckBoxGroup.Wrapper key={index}>
                                        <SmallCard>
                                            <SmallCard.ImageBox>
                                                <img
                                                    src={SeatedRowImage}
                                                    alt="seated row"
                                                />
                                            </SmallCard.ImageBox>
                                            <SmallCard.NormalText>
                                                데드리프트
                                            </SmallCard.NormalText>
                                        </SmallCard>
                                        <CheckBoxGroup.CheckBox
                                            value={index.toString()}
                                            selectedValues={selectedValues}
                                            onCheckBoxClick={
                                                handleCheckBoxClick
                                            }
                                        />
                                    </CheckBoxGroup.Wrapper>
                                )}
                            />
                            <CheckBoxGroup.SubmitButton
                                onButtonClick={(selectedValues) =>
                                    console.log(selectedValues)
                                }
                                selectedValues={selectedValues}
                            />
                        </CheckBoxGroup>
                    </Modal.BottomSheet>
                </Modal>
            </>
        );
    },
};
