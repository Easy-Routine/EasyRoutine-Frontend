import {useParams} from "react-router-dom";
import RoutineConfigGetContainer from "./components/RoutineConfigGetContainer";
import BottomSheetModal from "headful/BottomSheetModal/BottomSheetModal";
import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";
import {ReactComponent as PlusIcon} from "assets/image/plus.svg";
import WorkoutLibraryGetContainer from "./components/WorkoutLibraryGetContainer";

const RoutineConfigDetailPage = () => {
    const {routineConfigId} = useParams();

    return (
        <>
            <RoutineConfigGetContainer
                routineConfigId={routineConfigId as string}
            />
            <BottomSheetModal>
                <BottomSheetModal.Backdrop />
                <BottomSheetModal.Content>
                    <WorkoutLibraryGetContainer
                        routineConfigId={routineConfigId as string}
                    />
                </BottomSheetModal.Content>
                <BottomSheetModal.Trigger>
                    <FloatingCircleButton
                        width={64}
                        height={64}
                        onFloatingCircleButtonClick={() => {}}
                    >
                        <PlusIcon color={"var(--text-white)"} />
                    </FloatingCircleButton>
                </BottomSheetModal.Trigger>
            </BottomSheetModal>
        </>
    );
};

export default RoutineConfigDetailPage;
