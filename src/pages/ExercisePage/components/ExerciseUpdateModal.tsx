import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import React from "react";
import {useExerciseUpdate} from "./ExerciseUpdateProvider";
import ExerciseDeleteConfirm from "./ExerciseDeleteConfirm";
import DialogModal from "headful/DialogModal/DialogModal";

type ExerciseUpdateModalProps = {
    children: [React.ReactNode, React.ReactNode];
};

const ExerciseUpdateModal = ({children}: ExerciseUpdateModalProps) => {
    const [content, trigger] = children;
    const {mode} = useExerciseUpdate();

    return (
        <BottomSheetModal>
            {mode === "update" ? (
                <BottomSheetModal.Content>{content}</BottomSheetModal.Content>
            ) : (
                <DialogModal.Content>
                    <ExerciseDeleteConfirm />
                </DialogModal.Content>
            )}

            <BottomSheetModal.Backdrop />
            {trigger}
        </BottomSheetModal>
    );
};

export default ExerciseUpdateModal;
