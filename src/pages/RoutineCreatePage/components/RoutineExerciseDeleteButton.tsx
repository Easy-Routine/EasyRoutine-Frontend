import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import {RoutineExercise} from "types/model";
import {MouseEventHandler} from "react";
import {useRoutineCreate} from "./RoutineCreateProvider";

type RoutineExerciseDeleteButtonProps = {
    routineExercise: RoutineExercise;
};

const RoutineExerciseDeleteButton = ({
    routineExercise,
}: RoutineExerciseDeleteButtonProps) => {
    const {id} = routineExercise;
    const {routine, setRoutine} = useRoutineCreate();

    const handleRoutineExerciseDeleteButtonClick: MouseEventHandler<
        HTMLDivElement
    > = e => {
        e.stopPropagation();
        // 루틴 설정 상태를 가져와서 깊은 복사를 해준다.
        const newRoutine = structuredClone(routine);
        const routineExercises = newRoutine.routineExercises;
        // 새로운 루틴 상태로 업데이트 시켜준다.
        newRoutine.routineExercises = routineExercises.filter(
            (routineExercise: RoutineExercise) => routineExercise.id !== id,
        );
        setRoutine(newRoutine);
    };

    return (
        <SwipeableAccordion.DeleteButton
            onClick={handleRoutineExerciseDeleteButtonClick}
        />
    );
};

export default RoutineExerciseDeleteButton;
