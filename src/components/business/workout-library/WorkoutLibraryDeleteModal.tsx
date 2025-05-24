import Modal from "components/box/Modal/Modal";
import Confirm from "components/content/Confirm/Confirm";
import {ReactComponent as TrashIcon} from "assets/image/trash.svg";
import useToast from "hooks/useToast";
import useDeleteExerciseOneMutation from "hooks/server/useDeleteExerciseOneMutation";
import useNativeMessage from "hooks/client/useNativeMessage";

type ExerciseDeleteModalProps = {
    exerciseId: string;
    isOpen: boolean;
    onBackdropClick: () => void;
    onCancelButtonClick: () => void;
    onConfirmButtonClick: () => void;
};

const ExerciseDeleteModal = ({
    exerciseId,
    isOpen,
    onBackdropClick,
    onCancelButtonClick,
    onConfirmButtonClick,
}: ExerciseDeleteModalProps) => {
    const {showToast} = useToast();
    const {sendNativeMessage} = useNativeMessage();
    // const [promise, setPromise] =

    const {mutateAsync: deleteExerciseOneMutate} =
        useDeleteExerciseOneMutation();

    const handleConfirmButtonClick = async (exerciseId: string) => {
        await deleteExerciseOneMutate(exerciseId);

        showToast("운동 종목이 삭제되었습니다.", "success");
        onConfirmButtonClick();
        sendNativeMessage({type: "vibrate"});

        // showToast("운동 종목 삭제 중 에러가 발생했습니다.", "error");
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
                        <Confirm.Title>종목 삭제</Confirm.Title>
                        <Confirm.Description>
                            운동 종목을 삭제하면 복구할 수 없습니다. <br />
                            해당 종목을 삭제하시겠습니까?
                        </Confirm.Description>
                    </Confirm.ContentBox>
                    <Confirm.ButtonBox
                        cancelLabel="취소"
                        confirmLabel="삭제하기"
                        onCancelButtonClick={onCancelButtonClick}
                        onConfirmButtonClick={() =>
                            handleConfirmButtonClick(exerciseId)
                        }
                    />
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};

export default ExerciseDeleteModal;
