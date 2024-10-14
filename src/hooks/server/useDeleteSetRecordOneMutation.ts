import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSetRecordOne } from "services/set-record";

const useDeleteSetRecordOneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ workoutRecordId }: { workoutRecordId: string }) =>
            deleteSetRecordOne({ workoutRecordId }),
        onSettled: () => {
            // queryClient.invalidateQueries({
            //     queryKey: [queryKey.getRoutineConfigOne],
            // });
        },
    });
};

export default useDeleteSetRecordOneMutation;
