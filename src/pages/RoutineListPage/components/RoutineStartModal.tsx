import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import React from "react";
import Portal from "headless/Portal/Portal";
import DialogModal from "headful/DialogModal/DialogModal";

type RoutineStartModalProps = {
    children: [React.ReactElement, React.ReactElement];
};

const RoutineStartModal = ({children}: RoutineStartModalProps) => {
    const [trigger, content] = children;

    return (
        <DialogModal>
            <div
                onClick={e => {
                    e.stopPropagation();
                }}
            >
                <DialogModal.Trigger>{trigger}</DialogModal.Trigger>
                <Portal>
                    <DialogModal.Backdrop />
                    <DialogModal.Content>{content}</DialogModal.Content>
                </Portal>
            </div>
        </DialogModal>
    );
};

export default RoutineStartModal;
