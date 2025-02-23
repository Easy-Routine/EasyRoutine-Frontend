import FlexBox from "headful/FlexBox/FlexBox";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";
import {ReactComponent as RunIcon} from "assets/image/run.svg";
import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import ConfirmModalClose from "headful/ConfirmModal/ConfirmModalClose/ConfirmModalClose";
import CircleButton from "headful/CircleButton/CircleButton";
import {ReactComponent as FireIcon} from "assets/image/fire.svg";
import Portal from "headless/Portal/Portal";

type RoutineConfigProgressButtonButtonProps = {
    routineConfigName: string;
    routineConfigId: string;
};

const RoutineConfigProgressButton = ({
    routineConfigName,
    routineConfigId,
}: RoutineConfigProgressButtonButtonProps) => {
    const navigate = useNavigate();

    const handleRoutineProgressButtonClick: MouseEventHandler<
        HTMLDivElement
    > = e => {
        e.stopPropagation();
    };

    const handleRoutineProgressModalConfirmButtonClick = () => {
        navigate(ROUTES.PROGRESS.PATH(routineConfigId));
    };

    return (
        <ConfirmModal>
            <div onClick={handleRoutineProgressButtonClick}>
                <ConfirmModal.Trigger>
                    <FlexBox gap={16} alignItems="center">
                        <RunIcon color={"#82B1FF"} />
                        <Text color={"var(--color-primary)"}>
                            루틴 시작하기
                        </Text>
                    </FlexBox>
                </ConfirmModal.Trigger>
                <Portal>
                    <ConfirmModal.Backdrop />
                    <ConfirmModal.Content>
                        <FlexBox
                            padding={20}
                            flexDirection="column"
                            alignItems="center"
                            gap={20}
                        >
                            <CircleButton width={65} height={65}>
                                <FireIcon
                                    style={{
                                        color: "white",
                                        width: "30px",
                                        height: "30px",
                                    }}
                                />
                            </CircleButton>
                            <Text
                                fontSize={"var(--fontSize-xl)"}
                                fontWeight={"var(--fontWeight-semibold)"}
                                color={"var(--text-black)"}
                            >
                                루틴 진행
                            </Text>
                            <Text
                                fontSize={"var(--fontSize-md)"}
                                fontWeight={"var(--fontWeight-regular)"}
                                color={"var(--text-black)"}
                            >
                                '{routineConfigName}'으로
                                <br /> 운동을 시작하시겠습니까?
                            </Text>
                        </FlexBox>
                        <ConfirmModal.Close>
                            <ConfirmModalClose.Cancel>
                                취소
                            </ConfirmModalClose.Cancel>
                            <ConfirmModalClose.Confirm
                                onConfirmButtonClick={
                                    handleRoutineProgressModalConfirmButtonClick
                                }
                            >
                                확인
                            </ConfirmModalClose.Confirm>
                        </ConfirmModal.Close>
                    </ConfirmModal.Content>
                </Portal>
            </div>
        </ConfirmModal>
    );
};

export default RoutineConfigProgressButton;
