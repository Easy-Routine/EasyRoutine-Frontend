import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { deleteSetConfigOne } from "services/set-config";

const useDeleteSetConfigOneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (workoutConfigId: string) =>
            deleteSetConfigOne(workoutConfigId),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigOne],
            });
        },
    });
};

export default useDeleteSetConfigOneMutation;
