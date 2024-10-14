import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { deleteRoutineRecordOne } from "services/routine-record";

const useDeleteRoutineRecordOneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (routineRecordId: string) =>
            deleteRoutineRecordOne(routineRecordId),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineRecordAllMonthly],
            });
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineRecordAllDaily],
            });
        },
    });
};

export default useDeleteRoutineRecordOneMutation;
