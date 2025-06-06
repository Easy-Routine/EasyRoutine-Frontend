import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {Exercise} from "types/model";
import {createExerciseOne} from "services/exercise";
import useToast from "hooks/useToast";
import {ExerciseCreateReq} from "types/exercise";

const useExerciseCreateMutation = () => {
    const queryClient = useQueryClient();
    const {showToast} = useToast();
    return useMutation({
        mutationFn: ({name, image, category, types}: ExerciseCreateReq) =>
            createExerciseOne({
                name,
                image,
                category,
                types,
            }),
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

export default useExerciseCreateMutation;
