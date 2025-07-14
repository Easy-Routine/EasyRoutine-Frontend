import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import React from "react";
import {useExerciseUpdate} from "./ExerciseUpdateProvider";
import ExerciseDeleteConfirm from "./ExerciseDeleteConfirm";
import DialogModal from "headful/DialogModal/DialogModal";
import BottomSheet from "headless/BottomSheet/BottomSheet";

type ExerciseUpdateModalProps = {
    children: [React.ReactNode, React.ReactNode];
};

const ExerciseUpdateModal = ({children}: ExerciseUpdateModalProps) => {
    const [content, trigger] = children;
    const {mode} = useExerciseUpdate();

    return (
        <BottomSheet>
            {mode === "update" ? (
                <BottomSheet.Content>{content}</BottomSheet.Content>
            ) : (
                <BottomSheet.Content>
                    <ExerciseDeleteConfirm />
                </BottomSheet.Content>
            )}

            <BottomSheet.Backdrop />
            {trigger}
        </BottomSheet>
    );
};

export default ExerciseUpdateModal;
