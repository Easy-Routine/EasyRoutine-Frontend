import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import { deleteSetConfigOne } from "services/set-config";

const useDeleteSetConfigOneMutation = () => {
    const { showToast } = useToast();

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            routineConfigId,
            workoutConfigId,
        }: {
            routineConfigId: string;
            workoutConfigId: string;
        }) =>
            deleteSetConfigOne({
                routineConfigId,
                workoutConfigId,
            }),
        onError: (error) => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigOne],
            });
        },
    });
};

export default useDeleteSetConfigOneMutation;
