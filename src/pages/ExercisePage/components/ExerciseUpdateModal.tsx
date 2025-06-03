import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import React from "react";

type ExerciseUpdateModalProps = {
    children: [React.ReactNode, React.ReactNode];
};

const ExerciseUpdateModal = ({children}: ExerciseUpdateModalProps) => {
    const [content, trigger] = children;

    return (
        <BottomSheetModal>
            <BottomSheetModal.Content>{content}</BottomSheetModal.Content>
            <BottomSheetModal.Backdrop />
            {trigger}
        </BottomSheetModal>
    );
};

export default ExerciseUpdateModal;
