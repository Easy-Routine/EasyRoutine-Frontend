import Modal from "components/box/Modal/Modal";
import Confirm from "components/content/Confirm/Confirm";
import { ReactComponent as TrashIcon } from "assets/image/trash.svg";
import useToast from "hooks/useToast";
import useDeleteRoutineRecordOneMutation from "hooks/server/useDeleteRoutineRecordOneMutation";

type RoutineRecordDeleteModalProps = {
    isOpen: boolean;
    routineRecordId: string;
    onBackdropClick: () => void;
    onCancelButtonClick: () => void;
    onConfirmButtonClick: () => void;
};

const RoutineRecordDeleteModal = ({
    isOpen,
    routineRecordId,
    onBackdropClick,
    onCancelButtonClick,
    onConfirmButtonClick,
}: RoutineRecordDeleteModalProps) => {
    const { showToast } = useToast();

    const { mutateAsync: deleteRoutineRecordOneMutate } =
        useDeleteRoutineRecordOneMutation();

    const handleRoutineRecordDeleteButtonClick = async (
        routineRecordId: string
    ) => {
        await deleteRoutineRecordOneMutate(routineRecordId);

        showToast("운동 기록이 삭제되었습니다.", "success");
        onConfirmButtonClick();
    };

    return (
        <Modal>
            <Modal.Backdrop isOpen={isOpen} onBackdropClick={onBackdropClick} />
            <Modal.Content isOpen={isOpen}>
                <Confirm>
                    <Confirm.ContentBox>
                        <Confirm.IconBox>
                            <TrashIcon />
                        </Confirm.IconBox>
                        <Confirm.Title>기록 삭제</Confirm.Title>
                        <Confirm.Description>
                            운동 기록을 삭제하면 복구할 수 없습니다. <br />
                            해당 기록을 삭제하시겠습니까?
                        </Confirm.Description>
                    </Confirm.ContentBox>
                    <Confirm.ButtonBox
                        cancelLabel="취소"
                        confirmLabel="삭제하기"
                        onCancelButtonClick={onCancelButtonClick}
                        onConfirmButtonClick={() =>
                            handleRoutineRecordDeleteButtonClick(
                                routineRecordId
                            )
                        }
                    />
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};

export default RoutineRecordDeleteModal;
