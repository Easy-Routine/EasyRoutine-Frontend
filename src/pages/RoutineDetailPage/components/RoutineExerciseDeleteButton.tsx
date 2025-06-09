import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import {RoutineExercise} from "types/model";
import {MouseEventHandler} from "react";
import {useRoutineUpdate} from "./RoutineUpdateProvider";

type RoutineExerciseDeleteButtonProps = {
    routineExercise: RoutineExercise;
};

const RoutineExerciseDeleteButton = ({
    routineExercise,
}: RoutineExerciseDeleteButtonProps) => {
    const {id} = routineExercise;
    const {routine, setRoutine} = useRoutineUpdate();

    const handleRoutineExerciseDeleteButtonClick: MouseEventHandler<
        HTMLDivElement
    > = e => {
        e.stopPropagation();

        // 루틴 상태 깊은 복사
        const newRoutine = structuredClone(routine);
        let routineExercises = newRoutine.routineExercises;

        // 해당 ID를 제외
        routineExercises = routineExercises.filter(
            (routineExercise: RoutineExercise) => routineExercise.id !== id,
        );

        // order 재정렬
        routineExercises = routineExercises
            .sort((a: RoutineExercise, b: RoutineExercise) => a.order - b.order)
            .map((exercise: RoutineExercise, index: number) => ({
                ...exercise,
                order: index + 1,
            }));

        // 새로운 배열로 루틴 업데이트
        newRoutine.routineExercises = routineExercises;
        setRoutine(newRoutine);
    };

    return (
        <SwipeableAccordion.DeleteButton
            onClick={handleRoutineExerciseDeleteButtonClick}
        />
    );
};

export default RoutineExerciseDeleteButton;
