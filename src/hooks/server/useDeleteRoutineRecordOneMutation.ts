import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {deleteRoutineRecordOne} from "services/routine-history";

const useDeleteRoutineRecordOneMutation = () => {
    const {showToast} = useToast();

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (routineRecordId: string) =>
            deleteRoutineRecordOne(routineRecordId),
        onError: error => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineHistoryAllMonthly],
            });
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineHistoryAllDaily],
            });
        },
    });
};

export default useDeleteRoutineRecordOneMutation;
