import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import React from "react";

type ExerciseCreateModalProps = {
    children: [React.ReactNode, React.ReactNode];
};

const ExerciseCreateModal = ({children}: ExerciseCreateModalProps) => {
    const [content, trigger] = children;

    return (
        <BottomSheetModal>
            <BottomSheetModal.Content>{content}</BottomSheetModal.Content>
            <BottomSheetModal.Backdrop />
            {trigger}
        </BottomSheetModal>
    );
};

export default ExerciseCreateModal;
