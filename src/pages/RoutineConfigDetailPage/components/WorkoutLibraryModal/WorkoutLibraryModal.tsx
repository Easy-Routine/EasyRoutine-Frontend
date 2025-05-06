import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import React from "react";

type WorkoutLibraryModalProps = {
    trigger: React.ReactNode;
    content: React.ReactNode;
};

const WorkoutLibraryModal = ({trigger, content}: WorkoutLibraryModalProps) => {
    return (
        <BottomSheetModal>
            <BottomSheetModal.Trigger>{trigger}</BottomSheetModal.Trigger>
            <BottomSheetModal.Content>{content}</BottomSheetModal.Content>
            <BottomSheetModal.Backdrop />
        </BottomSheetModal>
    );
};

export default WorkoutLibraryModal;
