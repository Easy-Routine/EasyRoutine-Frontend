import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {deleteRoutineOne} from "services/routine";

const useRoutineDeleteMutation = () => {
    const queryClient = useQueryClient();
    const {showToast} = useToast();
    return useMutation({
        mutationFn: (routineId: string) => deleteRoutineOne(routineId),
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
