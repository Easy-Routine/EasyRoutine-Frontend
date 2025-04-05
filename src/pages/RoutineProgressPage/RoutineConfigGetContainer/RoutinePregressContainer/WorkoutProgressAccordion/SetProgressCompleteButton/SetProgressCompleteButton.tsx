import BasicButton from "headful/BasicButton/BasicButton";
import {MouseEventHandler} from "react";
import {SetRecord, WorkoutConfig, WorkoutRecord} from "types/model";
import {useRoutineProgress} from "../../RoutineProgressProvider";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
import {useModal} from "headless/Modal/Modal";
import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import TimerModalContent from "../../TimerModalContent/TimerModalContent";
import CompleteModalContent from "../../CompleteModalContent/CompleteModalContent";

type SetProgressCompleteButtonProps = {};

const SetProgressCompleteButton = ({}: SetProgressCompleteButtonProps) => {
    const {
        routineRecord,
        setRoutineRecord,
        routineProgress,
        currentWorkoutId,
        currentSetId,
        completedSetIds,
        workoutConfigs,
        setConfigs,
        currentSetConfig,
        currentWorkoutConfig,
        setCompletedSetIds,
        setCurrentWorkoutId,
        setCurrentSetId,
        startTimer,
    } = useRoutineProgress();

    const {openModal} = useModal();

    const handleSetProgressCompleteButtonClick: MouseEventHandler<
        HTMLButtonElement
    > = async e => {
        e.stopPropagation();
        const isLastSetConfig =
            currentSetConfig._id === setConfigs[setConfigs.length - 1]._id;

        if (isLastSetConfig) {
            const currentWorkoutConfigIndex = workoutConfigs.findIndex(
                (workoutConfig: WorkoutConfig) =>
                    workoutConfig._id === currentWorkoutConfig._id,
            );
            // 다음 운동이 존재한다면
            const nextWorkoutConfigIndex = currentWorkoutConfigIndex + 1;
            const hasNextWorkout =
                nextWorkoutConfigIndex < workoutConfigs.length;
            if (hasNextWorkout) {
                setCurrentWorkoutId(workoutConfigs[nextWorkoutConfigIndex]._id);
            }
        }

        const totalSetIds = workoutConfigs.flatMap(workoutConfig =>
            workoutConfig.setConfigs.map(setConfig => setConfig._id),
        );

        const newCompletedSetIds = structuredClone(completedSetIds);
        // 완료된 세트 목록에 현재 세트를 추가한다.
        newCompletedSetIds.push(currentSetId);
        setCompletedSetIds(newCompletedSetIds);

        // 현재 운동의 완료된 세트 목록을 구한다.
        const currentWorkoutCompletedSetIds = currentSetIds.filter(id =>
            newCompletedSetIds.includes(id),
        );

        const currentSetIndex = currentWorkoutCompletedSetIds.length;

        const newCurrentSetId = setConfigs[currentSetIndex]?._id ?? "";

        setCurrentSetId(newCurrentSetId);

        // 여기부터 운동 기록

        const newRoutineRecord = structuredClone(routineRecord);

        if (!newRoutineRecord._id) {
            newRoutineRecord._id = uuidv4();
            newRoutineRecord.color = routineProgress.color;
            newRoutineRecord.name = routineProgress.name;
            newRoutineRecord.userId = routineProgress.userId;
            newRoutineRecord.workoutRecords = [];
        }

        // 새로운 객체에 운동기록 배열에 현재 운동의 아이디가 있는지 탐색
        let currentWorkoutRecord = newRoutineRecord.workoutRecords.find(
            (workoutRecord: WorkoutRecord) =>
                workoutRecord.workoutConfigId === currentWorkoutId,
        );
        // 없으면
        if (!currentWorkoutRecord) {
            const newWorkoutRecord = {
                _id: uuidv4(),
                workoutConfigId: currentWorkoutId,
                createdAt: moment().toISOString(),
                updatedAt: moment().toISOString(),
                routineRecordId: newRoutineRecord._id,
                setRecords: [],
                workoutLibrary: currentWorkoutConfig.workoutLibrary,
            };
            // 새로운 운동 기록 객체를 만들고 운동 기록 배열에 삽입
            newRoutineRecord.workoutRecords.push(newWorkoutRecord);
            currentWorkoutRecord = newWorkoutRecord;
        }
        // 있으면? 세트를 넣으면 되겠지?

        // 현재 운동 객체의 세트 기록 배열에 현재 배열이 있는지 확인? 확인할 필요가 없지 왜냐하면 그냥 완료한걸 넣으면 되니까
        let currentSetRecord = currentWorkoutRecord.setRecords.find(
            (setRecord: SetRecord) => setRecord.setConfigId === currentSetId,
        );

        // if (!currentSetRecord) {
        const newCurrentSetRecord = {
            _id: uuidv4(),
            setConfigId: currentSetId,
            weight: currentSetConfig.weight,
            rep: currentSetConfig.rep,
            restSec: currentSetConfig.restSec,
            workoutSec: currentSetConfig.workoutSec,
            createdAt: moment().toISOString(),
            updatedAt: moment().toISOString(),
            workoutRecordId: currentWorkoutRecord._id,
        };
        currentWorkoutRecord.setRecords.push(newCurrentSetRecord);
        currentSetRecord = newCurrentSetRecord;
        // }

        setRoutineRecord(newRoutineRecord);

        const isAllCompleted = totalSetIds.length === newCompletedSetIds.length;

        startTimer(currentSetConfig?.restSec as number);
        // 타이머 모달 열기
        openModal();
    };

    const currentSetIds = setConfigs.map(setConfig => setConfig._id);

    // 완료된 세트 배열(completedSetIds)에서 현재 세트 설정의 아이디배열과 겹치는 아이디를 구한다.
    const commonSetIds = currentSetIds.filter(id =>
        completedSetIds.includes(id),
    );

    const isWorkoutCompleted =
        commonSetIds?.length === currentWorkoutConfig?.setConfigs?.length;

    return (
        <BasicButton
            disabled={isWorkoutCompleted}
            onClick={handleSetProgressCompleteButtonClick}
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

export default withModal(SetProgressCompleteButton);
