import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { WorkoutLibrary } from "types/model";
import { updateWorkoutLibraryOne } from "services/workout-library";

const useUpdateWorkoutLibraryOneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            workoutLibraryId,
            updatedData,
        }: {
            workoutLibraryId: string;
            updatedData: Partial<WorkoutLibrary>;
        }) => updateWorkoutLibraryOne(workoutLibraryId, updatedData),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getWorkoutLibraryAll],
            });
        },
    });
};

export default useUpdateWorkoutLibraryOneMutation;
