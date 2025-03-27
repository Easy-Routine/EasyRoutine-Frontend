import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import React from "react";

type RoutineProgressCompleteModalTriggerProps = {
    children: React.ReactNode;
};

const RoutineProgressCompleteModalTrigger = ({
    children,
}: RoutineProgressCompleteModalTriggerProps) => {
    return (
        <ConfirmModal>
            <ConfirmModal.Trigger>{children}</ConfirmModal.Trigger>
        </ConfirmModal>
    );
};

export default RoutineProgressCompleteModalTrigger;
