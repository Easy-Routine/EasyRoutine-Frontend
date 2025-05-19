import {useMutation} from "@tanstack/react-query";
import useToast from "hooks/useToast";
import {getExerciseOne} from "services/exercise";

const usegetExerciseOneMutation = () => {
    const {showToast} = useToast();
    return useMutation({
        mutationFn: async (workoutLibraryId: string) => {
            const data = await getExerciseOne(workoutLibraryId);
            return data;
        },
        onError: error => {
            console.log(error);
            showToast(error.message, "error");
        },
    });
};

export default usegetExerciseOneMutation;
