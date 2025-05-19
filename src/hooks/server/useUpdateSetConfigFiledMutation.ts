import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {updateSetConfigField} from "services/set";

const useUpdateSetConfigFieldMutation = () => {
    const queryClient = useQueryClient();
    const {showToast} = useToast();
    return useMutation({
        mutationFn: ({
            routineConfigId,
            workoutConfigId,
            setConfigId,
            key,
            value,
        }: {
            routineConfigId: string;
            workoutConfigId: string;
            setConfigId: string;
            key: string;
            value: string;
        }) =>
            updateSetConfigField({
                routineConfigId,
                workoutConfigId,
                setConfigId,
                key,
                value,
            }),

        onError: error => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineOne],
            });
        },
    });
};

export default useUpdateSetConfigFieldMutation;
