import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { WorkoutLibrary } from "db";
import { createWorkoutRecordOne } from "services/workout-record";

const useCreateWorkoutRecordOneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            routineRecordId,
            workoutLibrary,
        }: {
            routineRecordId: string;
            workoutLibrary: WorkoutLibrary;
        }) => createWorkoutRecordOne({ routineRecordId, workoutLibrary }),
        onSettled: () => {
            // queryClient.invalidateQueries({
            //     queryKey: [queryKey.getRoutineRecordAll],
            // });
        },
    });
};

export default useCreateWorkoutRecordOneMutation;
