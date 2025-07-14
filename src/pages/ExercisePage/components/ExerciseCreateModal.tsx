import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import BottomSheet from "headless/BottomSheet/BottomSheet";
import React from "react";

type ExerciseCreateModalProps = {
    children: [React.ReactNode, React.ReactNode];
};

const ExerciseCreateModal = ({children}: ExerciseCreateModalProps) => {
    const [content, trigger] = children;

    return (
        <BottomSheet>
            <BottomSheet.Content>{content}</BottomSheet.Content>
            <BottomSheet.Backdrop />
            {trigger}
        </BottomSheet>
    );
};

export default ExerciseCreateModal;
