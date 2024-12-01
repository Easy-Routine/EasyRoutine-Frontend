import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import { updateRoutineConfigField } from "services/routine-config";
import { Color } from "types/enum";

const useUpdateRoutineConfigFieldMutation = () => {
    const { showToast } = useToast();

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

        onError: (error) => {
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigOne],
            });
        },
    });
};

export default useUpdateRoutineConfigFieldMutation;
