import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { deleteSetConfigOne } from "services/set-config";

const useDeleteSetConfigOneMutation = () => {
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
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigOne],
            });
        },
    });
};

export default useDeleteSetConfigOneMutation;
