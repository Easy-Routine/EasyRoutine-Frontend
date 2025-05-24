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
    const {id} = routineExercise;
    const {
        routineHistory,
        setRoutineHistory,
        routineProgress,
        currentWorkoutId,
        currentSetId,
        completedSetIds,
        routineExercises,
        sets,
        currentSet,
        currentRoutineExercise,
        setCompletedSetIds,
        setCurrentWorkoutId,
        setCurrentSetId,
        startTimer,
    } = useRoutineProgress();

    const {openModal} = useModal();

    const handleSetCompleteButtonClick: MouseEventHandler<
        HTMLButtonElement
    > = async e => {
        e.stopPropagation();
        // const isLastSetConfig =
        //     currentSetConfig.id === sets[sets.length - 1].id;

        // if (isLastSetConfig) {
        //     const currentWorkoutConfigIndex = routineExercises.findIndex(
        //         (routineExercise: WorkoutConfig) =>
        //             routineExercise.id === currentWorkoutConfig.id,
        //     );
        //     // 다음 운동이 존재한다면
        //     const nextWorkoutConfigIndex = currentWorkoutConfigIndex + 1;
        //     const hasNextWorkout =
        //         nextWorkoutConfigIndex < routineExercises.length;
        //     if (hasNextWorkout) {
        //         setCurrentWorkoutId(routineExercises[nextWorkoutConfigIndex].id);
        //     }
        // }

        // const totalSetIds = routineExercises.flatMap(routineExercise =>
        //     routineExercise.sets.map(set => set.id),
        // );

        // const newCompletedSetIds = structuredClone(completedSetIds);
        // // 완료된 세트 목록에 현재 세트를 추가한다.
        // newCompletedSetIds.push(currentSetId);
        // setCompletedSetIds(newCompletedSetIds);

        // // 현재 운동의 완료된 세트 목록을 구한다.
        // const currentWorkoutCompletedSetIds = currentSetIds.filter(id =>
        //     newCompletedSetIds.includes(id),
        // );

        // const currentSetIndex = currentWorkoutCompletedSetIds.length;

        // const newCurrentSetId = sets[currentSetIndex]?.id ?? "";

        // setCurrentSetId(newCurrentSetId);

        // // 여기부터 운동 기록

        // const newRoutineHistory = structuredClone(routineHistory);

        // if (!newRoutineHistory.id) {
        //     newRoutineHistory.id = uuidv4();
        //     newRoutineHistory.color = routineProgress.color;
        //     newRoutineHistory.name = routineProgress.name;
        //     newRoutineHistory.userId = routineProgress.userId;
        //     newRoutineHistory.routineExercises = [];
        // }

        // // 새로운 객체에 운동기록 배열에 현재 운동의 아이디가 있는지 탐색
        // let currentRoutineExercise = newRoutineHistory.routineExercises.find(
        //     (routineExercise: RoutineExercise) =>
        //         routineExercise.routineExerciseId === currentWorkoutId,
        // );
        // // 없으면
        // if (!currentRoutineExercise) {
        //     const newRoutineExercise = {
        //         id: uuidv4(),
        //         routineExerciseId: currentWorkoutId,
        //         createdAt: moment().toISOString(),
        //         updatedAt: moment().toISOString(),
        //         routineHistoryId: newRoutineHistory.id,
        //         sets: [],
        //         exercise: currentWorkoutConfig.exercise,
        //     };
        //     // 새로운 운동 기록 객체를 만들고 운동 기록 배열에 삽입
        //     newRoutineHistory.routineExercises.push(newRoutineExercise);
        //     currentRoutineExercise = newRoutineExercise;
        // }
        // // 있으면? 세트를 넣으면 되겠지?

        // // 현재 운동 객체의 세트 기록 배열에 현재 배열이 있는지 확인? 확인할 필요가 없지 왜냐하면 그냥 완료한걸 넣으면 되니까
        // let currentSet = currentRoutineExercise.sets.find(
        //     (set: Set) => set.setId === currentSetId,
        // );

        // // if (!currentSet) {
        // const newCurrentSet = {
        //     id: uuidv4(),
        //     setId: currentSetId,
        //     weight: currentSetConfig.weight,
        //     rep: currentSetConfig.rep,
        //     restSec: currentSetConfig.restSec,
        //     workoutSec: currentSetConfig.workoutSec,
        //     createdAt: moment().toISOString(),
        //     updatedAt: moment().toISOString(),
        //     routineExerciseId: currentRoutineExercise.id,
        // };
        // currentRoutineExercise.sets.push(newCurrentSet);
        // currentSet = newCurrentSet;
        // // }

        // setRoutineHistory(newRoutineHistory);

        // const isAllCompleted = totalSetIds.length === newCompletedSetIds.length;

        // startTimer(currentSetConfig?.restSec as number);
        // // 타이머 모달 열기
        // openModal();
    };

    const currentSetIds = sets.map(set => set.id);

    // 완료된 세트 배열(completedSetIds)에서 현재 세트 설정의 아이디배열과 겹치는 아이디를 구한다.
    const commonSetIds = currentSetIds.filter(id =>
        completedSetIds.includes(id),
    );

    const isWorkoutCompleted =
        commonSetIds?.length === currentRoutineExercise?.sets?.length;

    return (
        <BasicButton
            disabled={isWorkoutCompleted}
            onClick={handleSetCompleteButtonClick}
        >
            세트 완료
        </BasicButton>
    );
};

// type WithTimerModalProps<P extends object> = {
//     WrappedComponent: React.ComponentType<P>;
// };

function withModal<P extends object>(WrappedComponent: React.ComponentType<P>) {
    const WithModal: React.FC<P> = props => {
        const {isAllCompleted} = useRoutineProgress();

        const modalContent = isAllCompleted ? (
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
