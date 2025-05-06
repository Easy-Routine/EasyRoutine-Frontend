import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import React from "react";
import Portal from "headless/Portal/Portal";

type RoutineConfigStartModalProps = {
    trigger: React.ReactNode;
    content: React.ReactNode;
};

const RoutineConfigStartModal = ({
    trigger,
    content,
}: RoutineConfigStartModalProps) => {
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
                        {/* <RoutineConfigStartModalContent
                            routineConfig={routineConfig}
                        /> */}
                    </ConfirmModal.Content>
                </Portal>
            </div>
        </ConfirmModal>
    );
};

export default RoutineConfigStartModal;
