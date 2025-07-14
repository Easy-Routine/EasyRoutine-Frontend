import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import BottomSheet from "headless/BottomSheet/BottomSheet";
import React from "react";

type ExerciseAddBottomSheetProps = {
    children: [React.ReactNode, React.ReactNode];
};

const ExerciseAddBottomSheet = ({
    children: [trigger, content],
}: ExerciseAddBottomSheetProps) => {
    return (
        <BottomSheet>
            {trigger}
            <BottomSheet.Content>{content}</BottomSheet.Content>
            <BottomSheet.Backdrop />
        </BottomSheet>
    );
};

export default ExerciseAddBottomSheet;
