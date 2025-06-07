import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import {ReactComponent as MinusIcon} from "assets/image/minus.svg";
import {RoutineExercise} from "types/model";
import {useRoutineCreate} from "./RoutineCreateProvider";

type SetDeleteButtonProps = {
    routineExercise: RoutineExercise;
};

const SetDeleteButton = ({routineExercise}: SetDeleteButtonProps) => {
    const {id} = routineExercise;
    const {routine, setRoutine} = useRoutineCreate();

    const handleSetDeleteButtonClick: MouseEventHandler<
        HTMLDivElement
    > = async e => {
        e.stopPropagation();

        // 루틴 설정 상태를 가져와서 깊은 복사를 해준다.
        const newRoutine = structuredClone(routine);
        // 운동 설정 상태의 아이디를 이용하여 해당 운동을 찾는다.
        const routineExercises = newRoutine.routineExercises;
        const foundRoutineExercise = routineExercises.find(
            (routineExercise: RoutineExercise) => routineExercise.id === id,
        ) as RoutineExercise;
        // 세트 설정 배열에서 마지막 요소를 제거한다.
        const sets = foundRoutineExercise.sets;
        sets.pop();

        // 새로운 루틴 상태로 업데이트 시켜준다.
        setRoutine(newRoutine);
    };

    return (
        <FlexBox gap={16} align="center" onClick={handleSetDeleteButtonClick}>
            <MinusIcon color={"var(--color-gray-dark)"} />
            <Text color={"var(--color-gray-dark)"}>세트 삭제하기</Text>
        </FlexBox>
    );
};

export default SetDeleteButton;
