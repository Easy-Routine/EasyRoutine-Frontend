import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { updateSetConfigField } from "services/set-config";

const useUpdateSetConfigFieldMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            setConfigId,
            key,
            value,
        }: {
            setConfigId: string;
            key: string;
            value: string;
        }) => updateSetConfigField(setConfigId, key, value),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigOne],
            });
        },
    });
};

export default useUpdateSetConfigFieldMutation;
