import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import {ReactComponent as PlusIcon} from "assets/image/plus2.svg";
import {useRoutineUpdateParams} from "../../RoutineUpdateParamsProvider/RoutineUpdateParamsProvider";
import {v4 as uuid} from "uuid";
import {Exercise, RoutineExercise, Set} from "types/model";

type SetCreateButtonButtonProps = {
    routineExercise: RoutineExercise;
};

const SetCreateButton = ({routineExercise}: SetCreateButtonButtonProps) => {
    const {id} = routineExercise;
    const {routine, setRoutine} = useRoutineUpdateParams();

    const handleSetCreateButtonClick: MouseEventHandler<
        HTMLDivElement
    > = async e => {
        e.stopPropagation();
        // 루틴 설정 상태를 가져와서 깊은 복사를 해준다.
        const newRoutine = structuredClone(routine);
        // 운동 설정 상태의 아이디를 이용하여 해당 운동을 찾는다.
        const routineExercises = newRoutine.routineExercises;
        const foundRoutineExercise = routineExercises.find(
            routineExercise => routineExercise.id === id,
        ) as RoutineExercise;
        // 세트 설정 배열에서 요소를 추가한다.

        const sets = foundRoutineExercise.sets;
        const {type} = foundRoutineExercise.exercise;
        const last = sets[sets.length - 1] as Set | undefined;

        // 4) timestamp
        const now = new Date().toISOString();

        const newSet: Set = {
            id: uuid(),
            // optional fields: 이전 값이 있으면 그걸, 없으면 0
            ...(type.includes("weight") && {weight: last?.weight ?? 0}),

            // exercise.type 에 "rep" 가 있고, last.rep 가 있을 때만 포함
            ...(type.includes("rep") && {rep: last?.rep ?? 0}),

            // exercise.type 에 "workoutSec" 가 있고, last.workoutSec 가 있을 때만 포함
            ...(type.includes("workoutSec") && {
                workoutSec: last?.workoutSec ?? 0,
            }),
            // required field: 역시 이전 값이 있으면 그걸, 없으면 0
            restSec: last?.restSec ?? 0,
        };

        // 6) 배열에 추가
        sets.push(newSet);

        // 새로운 루틴 상태로 업데이트 시켜준다.
        setRoutine(newRoutine);
    };

    return (
        <FlexBox gap={16} align="center" onClick={handleSetCreateButtonClick}>
            <PlusIcon color={"var(--color-primary)"} />
            <Text color={"var(--color-primary)"}>세트 추가하기</Text>
        </FlexBox>
    );
};

export default SetCreateButton;
