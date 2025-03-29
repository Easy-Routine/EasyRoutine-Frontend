import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import {ReactComponent as MinusIcon} from "assets/image/minus.svg";
import {SetConfig, WorkoutConfig, WorkoutRecord} from "types/model";
import useDeleteSetRecordOneMutation from "hooks/server/useDeleteSetRecordOneMutation";
import {useRoutineProgress} from "../../RoutineProgressProvider";

type SetProgressDeleteButtonProps = {};

const SetProgressDeleteButton = ({}: SetProgressDeleteButtonProps) => {
    const {mutateAsync: deleteSetRecordOneMutate} =
        useDeleteSetRecordOneMutation();
    const {
        setConfigs,
        completedSetIds,
        setCompletedSetIds,
        routineProgress,
        currentWorkoutId,
        currentSetId,
        setRoutineProgress,
        routineRecord,
        setRoutineRecord,
    } = useRoutineProgress();

    const handleSetDeleteButtonClick: MouseEventHandler<
        HTMLDivElement
    > = async e => {
        e.stopPropagation();

        const newRoutineProgress = structuredClone(routineProgress);
        const currentWorkoutConfig = newRoutineProgress.workoutConfigs.find(
            (workoutConfig: WorkoutConfig) =>
                workoutConfig._id === currentWorkoutId,
        ) as WorkoutConfig;

        const {setConfigs} = currentWorkoutConfig;

        const newSetConfigs = structuredClone(setConfigs);
        const poppedSetConfig = newSetConfigs.pop() as SetConfig;

        currentWorkoutConfig.setConfigs = newSetConfigs;

        const filteredCompletedSetIds = completedSetIds.filter(
            _id => _id !== poppedSetConfig._id,
        );

        setCompletedSetIds(filteredCompletedSetIds);
        setRoutineProgress(newRoutineProgress);

        const isSetRecordExist = completedSetIds.includes(poppedSetConfig._id);

        // 완료된 세트 목록에서 현재 운동의 세트목록에서 꺼낸 아이디가 있다면
        if (isSetRecordExist) {
            // await deleteSetRecordOneMutate({
            //     routineRecordId: routineProgress._id,
            //     workoutRecordId: currentWorkoutId,
            // });

            const newRoutineRecord = structuredClone(routineRecord);

            // 루틴 기록의 운동 목록에서 현재 아이디의 운동을 선택한다.(객체의 주소는 동일하다.)
            const currentWorkoutRecord = newRoutineRecord.workoutRecords.find(
                workoutRecord =>
                    workoutRecord.workoutConfigId === currentWorkoutId,
            ) as WorkoutRecord;

            // 선택한 운동에서 꺼낸 운동의 아이디를 필터링한다.
            const newSetRecords = currentWorkoutRecord.setRecords.filter(
                setRecord => setRecord.setConfigId !== poppedSetConfig._id,
            );
            // 현재 운동에 새롭게 만든 배열을 할당한다.
            currentWorkoutRecord.setRecords = newSetRecords;

            setRoutineRecord(newRoutineRecord);
        }

        // console.log("루틴 기록", routineRecord);
    };

    return (
        <FlexBox
            gap={16}
            alignItems="center"
            onClick={handleSetDeleteButtonClick}
        >
            <MinusIcon color={"var(--color-gray-dark)"} />
            <Text color={"var(--color-gray-dark)"}>세트 삭제하기</Text>
        </FlexBox>
    );
};

export default SetProgressDeleteButton;
