import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import {useRoutineProgress} from "../../RoutineProgressProvider";
import {RoutineExercise} from "types/model";
import {MouseEventHandler} from "react";

type RoutineExerciseDeleteButtonProps = {
    routineExercise: RoutineExercise;
};

const RoutineExerciseDeleteButton = ({
    routineExercise,
}: RoutineExerciseDeleteButtonProps) => {
    const {id} = routineExercise;

    const {routine, routineHistory, setRoutine, setRoutineHistory} =
        useRoutineProgress();

    const handleRoutineExerciseDeleteButtonClick: MouseEventHandler<
        HTMLDivElement
    > = e => {
        e.stopPropagation();
        // 루틴 설정 상태를 가져와서 깊은 복사를 해준다.
        const newRoutine = structuredClone(routine);
        const newRoutineHistory = structuredClone(routineHistory);

        const currentRE = newRoutine.routineExercises;
        const currentRHE = newRoutineHistory.routineExercises;
        // 새로운 루틴 상태로 업데이트 시켜준다.
        newRoutine.routineExercises = currentRE.filter(
            (routineExercise: RoutineExercise) => routineExercise.id !== id,
        );
        newRoutineHistory.routineExercises = currentRHE.filter(
            (routineExercise: RoutineExercise) => routineExercise.id !== id,
        );

        setRoutine(newRoutine);
        setRoutineHistory(newRoutineHistory);
    };

    return (
        <SwipeableAccordion.DeleteButton
            onClick={handleRoutineExerciseDeleteButtonClick}
        />
    );
};

export default RoutineExerciseDeleteButton;
