import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import {RoutineExercise} from "types/model";
import {MouseEventHandler} from "react";
import {useRoutineProgress} from "./RoutineProgressProvider";

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

        // 루틴 상태 깊은 복사
        const newRoutine = structuredClone(routine);
        const newRoutineHistory = structuredClone(routineHistory);

        // 현재 운동 배열 복사
        let currentRE = newRoutine.routineExercises;
        let currentRHE = newRoutineHistory.routineExercises;

        // 삭제
        currentRE = currentRE.filter(
            (routineExercise: RoutineExercise) => routineExercise.id !== id,
        );
        currentRHE = currentRHE.filter(
            (routineExercise: RoutineExercise) => routineExercise.id !== id,
        );

        // order 재정렬
        currentRE = currentRE
            .sort((a: RoutineExercise, b: RoutineExercise) => a.order - b.order)
            .map((exercise: RoutineExercise, index: number) => ({
                ...exercise,
                order: index + 1,
            }));

        currentRHE = currentRHE
            .sort((a: RoutineExercise, b: RoutineExercise) => a.order - b.order)
            .map((exercise: RoutineExercise, index: number) => ({
                ...exercise,
                order: index + 1,
            }));

        // 상태 업데이트
        newRoutine.routineExercises = currentRE;
        newRoutineHistory.routineExercises = currentRHE;

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
