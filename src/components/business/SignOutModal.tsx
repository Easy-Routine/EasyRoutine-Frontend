import Modal from "components/box/Modal/Modal";
import Confirm from "components/content/Confirm/Confirm";
import {ReactComponent as TrashIcon} from "assets/image/trash.svg";
import useToast from "hooks/useToast";
import useDeleteRoutineRecordOneMutation from "hooks/server/useDeleteRoutineRecordOneMutation";
import useNativeMessage from "hooks/client/useNativeMessage";
import {signOut} from "services";

type SignOutModalProps = {
    isOpen: boolean;
    onBackdropClick: () => void;
    onCancelButtonClick: () => void;
    onConfirmButtonClick: () => void;
};

const SignOutModal = ({
    isOpen,
    onBackdropClick,
    onCancelButtonClick,
    onConfirmButtonClick,
}: SignOutModalProps) => {
    const {showToast} = useToast();
    const {sendNativeMessage} = useNativeMessage();

    const {mutateAsync: deleteRoutineRecordOneMutate} =
        useDeleteRoutineRecordOneMutation();

    const handleSignOutButtonClick = async () => {
        await signOut();
        showToast("회원 탈퇴가 완료 되었습니다.", "success");
        onConfirmButtonClick();
        sendNativeMessage({type: "vibrate"});
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
                        <Confirm.Title>회원탈퇴</Confirm.Title>
                        <Confirm.Description>
                            회원 탈퇴를 하면
                            <br /> 서버에서 보관중인
                            <br /> 모든 운동 정보가 삭제됩니다.
                            <br />
                            정말 탈퇴하시겠습니까?
                        </Confirm.Description>
                    </Confirm.ContentBox>
                    <Confirm.ButtonBox
                        cancelLabel="취소"
                        confirmLabel="삭제하기"
                        onCancelButtonClick={onCancelButtonClick}
                        onConfirmButtonClick={handleSignOutButtonClick}
                    />
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};

export default SignOutModal;
