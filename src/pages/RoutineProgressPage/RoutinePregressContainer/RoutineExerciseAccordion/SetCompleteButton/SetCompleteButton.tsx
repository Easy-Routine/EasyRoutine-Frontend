import BasicButton from "headful/BasicButton/BasicButton";
import {MouseEventHandler} from "react";
import {Set, RoutineExercise} from "types/model";
import {useRoutineProgress} from "../../RoutineProgressProvider";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
import {useModal} from "headless/Modal/Modal";
import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import TimerModalContent from "../../TimerModalContent/TimerModalContent";
import CompleteModalContent from "../../CompleteModalContent/CompleteModalContent";

type SetCompleteButtonProps = {
    routineExercise: RoutineExercise;
};

const SetCompleteButton = ({routineExercise}: SetCompleteButtonProps) => {
    const currentRE = routineExercise;
    const {routineHistory, setRoutineHistory, routine, startTimer} =
        useRoutineProgress();

    const {openModal} = useModal();

    const handleSetCompleteButtonClick: MouseEventHandler<
        HTMLButtonElement
    > = async e => {
        e.stopPropagation();

        // 운동 기록 상태를 가져와서 객체를 복사한다.
        const newRoutineHistory = structuredClone(routineHistory);
        const currentRHE = newRoutineHistory.routineExercises.find(
            (re: RoutineExercise) => re.id === currentRE.id,
        );

        if (currentRHE) {
            // 현재 운동 기록의 세트 배열 길이에 해당하는 인덱스의 세트 설정을 푸쉬한다.
            const currentRHESetLength = currentRHE.sets.length;
            const currentRESet = currentRE.sets[currentRHESetLength];
            currentRHE.sets.push(currentRESet);
        } else {
            const REFirstSet = currentRE.sets[0];

            newRoutineHistory.routineExercises.push({
                id: currentRE.id,
                exercise: currentRE.exercise,
                sets: [REFirstSet],
            });
        }

        setRoutineHistory(newRoutineHistory);

        // 현재 세트를 기록에 추가한다.
    };

    const currentRHE = routineHistory.routineExercises.find(
        (re: RoutineExercise) => re.id === currentRE.id,
    );
    const RHESetLength = currentRHE ? currentRHE.sets.length : 0;
    const RESetLength = currentRE.sets.length;
    const isRoutineExerciseCompleted = RHESetLength === RESetLength;

    return (
        <BasicButton
            disabled={isRoutineExerciseCompleted}
            onClick={handleSetCompleteButtonClick}
        >
            세트 완료
        </BasicButton>
    );
};

function withModal<P extends object>(WrappedComponent: React.ComponentType<P>) {
    const WithModal: React.FC<P> = props => {
        // const {isAllCompleted} = useRoutineProgress();

        const modalContent = false ? (
            <CompleteModalContent />
        ) : (
            <TimerModalContent />
        );

        return (
            <ConfirmModal>
                <ConfirmModal.Backdrop />
                <ConfirmModal.Content>{modalContent}</ConfirmModal.Content>
                <WrappedComponent {...props} />
            </ConfirmModal>
        );
    };

    return WithModal;
}

export default withModal(SetCompleteButton);
