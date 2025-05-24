import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {Exercise} from "types/model";
import {createExerciseOne} from "services/exercise";
import useToast from "hooks/useToast";

const useCreateExerciseOneMutation = () => {
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
                userId,
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

export default useCreateExerciseOneMutation;
