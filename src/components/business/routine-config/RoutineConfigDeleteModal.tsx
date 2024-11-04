import Modal from "components/box/Modal/Modal";
import Confirm from "components/content/Confirm/Confirm";
import { ReactComponent as ClockIcon } from "assets/image/clock.svg";
import useToast from "hooks/useToast";
import useDeleteRoutineConfigOneMutation from "hooks/server/useDeleteRoutineConfigOneMutation";
import useGetRoutineConfigOneQuery from "hooks/server/useGetRoutineConfigOneQuery";

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
    const { showToast } = useToast();

    const { mutateAsync: deleteRoutineConfigOne } =
        useDeleteRoutineConfigOneMutation();

    const { data: routineConfigOneData } =
        useGetRoutineConfigOneQuery(routineConfigId);

    const routineConfigOne = routineConfigOneData ?? { name: "" };

    const handleRoutineConfigDeleteButtonClick = async (
        routineConfigId: string
    ) => {
        try {
            await deleteRoutineConfigOne(routineConfigId);
            showToast("루틴이 삭제되었습니다.", "success");
            onConfirmButtonClick();
        } catch (e) {
            showToast("루틴 삭제 중 에러가 발생했습니다.", "error");
        }
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
                            '{routineConfigOne.name}'을
                            <br /> 삭제하시겠습니까?
                        </Confirm.Description>
                    </Confirm.ContentBox>
                    <Confirm.ButtonBox
                        cancelLabel="취소"
                        confirmLabel="삭제하기"
                        onCancelButtonClick={onCancelButtonClick}
                        onConfirmButtonClick={() =>
                            handleRoutineConfigDeleteButtonClick(
                                routineConfigId
                            )
                        }
                    />
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};

export default RoutineConfigDeleteModal;
