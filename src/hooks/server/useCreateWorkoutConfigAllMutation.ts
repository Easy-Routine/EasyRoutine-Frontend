import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import { createWorkoutConfigAll } from "services/workout-config";

const useCreateWorkoutConfigAllMutation = () => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();
    return useMutation({
        mutationFn: ({
            workoutLibraryIds,
            routineConfigId,
        }: {
            workoutLibraryIds: string[];
            routineConfigId: string;
        }) => createWorkoutConfigAll(workoutLibraryIds, routineConfigId),
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

export default useCreateWorkoutConfigAllMutation;
