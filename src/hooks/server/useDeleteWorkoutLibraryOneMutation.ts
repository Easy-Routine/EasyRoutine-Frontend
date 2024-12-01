import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import { deleteWorkoutLibraryOne } from "services/workout-library";

const useDeleteWorkoutLibraryOneMutation = () => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();
    return useMutation({
        mutationFn: (workoutLibraryId: string) =>
            deleteWorkoutLibraryOne(workoutLibraryId),
        onError: (error) => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getWorkoutLibraryAll],
            });
        },
    });
};

export default useDeleteWorkoutLibraryOneMutation;
