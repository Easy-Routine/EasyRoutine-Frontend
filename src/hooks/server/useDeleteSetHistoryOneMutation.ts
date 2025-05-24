import {useMutation} from "@tanstack/react-query";
import useToast from "hooks/useToast";
import {deleteSetOne} from "services/set-record";

const useDeleteSetHistoryOneMutation = () => {
    const {showToast} = useToast();
    return useMutation({
        mutationFn: ({
            routineHistoryId,
            routineExerciseId,
        }: {
            routineHistoryId: string;
            routineExerciseId: string;
        }) =>
            deleteSetOne({
                routineHistoryId,
                routineExerciseId,
            }),

        onError: error => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            // queryClient.invalidateQueries({
            //     queryKey: [queryKey.getRoutineOne],
            // });
        },
    });
};

export default useDeleteSetHistoryOneMutation;
