import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {deleteRoutineHistoryOne} from "services/routine-history";

const useDeleteRoutineHistoryOneMutation = () => {
    const {showToast} = useToast();

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (routineHistoryId: string) =>
            deleteRoutineHistoryOne(routineHistoryId),
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

export default useDeleteRoutineHistoryOneMutation;
