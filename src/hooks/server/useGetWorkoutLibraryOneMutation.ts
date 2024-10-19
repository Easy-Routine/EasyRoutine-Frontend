import { useMutation } from "@tanstack/react-query";
import { getWorkoutLibraryOne } from "services/workout-library";

const useGetWorkoutLibraryOneMutation = () => {
    return useMutation({
        mutationFn: async (workoutLibraryId: string) => {
            const data = await getWorkoutLibraryOne(workoutLibraryId);
            return data;
        },
    });
};

export default useGetWorkoutLibraryOneMutation;
