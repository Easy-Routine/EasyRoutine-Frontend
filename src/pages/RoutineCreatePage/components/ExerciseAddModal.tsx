import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import React from "react";

type ExerciseAddModalProps = {
    children: [React.ReactNode, React.ReactNode];
};

const ExerciseAddModal = ({children}: ExerciseAddModalProps) => {
    const [trigger, content] = children;

    return (
        <BottomSheetModal>
            <BottomSheetModal.Trigger>{trigger}</BottomSheetModal.Trigger>
            <BottomSheetModal.Content>{content}</BottomSheetModal.Content>
            <BottomSheetModal.Backdrop />
        </BottomSheetModal>
    );
};

export default ExerciseAddModal;
