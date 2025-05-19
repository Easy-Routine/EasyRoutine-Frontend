import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import useDeleteWorkoutConfigOneMutation from "hooks/server/useDeleteWorkoutConfigOneMutation";
import {useRoutineProgress} from "../../RoutineProgressProvider";
import {WorkoutConfig} from "types/model";

type WorkoutConfigDeleteButtonProps = {
    workoutConfig: WorkoutConfig;
};

const WorkoutConfigDeleteButton = ({
    workoutConfig,
}: WorkoutConfigDeleteButtonProps) => {
    const {_id} = workoutConfig;

    const {routineProgress} = useRoutineProgress();

    const handleWorkoutConfigDeleteButtonClick = async () => {
        // await deleteWorkoutConfigOneMutate({
        //     routineConfigId: routineProgress._id,
        //     workoutConfigId,
        // });
        // routineProgress를 삭제하는 로직 추가하기
    };

    return (
        <SwipeableAccordion.DeleteButton
            onClick={handleWorkoutConfigDeleteButtonClick}
        />
    );
};

export default WorkoutConfigDeleteButton;
