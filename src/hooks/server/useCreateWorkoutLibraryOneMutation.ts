import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { WorkoutLibrary } from "db";
import { createWorkoutLibraryOne } from "services/workout-library";

const useCreateWorkoutLibraryMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            name,
            image,
            category,
            type,
            userId,
        }: Omit<WorkoutLibrary, "id" | "createdAt" | "updatedAt">) =>
            createWorkoutLibraryOne({
                name,
                image,
                category,
                type,
                userId,
            }),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getWorkoutLibraryAll],
            });
        },
    });
};

export default useCreateWorkoutLibraryMutation;
