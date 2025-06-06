import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {Exercise} from "types/model";
import {updateExerciseOne} from "services/exercise";
import useToast from "hooks/useToast";
import {ExerciseUpdateReq} from "types/exercise";

const useExerciseUpdateMutation = () => {
    const queryClient = useQueryClient();
    const {showToast} = useToast();
    return useMutation({
        mutationFn: (exerciseUpdateReq: ExerciseUpdateReq) =>
            updateExerciseOne(exerciseUpdateReq),
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

export default useExerciseUpdateMutation;
