import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {deleteSetConfigOne} from "services/set";

const useDeleteSetConfigOneMutation = () => {
    const {showToast} = useToast();

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({workoutConfigId}: {workoutConfigId: string}) =>
            deleteSetConfigOne({
                workoutConfigId,
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

export default useDeleteSetConfigOneMutation;
