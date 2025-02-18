import FlexBox from "headful/FlexBox/FlexBox";
import React, {MouseEventHandler} from "react";
import {ReactComponent as PenIcon} from "assets/image/pen.svg";
import Text from "headful/Text/Text";
import {useTheme} from "@emotion/react";
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
    const theme = useTheme();
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
                        <RunIcon color={theme.color.primary} />
                        <Text color={theme.color.primary}>루틴 시작하기</Text>
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
                                fontSize={theme.fontSize.xl}
                                fontWeight={theme.fontWeight.semibold}
                            >
                                루틴 진행
                            </Text>
                            <Text
                                fontSize={theme.fontSize.md}
                                textAlign="center"
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
