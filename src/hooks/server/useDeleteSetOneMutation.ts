import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {deleteSetOne} from "services/set";

const useDeleteSetOneMutation = () => {
    const {showToast} = useToast();

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({routineExerciseId}: {routineExerciseId: string}) =>
            deleteSetOne({
                routineExerciseId,
            }),
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

export default useDeleteSetOneMutation;
