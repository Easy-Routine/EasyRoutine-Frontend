import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import { createSetConfigOne } from "services/set-config";

const useCreateSetConfigOneMutation = () => {
    const { showToast } = useToast();

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            routineConfigId,
            workoutConfigId,
        }: {
            routineConfigId: string;
            workoutConfigId: string;
        }) => createSetConfigOne({ routineConfigId, workoutConfigId }),
        onError: (error) => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigOne],
            });
        },
    });
};

export default useCreateSetConfigOneMutation;
