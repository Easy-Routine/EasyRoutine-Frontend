import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {createSetOne} from "services/set";

const useCreateSetOneMutation = () => {
    const {showToast} = useToast();

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({routineExerciseId}: {routineExerciseId: string}) =>
            createSetOne({routineExerciseId}),
        onError: error => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineOne],
            });
        },
    });
};

export default useCreateSetOneMutation;
