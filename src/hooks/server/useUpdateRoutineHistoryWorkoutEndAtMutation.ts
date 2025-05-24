import {useMutation} from "@tanstack/react-query";
import useToast from "hooks/useToast";
import {updateRoutineHistoryWorkoutEndAt} from "services/routine-history";

const useUpdateRoutineHistoryWorkoutEndAtMutation = () => {
    const {showToast} = useToast();

    return useMutation({
        mutationFn: ({
            routineHistoryId,
            workoutTime,
        }: {
            routineHistoryId: string;
            workoutTime: number;
        }) => updateRoutineHistoryWorkoutEndAt({routineHistoryId, workoutTime}),
        onError: error => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {},
    });
};

export default useUpdateRoutineHistoryWorkoutEndAtMutation;
