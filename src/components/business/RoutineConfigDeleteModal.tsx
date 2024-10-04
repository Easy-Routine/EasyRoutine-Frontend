import Modal from "components/box/Modal/Modal";
import Confirm from "components/content/Confirm/Confirm";
import { ReactComponent as ClockIcon } from "assets/image/clock.svg";

type RoutineConfigDeleteModalProps = {
    routineConfigId: string;
    isOpen: boolean;
    onBackdropClick: () => void;
    onCancelButtonClick: () => void;
    onConfirmButtonClick: () => void;
};

const RoutineConfigDeleteModal = ({
    routineConfigId,
    isOpen,
    onBackdropClick,
    onCancelButtonClick,
    onConfirmButtonClick,
}: RoutineConfigDeleteModalProps) => {
    // TODO: API 호출
    const data = {
        name: "월요일 루틴",
    };

    const handleRoutineConfigDeleteButtonClick = () => {
        // TODO: API 호출
        onConfirmButtonClick();
    };

    return (
        <Modal>
            <Modal.Backdrop isOpen={isOpen} onBackdropClick={onBackdropClick} />
            <Modal.Content isOpen={isOpen}>
                <Confirm>
                    <Confirm.ContentBox>
                        <Confirm.IconBox>
                            <ClockIcon />
                        </Confirm.IconBox>
                        <Confirm.Title>루틴 삭제</Confirm.Title>
                        <Confirm.Description>
                            '{data.name}'을
                            <br /> 삭제하시겠습니까?
                        </Confirm.Description>
                    </Confirm.ContentBox>
                    <Confirm.ButtonBox
                        cancelLabel="취소"
                        confirmLabel="삭제하기"
                        onCancelButtonClick={onCancelButtonClick}
                        onConfirmButtonClick={
                            handleRoutineConfigDeleteButtonClick
                        }
                    />
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};

export default RoutineConfigDeleteModal;
