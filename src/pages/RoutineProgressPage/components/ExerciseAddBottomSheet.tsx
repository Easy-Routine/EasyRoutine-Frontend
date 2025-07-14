import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import BottomSheet from "headless/BottomSheet/BottomSheet";
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
        <BottomSheet>
            <BottomSheet.Trigger>{trigger}</BottomSheet.Trigger>
            <BottomSheet.Content>{content}</BottomSheet.Content>
            <BottomSheet.Backdrop />
        </BottomSheet>
    );
};

export default ExerciseAddBottomSheet;
