import Modal from "components/box/Modal/Modal";
import Confirm from "components/content/Confirm/Confirm";
import { ReactComponent as TrashIcon } from "assets/image/trash.svg";
import useToast from "hooks/useToast";

type WorkoutLibraryDeleteModalProps = {
    workoutLibraryId: string;
    isOpen: boolean;
    onBackdropClick: () => void;
    onCancelButtonClick: () => void;
    onConfirmButtonClick: () => void;
};

const WorkoutLibraryDeleteModal = ({
    workoutLibraryId,
    isOpen,
    onBackdropClick,
    onCancelButtonClick,
    onConfirmButtonClick,
}: WorkoutLibraryDeleteModalProps) => {
    const { showToast } = useToast();

    const handleConfirmButtonClick = () => {
        // TODO: 운동라이브러리 삭제하는 API 연결
        showToast("운동 종목이 삭제되었습니다.");
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
                        onConfirmButtonClick={handleConfirmButtonClick}
                    />
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};

export default WorkoutLibraryDeleteModal;
