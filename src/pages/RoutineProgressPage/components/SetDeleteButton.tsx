import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import {ReactComponent as MinusIcon} from "assets/image/minus.svg";
import {RoutineExercise} from "types/model";
import {useRoutineProgress} from "./RoutineProgressProvider";

type SetDeleteButtonProps = {
    routineExercise: RoutineExercise;
};

const SetDeleteButton = ({routineExercise}: SetDeleteButtonProps) => {
    const {routine, setRoutine, routineHistory, setRoutineHistory} =
        useRoutineProgress();

    const handleSetDeleteButtonClick: MouseEventHandler<HTMLDivElement> = e => {
        e.stopPropagation();

        // 1) 원본이 아닌 복사본을 먼저 만들고…
        const newRoutine = structuredClone(routine);
        const newRoutineHistory = structuredClone(routineHistory);

        // 2) 복사본에서 해당 운동(RoutineExercise)을 찾아서
        const targetRE = newRoutine.routineExercises.find(
            (re: RoutineExercise) => re.id === routineExercise.id,
        );
        const targetRHE = newRoutineHistory.routineExercises.find(
            (re: RoutineExercise) => re.id === routineExercise.id,
        );

        if (!targetRE) return; // 혹시 못 찾으면 리턴

        // 3) 원본이 아닌, 복사본의 sets 배열을 조작
        if (targetRE.sets.length > (targetRHE?.sets.length ?? 0)) {
            targetRE.sets.pop();
        } else {
            // sets 길이가 같으면 복사본에서도 둘 다 삭제
            targetRE.sets.pop();
            targetRHE?.sets.pop();
        }

        // 4) state 업데이트
        setRoutine(newRoutine);
        setRoutineHistory(newRoutineHistory);
    };

    return (
        <FlexBox gap={16} align="center" onClick={handleSetDeleteButtonClick}>
            <MinusIcon color={"var(--color-gray-dark)"} />
            <Text color={"var(--color-gray-dark)"}>세트 삭제하기</Text>
        </FlexBox>
    );
};

export default SetDeleteButton;
