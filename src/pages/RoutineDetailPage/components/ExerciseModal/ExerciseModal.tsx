import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import React from "react";

type ExerciseModalProps = {
    trigger: React.ReactNode;
    content: React.ReactNode;
};

const ExerciseModal = ({trigger, content}: ExerciseModalProps) => {
    return (
        <BottomSheetModal>
            <BottomSheetModal.Trigger>{trigger}</BottomSheetModal.Trigger>
            <BottomSheetModal.Content>{content}</BottomSheetModal.Content>
            <BottomSheetModal.Backdrop />
        </BottomSheetModal>
    );
};

export default ExerciseModal;
