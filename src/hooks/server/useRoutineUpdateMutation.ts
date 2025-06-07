import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {updateRoutineOne} from "services/routine";
import {RoutineUpdateReq} from "types/routine";

const useRoutineUpdateMutation = () => {
    const {showToast} = useToast();

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (routineUpdateReq: RoutineUpdateReq) =>
            updateRoutineOne(routineUpdateReq),
        onError: error => {
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

export default useRoutineUpdateMutation;
