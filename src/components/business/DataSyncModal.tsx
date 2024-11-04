import Modal from "components/box/Modal/Modal";
import Confirm from "components/content/Confirm/Confirm";
import { ReactComponent as ClockIcon } from "assets/image/clock.svg";
import LoadingCircle from "components/content/LoadingCircle/LoadingCircle";

type DataSyncModalProps = {
    isOpen: boolean;
    // onCancelButtonClick: () => void;
    // onConfirmButtonClick: () => void;
};

const DataSyncModal = ({
    isOpen,
    // onCancelButtonClick,
    // onConfirmButtonClick,
}: DataSyncModalProps) => {
    // const { showToast } = useToast();

    return (
        <Modal>
            <Modal.Backdrop isOpen={isOpen} onBackdropClick={() => {}} />
            <Modal.Content isOpen={isOpen}>
                <Confirm>
                    <Confirm.ContentBox>
                        <LoadingCircle />
                        <Confirm.Title>데이터 동기화</Confirm.Title>
                        <Confirm.Description>
                            데이터를 동기화하는 중입니다. <br />
                            잠시만 기다려주세요.
                        </Confirm.Description>
                    </Confirm.ContentBox>
                    {/* <Confirm.ButtonBox
                        cancelLabel="취소"
                        confirmLabel="삭제하기"
                        onCancelButtonClick={onCancelButtonClick}
                        onConfirmButtonClick={() =>
                            handleRoutineConfigDeleteButtonClick(
                                routineConfigId
                            )
                        }
                    /> */}
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};

export default DataSyncModal;
