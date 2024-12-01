import { useMutation } from "@tanstack/react-query";
import useToast from "hooks/useToast";
import { updateRoutineRecordWorkoutEndAt } from "services/routine-record";

const useUpdateRoutineRecordWorkoutEndAtMutation = () => {
    const { showToast } = useToast();

    return useMutation({
        mutationFn: ({
            routineRecordId,
            workoutTime,
        }: {
            routineRecordId: string;
            workoutTime: number;
        }) => updateRoutineRecordWorkoutEndAt({ routineRecordId, workoutTime }),
        onError: (error) => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {},
    });
};

export default useUpdateRoutineRecordWorkoutEndAtMutation;
