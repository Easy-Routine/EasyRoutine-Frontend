import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import React from "react";

type ExerciseAddBottomSheetProps = {
    trigger: React.ReactNode;
    content: React.ReactNode;
};

const ExerciseAddBottomSheet = ({
    trigger,
    content,
}: ExerciseAddBottomSheetProps) => {
    return (
        <BottomSheetModal>
            <BottomSheetModal.Trigger>{trigger}</BottomSheetModal.Trigger>
            <BottomSheetModal.Content>{content}</BottomSheetModal.Content>
            <BottomSheetModal.Backdrop />
        </BottomSheetModal>
    );
};

export default ExerciseAddBottomSheet;
