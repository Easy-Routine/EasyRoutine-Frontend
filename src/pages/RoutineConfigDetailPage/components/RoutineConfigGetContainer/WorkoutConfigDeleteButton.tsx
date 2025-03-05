import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import useDeleteWorkoutConfigOneMutation from "hooks/server/useDeleteWorkoutConfigOneMutation";

type WorkoutConfigDeleteButtonProps = {
    workoutConfigId: string;
    routineConfigId: string;
};

const WorkoutConfigDeleteButton = ({
    workoutConfigId,
    routineConfigId,
}: WorkoutConfigDeleteButtonProps) => {
    const {mutateAsync: deleteWorkoutConfigOneMutate} =
        useDeleteWorkoutConfigOneMutation();

    const handleWorkoutConfigDeleteButtonClick = async () => {
        await deleteWorkoutConfigOneMutate({
            routineConfigId: routineConfigId as string,
            workoutConfigId,
        });
    };

    return (
        <SwipeableAccordion.DeleteButton
            onSwipeableAccordionDeleteButtonClick={
                handleWorkoutConfigDeleteButtonClick
            }
        />
    );
};

export default WorkoutConfigDeleteButton;
