import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { WorkoutLibrary } from "types/model";
import { updateWorkoutLibraryOne } from "services/workout-library";
import useToast from "hooks/useToast";

const useUpdateWorkoutLibraryOneMutation = () => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();
    return useMutation({
        mutationFn: ({
            workoutLibraryId,
            updatedData,
        }: {
            workoutLibraryId: string;
            updatedData: Partial<WorkoutLibrary>;
        }) => updateWorkoutLibraryOne(workoutLibraryId, updatedData),
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

export default useUpdateWorkoutLibraryOneMutation;
