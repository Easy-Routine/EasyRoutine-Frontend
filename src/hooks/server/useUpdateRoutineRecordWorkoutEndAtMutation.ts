import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRoutineRecordWorkoutEndAt } from "services/routine-record";

const useUpdateRoutineRecordWorkoutEndAtMutation = () => {
    const queryClient = useQueryClient();
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
