import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {Exercise} from "types/model";
import {createExerciseOne} from "services/exercise";
import useToast from "hooks/useToast";

const useExerciseCreateMutation = () => {
    const queryClient = useQueryClient();
    const {showToast} = useToast();
    return useMutation({
        mutationFn: ({
            name,
            image,
            category,
            type,
            isEditable,
            // userId,
        }: Omit<Exercise, "id" | "createdAt" | "updatedAt">) =>
            createExerciseOne({
                name,
                image,
                category,
                type,
                isEditable,
            }),
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

export default useExerciseCreateMutation;
