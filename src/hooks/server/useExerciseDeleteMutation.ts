import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {deleteExerciseOne} from "services/exercise";
import {ExerciseDeleteReq} from "types/exercise";

const useExerciseDeleteMutation = () => {
    const queryClient = useQueryClient();
    const {showToast} = useToast();
    return useMutation({
        mutationFn: (exerciseDeleteReq: ExerciseDeleteReq) =>
            deleteExerciseOne(exerciseDeleteReq),
        onError: error => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getExerciseAll],
            });
        },
    });
};

export default useExerciseDeleteMutation;
