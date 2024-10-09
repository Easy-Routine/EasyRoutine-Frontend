import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { createWorkoutConfigAll } from "services/workout-config";

const useCreateWorkoutConfigAllMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            workoutLibraryIds,
            routineConfigId,
        }: {
            workoutLibraryIds: string[];
            routineConfigId: string;
        }) => createWorkoutConfigAll(workoutLibraryIds, routineConfigId),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigOne],
            });
        },
    });
};

export default useCreateWorkoutConfigAllMutation;
