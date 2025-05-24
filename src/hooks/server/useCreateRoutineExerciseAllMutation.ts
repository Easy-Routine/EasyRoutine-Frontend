import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {createRoutineExerciseAll} from "services/routine-exercise";

const useCreateRoutineExerciseAllMutation = () => {
    const queryClient = useQueryClient();
    const {showToast} = useToast();
    return useMutation({
        mutationFn: ({
            exerciseIds,
            routineId,
        }: {
            exerciseIds: string[];
            routineId: string;
        }) => createRoutineExerciseAll(exerciseIds, routineId),
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

export default useCreateRoutineExerciseAllMutation;
