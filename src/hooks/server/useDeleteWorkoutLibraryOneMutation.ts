import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { deleteWorkoutLibraryOne } from "services/workout-library";

const useDeleteWorkoutLibraryOneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (workoutLibraryId: string) =>
            deleteWorkoutLibraryOne(workoutLibraryId),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getWorkoutLibraryAll],
            });
        },
    });
};

export default useDeleteWorkoutLibraryOneMutation;
