import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Set} from "types/model";
import {createSetOne} from "services/set-record";
import useToast from "hooks/useToast";

const useCreateSetHistoryOneMutation = () => {
    const queryClient = useQueryClient();
    const {showToast} = useToast();
    return useMutation({
        mutationFn: ({
            routineHistoryId,
            routineExerciseId,
            set,
        }: {
            routineHistoryId: string;
            routineExerciseId: string;
            set: Set;
        }) => createSetOne({routineHistoryId, routineExerciseId, set}),
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

export default useCreateSetHistoryOneMutation;
