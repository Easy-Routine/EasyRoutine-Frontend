import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import React from "react";

type ExerciseAddBottomSheetProps = {
    children: [React.ReactNode, React.ReactNode];
};

const ExerciseAddBottomSheet = ({
    children: [trigger, content],
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
