import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { updateRoutineConfigColor } from "services/routine-config";
import { Color } from "type/Color";

const useUpdateRoutineConfigColorMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            routineConfigId,
            value,
        }: {
            routineConfigId: string;
            value: Color;
        }) => updateRoutineConfigColor(routineConfigId, value),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigOne],
            });
        },
    });
};

export default useUpdateRoutineConfigColorMutation;
