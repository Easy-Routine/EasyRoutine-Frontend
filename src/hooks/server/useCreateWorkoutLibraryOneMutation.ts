import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { WorkoutLibrary } from "types/model";
import { createWorkoutLibraryOne } from "services/workout-library";
import useToast from "hooks/useToast";

const useCreateWorkoutLibraryOneMutation = () => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();
    return useMutation({
        mutationFn: ({
            name,
            image,
            category,
            type,
            isEditable,
            userId,
        }: Omit<WorkoutLibrary, "_id" | "createdAt" | "updatedAt">) =>
            createWorkoutLibraryOne({
                name,
                image,
                category,
                type,
                isEditable,
                userId,
            }),
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

export default useCreateWorkoutLibraryOneMutation;
