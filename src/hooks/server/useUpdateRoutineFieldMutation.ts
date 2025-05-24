import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {updateRoutineField} from "services/routine";
import {Color} from "types/enum";

const useUpdateRoutineFieldMutation = () => {
    const {showToast} = useToast();

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            routineId,
            key,
            value,
        }: {
            routineId: string;
            key: string;
            value: string | Color;
        }) => updateRoutineField(routineId, key, value),

        onError: error => {
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineOne],
            });
        },
    });
};

export default useUpdateRoutineFieldMutation;
