import CircleButton from "headful/CircleButton/CircleButton";
import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import FlexBox from "headful/Flex/Flex";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import {ReactComponent as TrashIcon} from "assets/image/trash.svg";
import Text from "headful/Text/Text";
import ConfirmModalClose from "headful/ConfirmModal/ConfirmModalClose/ConfirmModalClose";
import Portal from "headless/Portal/Portal";
import RoutineDeleteButton from "./RoutineDeleteButton/RoutineDeleteButton";
import {Routine} from "types/model";

type RoutineDeleteModalButtonProps = {
    routine: Routine;
};

/*
    루틴 설정을 삭제하는 모달을 여는 버튼 
*/

const RoutineDeleteModalButton = ({routine}: RoutineDeleteModalButtonProps) => {
    const {name} = routine;

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
                            direction="column"
                            align="center"
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
                                size={"var(--fontSize-xl)"}
                                weight={"var(--fontWeight-semibold)"}
                                color={"var(--text-black)"}
                            >
                                루틴 삭제
                            </Text>
                            <Text
                                size={"var(--fontSize-md)"}
                                weight={"var(--fontWeight-regular)"}
                                color={"var(--text-black)"}
                                align="center"
                            >
                                '{name}'을
                                <br /> 삭제하시겠습니까?
                            </Text>
                        </FlexBox>
                        <ConfirmModal.Close>
                            <ConfirmModalClose.Cancel>
                                취소
                            </ConfirmModalClose.Cancel>
                            <RoutineDeleteButton routine={routine} />
                        </ConfirmModal.Close>
                    </ConfirmModal.Content>
                </Portal>
            </div>
        </ConfirmModal>
    );
};

export default RoutineDeleteModalButton;
