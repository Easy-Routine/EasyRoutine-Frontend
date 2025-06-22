import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import {RoutineExercise} from "types/model";
import {MouseEventHandler} from "react";
import {useModal} from "headless/Modal/Modal";

type RoutineExerciseDeleteModalButtonProps = {
    routineExercise: RoutineExercise;
};

const RoutineExerciseDeleteModalButton = ({
    routineExercise,
}: RoutineExerciseDeleteModalButtonProps) => {
    const {openModal} = useModal();

    const handleRoutineExerciseDeleteModalButtonClick: MouseEventHandler<
        HTMLDivElement
    > = e => {
        e.stopPropagation();
        openModal();
    };

    return (
        <SwipeableAccordion.DeleteButton
            onClick={handleRoutineExerciseDeleteModalButtonClick}
        />
    );
};

export default RoutineExerciseDeleteModalButton;
