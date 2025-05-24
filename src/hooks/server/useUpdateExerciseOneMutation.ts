import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {Exercise} from "types/model";
import {updateExerciseOne} from "services/exercise";
import useToast from "hooks/useToast";

const useUpdateExerciseOneMutation = () => {
    const queryClient = useQueryClient();
    const {showToast} = useToast();
    return useMutation({
        mutationFn: ({
            exerciseId,
            updatedData,
        }: {
            exerciseId: string;
            updatedData: Partial<Exercise>;
        }) => updateExerciseOne(exerciseId, updatedData),
        onError: error => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getExerciseAll],
            });
        },
    });
};

export default useUpdateExerciseOneMutation;
