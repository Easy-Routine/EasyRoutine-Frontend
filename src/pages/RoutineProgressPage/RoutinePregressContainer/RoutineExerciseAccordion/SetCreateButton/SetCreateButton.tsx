import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import {ReactComponent as PlusIcon} from "assets/image/plus2.svg";
import {RoutineExercise} from "types/model";
import {useRoutineProgress} from "../../RoutineProgressProvider";

type SetCreateButtonButtonProps = {
    // sets: Set[];
    // onSetCreateButtonClick: (sets: Set[]) => void;
    routineExercise: RoutineExercise;
};

const SetCreateButton = ({
    routineExercise,
    // sets,
    // onSetCreateButtonClick,
}: SetCreateButtonButtonProps) => {
    const {id} = routineExercise;
    const {
        sets,
        completedSetIds,
        setCurrentSetId,
        routineProgress,
        setRoutineProgress,
        currentWorkoutId,
    } = useRoutineProgress();

    const handleSetCreateButtonClick: MouseEventHandler<
        HTMLDivElement
    > = async e => {
        e.stopPropagation();

        // const lastSetIndex = sets.length - 1;

        // // 세트 설정 배열에 새로운 세트 설정을 추가한다.
        // sets.push({
        //     id: uuidv4(),
        //     weight: sets[lastSetIndex]?.weight || 0,
        //     rep: sets[lastSetIndex]?.rep || 0,
        //     restSec: sets[lastSetIndex]?.restSec || 0,
        //     workoutSec: sets[lastSetIndex]?.restSec || 0,
        //     createdAt: moment().toISOString(),
        //     updatedAt: moment().toISOString(),
        //     routineExerciseId: "1",
        // });

        // console.log(sets, "sets");
        // console.log(completedSetIds, "completedSetIds");

        // // 현재 세트 설정(sets)에서 아이디 배열을 구한다.
        // const currentSetIds = sets.map(set => set.id);
        // // 완료된 세트 배열(completedSetIds)에서 현재 세트 설정의 아이디배열과 겹치는 아이디를 구한다.
        // const commonSetIds = currentSetIds.filter(id =>
        //     completedSetIds.includes(id),
        // );

        // setCurrentSetId(sets[commonSetIds.length].id);

        // const newRoutineProgress = structuredClone(routineProgress);

        // const currentRoutineExercise = newRoutineProgress.routineExercises.find(
        //     (routineExercise: RoutineExercise) =>
        //         routineExercise.id === currentWorkoutId,
        // ) as RoutineExercise;
        // // 선택된 운동 설정의 세트설정을 업데이트 시킵니다.
        // currentRoutineExercise.sets = sets;

        // setRoutineProgress(newRoutineProgress);

        // 완료된 세트보다 하나 더 많은 인덱스를 현재 세트로 지정한다.
        // setCurrentSetId(newSets[completedSetIds.length].id);
    };

    return (
        <FlexBox gap={16} align="center" onClick={handleSetCreateButtonClick}>
            <PlusIcon color={"var(--color-primary)"} />
            <Text color={"var(--color-primary)"}>세트 추가하기</Text>
        </FlexBox>
    );
};

export default SetCreateButton;
