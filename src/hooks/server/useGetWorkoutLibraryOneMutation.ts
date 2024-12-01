import { useMutation } from "@tanstack/react-query";
import useToast from "hooks/useToast";
import { getWorkoutLibraryOne } from "services/workout-library";

const useGetWorkoutLibraryOneMutation = () => {
    const { showToast } = useToast();
    return useMutation({
        mutationFn: async (workoutLibraryId: string) => {
            const data = await getWorkoutLibraryOne(workoutLibraryId);
            return data;
        },
        onError: (error) => {
            console.log(error);
            showToast(error.message, "error");
        },
    });
};

export default useGetWorkoutLibraryOneMutation;
