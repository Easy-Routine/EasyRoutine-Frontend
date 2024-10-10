import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { deleteRoutineConfigOne } from "services/routine-config";

const useDeleteRoutineConfigOneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (routineConfigId: string) =>
            deleteRoutineConfigOne(routineConfigId),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigAll],
            });
        },
    });
};

export default useDeleteRoutineConfigOneMutation;
