import { useMutation } from "@tanstack/react-query";
import { updateRoutineRecordWorkoutEndAt } from "services/routine-record";

const useUpdateRoutineRecordWorkoutEndAtMutation = () => {
    return useMutation({
        mutationFn: ({
            routineRecordId,
            workoutTime,
        }: {
            routineRecordId: string;
            workoutTime: number;
        }) => updateRoutineRecordWorkoutEndAt({ routineRecordId, workoutTime }),
        onSettled: () => {
            // queryClient.invalidateQueries({
            //     queryKey: [queryKey.getRoutineRecordAll],
            // });
        },
    });
};

export default useUpdateRoutineRecordWorkoutEndAtMutation;
