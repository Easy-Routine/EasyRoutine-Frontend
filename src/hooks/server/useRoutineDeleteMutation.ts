import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {deleteRoutineOne} from "services/routine";
import {RoutineDeleteReq} from "types/routine";

const useRoutineDeleteMutation = () => {
    const queryClient = useQueryClient();
    const {showToast} = useToast();
    return useMutation({
        mutationFn: (RoutineDeleteReq: RoutineDeleteReq) =>
            deleteRoutineOne(RoutineDeleteReq),
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

export default useRoutineDeleteMutation;
