import Modal from "components/box/Modal/Modal";
import Confirm from "components/content/Confirm/Confirm";
import {ReactComponent as ClockIcon} from "assets/image/clock.svg";
import useToast from "hooks/useToast";
import useDeleteRoutineOneMutation from "hooks/server/useDeleteRoutineOneMutation";
import useGetRoutineOneQuery from "hooks/server/useRoutineGetQuery";
import useNativeMessage from "hooks/client/useNativeMessage";

type RoutineDeleteModalProps = {
    routineId: string;
    isOpen: boolean;
    onBackdropClick: () => void;
    onCancelButtonClick: () => void;
    onConfirmButtonClick: () => void;
};

const RoutineDeleteModal = ({
    routineId,
    isOpen,
    onBackdropClick,
    onCancelButtonClick,
    onConfirmButtonClick,
}: RoutineDeleteModalProps) => {
    const {showToast} = useToast();
    const {sendNativeMessage} = useNativeMessage();

    const {mutateAsync: deleteRoutineOne} = useDeleteRoutineOneMutation();

    const {data: routineOne} = useGetRoutineOneQuery(routineId);

    const handleRoutineDeleteButtonClick = async (routineId: string) => {
        await deleteRoutineOne(routineId);

        showToast("루틴이 삭제되었습니다.", "success");
        onConfirmButtonClick();
        sendNativeMessage({type: "vibrate"});

        // showToast("루틴 삭제 중 에러가 발생했습니다.", "error");
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
                        {/* <Confirm.Description>
                            '{routineOne!.name}'을
                            <br /> 삭제하시겠습니까?
                        </Confirm.Description> */}
                    </Confirm.ContentBox>
                    <Confirm.ButtonBox
                        cancelLabel="취소"
                        confirmLabel="삭제하기"
                        onCancelButtonClick={onCancelButtonClick}
                        onConfirmButtonClick={() =>
                            handleRoutineDeleteButtonClick(routineId)
                        }
                    />
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};

export default RoutineDeleteModal;
