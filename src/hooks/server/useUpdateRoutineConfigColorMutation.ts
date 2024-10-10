import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { updateRoutineConfigColor } from "services/routine-config";

const useUpdateRoutineConfigColorMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            routineConfigId,
            value,
        }: {
            routineConfigId: string;
            value: string;
        }) => updateRoutineConfigColor(routineConfigId, value),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigOne],
            });
        },
    });
};

export default useUpdateRoutineConfigColorMutation;
