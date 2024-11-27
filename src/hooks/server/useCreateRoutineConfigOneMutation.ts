import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { createRoutineConfigOne } from "services/routine-config";
import { Color } from "types/enum";

const useCreateRoutineConfigMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            name,
            color,
            userId,
        }: {
            name: string;
            color: Color;
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
