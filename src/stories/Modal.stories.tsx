import type { Meta, StoryObj } from "@storybook/react";
import Modal from "components/box/Modal/Modal";
import useModal from "hooks/client/useModal";
import Confirm from "components/content/Confirm/Confirm";
import { ReactComponent as TrashIcon } from "assets/image/trash.svg";

type ModalProps = React.ComponentProps<typeof Modal>;

const meta: Meta<ModalProps> = {
    component: Modal,
};

export default meta;

type Story = StoryObj<any>;

export const DefaultModal: Story = {
    render: () => {
        const { isOpen, handleOpenModal, handleCloseModal } = useModal();
        return (
            <>
                <Modal>
                    <Modal.Trigger onOpenModal={handleOpenModal}>
                        트리거
                    </Modal.Trigger>
                    <Modal.Backdrop isOpen={isOpen} />
                    <Modal.Content isOpen={isOpen}>
                        <Confirm>
                            <Confirm.ContentBox>
                                <Confirm.IconBox>
                                    <TrashIcon />
                                </Confirm.IconBox>
                                <Confirm.Title>루틴 진행</Confirm.Title>
                                <Confirm.Description>
                                    `루틴 제목` 루틴으로 운동을 <br />
                                    시작하시겠습니까?
                                </Confirm.Description>
                            </Confirm.ContentBox>
                            <Confirm.ButtonBox
                                cancelLabel="취소"
                                confirmLabel="시작하기"
                                onCancelButtonClick={() => {
                                    console.log("취소");
                                    handleCloseModal();
                                }}
                                onConfirmButtonClick={() => {
                                    console.log("시작");
                                    handleCloseModal();
                                }}
                            />
                        </Confirm>
                    </Modal.Content>
                </Modal>
            </>
        );
    },
};
