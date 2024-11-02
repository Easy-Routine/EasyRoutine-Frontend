import Modal from "components/box/Modal/Modal";
import Confirm from "components/content/Confirm/Confirm";
import { ReactComponent as RunIcon } from "assets/image/run.svg";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "constants/routes";
import useToast from "hooks/useToast";
import useGetRoutineConfigOneQuery from "hooks/server/useGetRoutineConfigOneQuery";

type RoutineProgressModalProps = {
    routineConfigId: string;
    isOpen: boolean;
    onBackdropClick: () => void;
    onCancelButtonClick: () => void;
    onConfirmButtonClick: () => void;
};

const RoutineConfigProgressModal = ({
    routineConfigId,
    isOpen,
    onBackdropClick,
    onCancelButtonClick,
    onConfirmButtonClick,
}: RoutineProgressModalProps) => {
    const navigate = useNavigate();
    const { showToast } = useToast();

    const { data: routineConfigOneData } =
        useGetRoutineConfigOneQuery(routineConfigId);

    const routineConfigOne = routineConfigOneData ?? { name: "", _id: "" };

    const handleRoutineProgressButtonClick = () => {
        // TODO: API 호출
        showToast("루틴이 시작되었습니다.", "success");
        onConfirmButtonClick();
        navigate(ROUTES.PROGRESS.PATH(routineConfigOne._id));
    };

    return (
        <Modal>
            <Modal.Backdrop isOpen={isOpen} onBackdropClick={onBackdropClick} />
            <Modal.Content isOpen={isOpen}>
                <Confirm>
                    <Confirm.ContentBox>
                        <Confirm.IconBox>
                            <RunIcon
                                style={{
                                    color: "white",
                                    width: "28px",
                                    height: "40px",
                                }}
                            />
                        </Confirm.IconBox>
                        <Confirm.Title>루틴 진행</Confirm.Title>
                        <Confirm.Description>
                            '{routineConfigOne.name}'으로
                            <br /> 운동을 시작하시겠습니까?
                        </Confirm.Description>
                    </Confirm.ContentBox>
                    <Confirm.ButtonBox
                        cancelLabel="취소"
                        confirmLabel="시작하기"
                        onCancelButtonClick={onCancelButtonClick}
                        onConfirmButtonClick={handleRoutineProgressButtonClick}
                    />
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};

export default RoutineConfigProgressModal;
