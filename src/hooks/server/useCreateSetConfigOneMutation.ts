import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { createSetConfigOne } from "services/set-config";

const useCreateSetConfigOneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            routineConfigId,
            workoutConfigId,
        }: {
            routineConfigId: string;
            workoutConfigId: string;
        }) => createSetConfigOne({ routineConfigId, workoutConfigId }),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigOne],
            });
        },
    });
};

export default useCreateSetConfigOneMutation;
