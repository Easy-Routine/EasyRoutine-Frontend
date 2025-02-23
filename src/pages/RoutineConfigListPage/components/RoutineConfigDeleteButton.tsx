import CircleButton from "headful/CircleButton/CircleButton";
import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import FlexBox from "headful/FlexBox/FlexBox";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import {ReactComponent as TrashIcon} from "assets/image/trash.svg";
import Text from "headful/Text/Text";
import ConfirmModalClose from "headful/ConfirmModal/ConfirmModalClose/ConfirmModalClose";
import useDeleteRoutineConfigOneMutation from "hooks/server/useDeleteRoutineConfigOneMutation";
import Portal from "headless/Portal/Portal";

type RoutineConfigDeleteButtonProps = {
    routineConfigName: string;
    routineConfigId: string;
};

const RoutineConfigDeleteButton = ({
    routineConfigName,
    routineConfigId,
}: RoutineConfigDeleteButtonProps) => {
    const {mutateAsync: deleteRoutineConfigOne} =
        useDeleteRoutineConfigOneMutation();

    const handleRoutineConfigDeleteButtonClick = async () => {
        await deleteRoutineConfigOne(routineConfigId);
    };

    return (
        <ConfirmModal>
            <div onClick={e => e.stopPropagation()}>
                <ConfirmModal.Trigger>
                    <SwipeableAccordion.DeleteButton />
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
                                <TrashIcon
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
                                루틴 삭제
                            </Text>
                            <Text
                                fontSize={"var(--fontSize-md)"}
                                fontWeight={"var(--fontWeight-regular)"}
                                color={"var(--text-black)"}
                                textAlign="center"
                            >
                                '{routineConfigName}'을
                                <br /> 삭제하시겠습니까?
                            </Text>
                        </FlexBox>
                        <ConfirmModal.Close>
                            <ConfirmModalClose.Cancel>
                                취소
                            </ConfirmModalClose.Cancel>
                            <ConfirmModalClose.Confirm
                                onConfirmButtonClick={
                                    handleRoutineConfigDeleteButtonClick
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

export default RoutineConfigDeleteButton;
