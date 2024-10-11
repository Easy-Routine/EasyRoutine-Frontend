import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { updateRoutineConfigField } from "services/routine-config";
import { Color } from "type/Color";

const useUpdateRoutineConfigFieldMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            routineConfigId,
            key,
            value,
        }: {
            routineConfigId: string;
            key: string;
            value: string | Color;
        }) => updateRoutineConfigField(routineConfigId, key, value),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigOne],
            });
        },
    });
};

export default useUpdateRoutineConfigFieldMutation;
