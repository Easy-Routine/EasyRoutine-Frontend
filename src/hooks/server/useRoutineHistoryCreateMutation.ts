import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {createRoutineHistoryOne} from "services/routine-history";
import {Color} from "types/enum";
import {RoutineHistoryCreateReq} from "types/routine-history";

const useRoutineHistoryCreateMutation = () => {
    const {showToast} = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (routineHistoryCreateReq: RoutineHistoryCreateReq) =>
            createRoutineHistoryOne(routineHistoryCreateReq),
        onError: (error: any) => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineAll],
            });
        },
    });
};

export default useRoutineHistoryCreateMutation;
