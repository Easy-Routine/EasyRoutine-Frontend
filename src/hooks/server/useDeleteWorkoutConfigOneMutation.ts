import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import { deleteWorkoutConfigOne } from "services/workout-config";

const useDeleteWorkoutConfigOneMutation = () => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();
    return useMutation({
        mutationFn: ({
            routineConfigId,
            workoutConfigId,
        }: {
            routineConfigId: string;
            workoutConfigId: string;
        }) => deleteWorkoutConfigOne({ routineConfigId, workoutConfigId }),

        onError: (error) => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigOne],
            });
        },
    });
};

export default useDeleteWorkoutConfigOneMutation;
