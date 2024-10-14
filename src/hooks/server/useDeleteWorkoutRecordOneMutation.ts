import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { deleteWorkoutRecordOne } from "services/workout-record";

const useDeleteWorkoutRecordOneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (workoutRecordId: string) =>
            deleteWorkoutRecordOne(workoutRecordId),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineRecordOne],
            });
        },
    });
};

export default useDeleteWorkoutRecordOneMutation;
