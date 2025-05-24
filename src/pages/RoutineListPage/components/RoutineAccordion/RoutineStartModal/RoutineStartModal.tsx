import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import React from "react";
import Portal from "headless/Portal/Portal";

type RoutineStartModalProps = {
    trigger: React.ReactNode;
    content: React.ReactNode;
};

const RoutineStartModal = ({trigger, content}: RoutineStartModalProps) => {
    return (
        <ConfirmModal>
            <div
                onClick={e => {
                    e.stopPropagation();
                }}
            >
                <ConfirmModal.Trigger>
                    {trigger}
                    {/* <Flex gap={16} align="center">
                        <RunIcon color={"#82B1FF"} />
                        <Text color={"var(--color-primary)"}>
                            루틴 시작하기
                        </Text>
                    </Flex> */}
                </ConfirmModal.Trigger>
                <Portal>
                    <ConfirmModal.Backdrop />
                    <ConfirmModal.Content>
                        {content}
                        {/* <RoutineStartModalContent
                            routine={routine}
                        /> */}
                    </ConfirmModal.Content>
                </Portal>
            </div>
        </ConfirmModal>
    );
};

export default RoutineStartModal;
