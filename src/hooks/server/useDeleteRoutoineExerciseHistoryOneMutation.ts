import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {deleteRoutineExerciseOne} from "services/workout-record";

const useDeleteRoutineExerciseHistoryOneMutation = () => {
    const {showToast} = useToast();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            routineHistoryId,
            routineExerciseId,
        }: {
            routineHistoryId: string;
            routineExerciseId: string;
        }) =>
            deleteRoutineExerciseOne({
                routineHistoryId,
                routineExerciseId,
            }),
        onError: error => {
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineHistoryOne],
            });
        },
    });
};

export default useDeleteRoutineExerciseHistoryOneMutation;
