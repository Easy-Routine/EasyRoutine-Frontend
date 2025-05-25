import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import {useRoutineProgress} from "../../RoutineProgressProvider";
import {RoutineExercise} from "types/model";

type RoutineExerciseDeleteButtonProps = {
    routineExercise: RoutineExercise;
};

const RoutineExerciseDeleteButton = ({
    routineExercise,
}: RoutineExerciseDeleteButtonProps) => {
    const {id} = routineExercise;

    const {routineProgress} = useRoutineProgress();

    const handleRoutineExerciseDeleteButtonClick = async () => {
        // await deleteRoutineExerciseOneMutate({
        //     routineId: routineProgress.id,
        //     routineExerciseId,
        // });
        // routineProgress를 삭제하는 로직 추가하기
    };

    return (
        <SwipeableAccordion.DeleteButton
            onClick={handleRoutineExerciseDeleteButtonClick}
        />
    );
};

export default RoutineExerciseDeleteButton;
