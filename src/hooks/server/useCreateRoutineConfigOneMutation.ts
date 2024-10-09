import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { createRoutineConfigOne } from "services/routine-config";

const useCreateRoutineConfigMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            name,
            color,
            userId,
        }: {
            name: string;
            color: string;
            userId: string;
        }) => createRoutineConfigOne({ name, color, userId }),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigAll],
            });
        },
    });
};

export default useCreateRoutineConfigMutation;
