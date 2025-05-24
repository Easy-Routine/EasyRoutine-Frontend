import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {updateSetField} from "services/set";

const useUpdateSetFieldMutation = () => {
    const queryClient = useQueryClient();
    const {showToast} = useToast();
    return useMutation({
        mutationFn: ({
            routineId,
            routineExerciseId,
            setId,
            key,
            value,
        }: {
            routineId: string;
            routineExerciseId: string;
            setId: string;
            key: string;
            value: string;
        }) =>
            updateSetField({
                routineId,
                routineExerciseId,
                setId,
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

export default useUpdateSetFieldMutation;
