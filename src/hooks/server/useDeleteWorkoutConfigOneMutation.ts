import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { deleteWorkoutConfigOne } from "services/workout-config";

const useDeleteWorkoutConfigOneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (workoutConfigId: string) =>
            deleteWorkoutConfigOne(workoutConfigId),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigOne],
            });
        },
    });
};

export default useDeleteWorkoutConfigOneMutation;
