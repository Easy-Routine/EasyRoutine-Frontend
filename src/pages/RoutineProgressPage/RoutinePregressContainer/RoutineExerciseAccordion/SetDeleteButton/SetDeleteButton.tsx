import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import {ReactComponent as MinusIcon} from "assets/image/minus.svg";
import {Set, RoutineExercise} from "types/model";
import {useRoutineProgress} from "../../RoutineProgressProvider";

type SetDeleteButtonProps = {
    routineExercise: RoutineExercise;
};

const SetDeleteButton = ({routineExercise}: SetDeleteButtonProps) => {
    const {id} = routineExercise;
    const {
        sets,
        completedSetIds,
        setCompletedSetIds,
        routineProgress,
        currentWorkoutId,
        currentSetId,
        setRoutineProgress,
        routineHistory,
        setRoutineHistory,
    } = useRoutineProgress();

    const handleSetDeleteButtonClick: MouseEventHandler<
        HTMLDivElement
    > = async e => {
        e.stopPropagation();

        // const newRoutineProgress = structuredClone(routineProgress);
        // const currentWorkoutConfig = newRoutineProgress.routineExercises.find(
        //     (routineExercise: WorkoutConfig) =>
        //         routineExercise.id === currentWorkoutId,
        // ) as WorkoutConfig;

        // const {sets} = currentWorkoutConfig;

        // const newSetConfigs = structuredClone(sets);
        // const poppedSetConfig = newSetConfigs.pop() as SetConfig;

        // currentWorkoutConfig.sets = newSetConfigs;

        // const filteredCompletedSetIds = completedSetIds.filter(
        //     id => id !== poppedSetConfig.id,
        // );

        // setCompletedSetIds(filteredCompletedSetIds);
        // setRoutineProgress(newRoutineProgress);

        // const isSetExist = completedSetIds.includes(poppedSetConfig.id);

        // // 완료된 세트 목록에서 현재 운동의 세트목록에서 꺼낸 아이디가 있다면
        // if (isSetExist) {
        //     // await deleteSetOneMutate({
        //     //     routineHistoryId: routineProgress.id,
        //     //     routineExerciseId: currentWorkoutId,
        //     // });

        //     const newRoutineHistory = structuredClone(routineHistory);

        //     // 루틴 기록의 운동 목록에서 현재 아이디의 운동을 선택한다.(객체의 주소는 동일하다.)
        //     const currentRoutineExercise = newRoutineHistory.routineExercises.find(
        //         (routineExercise: RoutineExercise) =>
        //             routineExercise.routineExerciseId === currentWorkoutId,
        //     ) as RoutineExercise;

        //     // 선택한 운동에서 꺼낸 운동의 아이디를 필터링한다.
        //     const newSets = currentRoutineExercise.sets.filter(
        //         set => set.setId !== poppedSetConfig.id,
        //     );
        //     // 현재 운동에 새롭게 만든 배열을 할당한다.
        //     currentRoutineExercise.sets = newSets;

        //     setRoutineHistory(newRoutineHistory);
        // }

        // console.log("루틴 기록", routineHistory);
    };

    return (
        <FlexBox gap={16} align="center" onClick={handleSetDeleteButtonClick}>
            <MinusIcon color={"var(--color-gray-dark)"} />
            <Text color={"var(--color-gray-dark)"}>세트 삭제하기</Text>
        </FlexBox>
    );
};

export default SetDeleteButton;
