import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import { deleteWorkoutRecordOne } from "services/workout-record";

const useDeleteWorkoutRecordOneMutation = () => {
    const { showToast } = useToast();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            routineRecordId,
            workoutRecordId,
        }: {
            routineRecordId: string;
            workoutRecordId: string;
        }) =>
            deleteWorkoutRecordOne({
                routineRecordId,
                workoutRecordId,
            }),
        onError: (error) => {
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineRecordOne],
            });
        },
    });
};

export default useDeleteWorkoutRecordOneMutation;
