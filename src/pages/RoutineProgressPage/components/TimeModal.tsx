import Portal from "headless/Portal/Portal";
import DialogModal from "headful/DialogModal/DialogModal";
import {RoutineAllGetRes} from "types/routine";
import {useRoutineProgress} from "./RoutineProgressProvider";
import CompleteModalContent from "./CompleteModalContent";
import TimerModalContent from "./TimerModalContent";

type TimerModalProps = {
    children: React.ReactNode;
};

/*
    루틴 설정을 삭제하는 모달을 여는 버튼 
*/

const TimerModal = ({children}: TimerModalProps) => {
    const trigger = children;

    const {routine, routineHistory} = useRoutineProgress();

    const totalRoutineSets = routine.routineExercises.flatMap(
        exercise => exercise.sets,
    ).length;

    const totalHistorySets = routineHistory.routineExercises.flatMap(
        exercise => exercise.sets,
    ).length;

    const isRoutineCompleted = totalRoutineSets === totalHistorySets;

    const modalContent = isRoutineCompleted ? (
        <CompleteModalContent />
    ) : (
        <TimerModalContent />
    );

    return (
        <DialogModal>
            <div onClick={e => e.stopPropagation()}>
                {trigger}
                <Portal>
                    <DialogModal.Backdrop />
                    <DialogModal.Content>{modalContent}</DialogModal.Content>
                </Portal>
            </div>
        </DialogModal>
    );
};

export default TimerModal;
