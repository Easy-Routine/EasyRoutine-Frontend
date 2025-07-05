import BasicButton from "headful/BasicButton/BasicButton";
import {MouseEventHandler} from "react";
import {Set, RoutineExercise} from "types/model";
import {useModal} from "headless/Modal/Modal";
import ConfirmModal from "headful/ConfirmModal/ConfirmModal";
import {useRoutineProgress} from "./RoutineProgressProvider";
import CompleteModalContent from "./CompleteModalContent";
import TimerModalContent from "./TimerModalContent";
import moment from "moment";

type SetCompleteButtonProps = {
    routineExercise: RoutineExercise;
};

const SetCompleteButton = ({routineExercise}: SetCompleteButtonProps) => {
    const {
        routineHistory,
        setRoutineHistory,
        routine,
        startTimer,
        remainingTime,
        routineStartTime,
    } = useRoutineProgress();

    const {openModal} = useModal();

    const handleSetCompleteButtonClick: MouseEventHandler<
        HTMLButtonElement
    > = async e => {
        e.stopPropagation();

        const newRoutineHistory = structuredClone(routineHistory);
        const currentRE = routineExercise;
        const currentRHE = newRoutineHistory.routineExercises.find(
            (re: RoutineExercise) => re.id === currentRE.id,
        );

        let currentRESet;

        if (currentRHE) {
            const currentRHESetLength = currentRHE.sets.length;
            currentRESet = currentRE.sets[currentRHESetLength];
            currentRHE.sets.push(currentRESet);
        } else {
            currentRESet = currentRE.sets[0];
            newRoutineHistory.routineExercises.push({
                id: currentRE.id,
                order: currentRE.order,
                exercise: currentRE.exercise,
                sets: [currentRESet],
            });
        }

        const totalRoutineSets = routine.routineExercises.flatMap(
            exercise => exercise.sets,
        ).length;

        const totalHistorySets = routineHistory.routineExercises.flatMap(
            exercise => exercise.sets,
        ).length;

        const isRoutineCompleted = totalRoutineSets === totalHistorySets + 1;

        openModal();
        if (!isRoutineCompleted) {
            startTimer(currentRESet.restSec);
        }

        if (isRoutineCompleted) {
            newRoutineHistory.workoutTime = moment().diff(
                routineStartTime,
                "seconds",
            );
            setRoutineHistory(newRoutineHistory);
        } else {
            setRoutineHistory(newRoutineHistory);
        }
    };

    const currentRE = routineExercise;
    const currentRHE = routineHistory.routineExercises.find(
        (re: RoutineExercise) => re.id === currentRE.id,
    );
    const RHESetLength = currentRHE ? currentRHE.sets.length : 0;
    const RESetLength = currentRE.sets.length;
    const isRoutineExerciseCompleted = RHESetLength === RESetLength;

    return (
        <BasicButton
            disabled={isRoutineExerciseCompleted || remainingTime > 0}
            onClick={handleSetCompleteButtonClick}
        >
            세트 완료
        </BasicButton>
    );
};

export default SetCompleteButton;
