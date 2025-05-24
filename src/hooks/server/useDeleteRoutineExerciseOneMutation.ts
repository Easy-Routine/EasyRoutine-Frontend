import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {deleteRoutineExerciseOne} from "services/routine-exercise";

const useDeleteRoutineExerciseOneMutation = () => {
    const queryClient = useQueryClient();
    const {showToast} = useToast();
    return useMutation({
        mutationFn: ({routineExerciseId}: {routineExerciseId: string}) =>
            deleteRoutineExerciseOne({routineExerciseId}),

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

export default useDeleteRoutineExerciseOneMutation;
