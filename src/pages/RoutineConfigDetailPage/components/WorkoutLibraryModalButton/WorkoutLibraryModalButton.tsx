import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";
import {ReactComponent as PlusIcon} from "assets/image/plus.svg";
import React from "react";
import WorkoutLibraryGetContainer from "./WorkoutLibraryGetContainer/WorkoutLibraryGetContainer";

type WorkoutLibraryModalButtonProps = {
    routineConfigId: string;
};

const WorkoutLibraryModalButton = ({
    routineConfigId,
}: WorkoutLibraryModalButtonProps) => {
    return (
        <BottomSheetModal>
            <BottomSheetModal.Trigger>
                <FloatingCircleButton
                    width={64}
                    height={64}
                    onFloatingCircleButtonClick={() => {}}
                >
                    <PlusIcon color={"var(--text-white)"} />
                </FloatingCircleButton>
            </BottomSheetModal.Trigger>

            <BottomSheetModal.Content>
                <WorkoutLibraryGetContainer
                    routineConfigId={routineConfigId as string}
                />
            </BottomSheetModal.Content>

            <BottomSheetModal.Backdrop />
        </BottomSheetModal>
    );
};

export default WorkoutLibraryModalButton;
