import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import React from "react";

type RoutineExerciseSelectBottomSheetProps = {
    children: [React.ReactNode, React.ReactNode];
};

const RoutineExerciseSelectBottomSheet = ({
    children,
}: RoutineExerciseSelectBottomSheetProps) => {
    const [content, trigger] = children;

    return (
        <BottomSheetModal>
            <BottomSheetModal.Content>{content}</BottomSheetModal.Content>
            <BottomSheetModal.Backdrop />
            {trigger}
        </BottomSheetModal>
    );
};

export default RoutineExerciseSelectBottomSheet;
