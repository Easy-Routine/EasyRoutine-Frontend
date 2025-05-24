import {useMutation} from "@tanstack/react-query";
import useToast from "hooks/useToast";
import {getExerciseOne} from "services/exercise";

const useGetExerciseOneMutation = () => {
    const {showToast} = useToast();
    return useMutation({
        mutationFn: async (exerciseId: string) => {
            const data = await getExerciseOne(exerciseId);
            return data;
        },
        onError: error => {
            console.log(error);
            showToast(error.message, "error");
        },
    });
};

export default useGetExerciseOneMutation;
