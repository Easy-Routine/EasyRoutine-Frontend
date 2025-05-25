import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {createRoutineOne} from "services/routine";
import {Color} from "types/enum";

const useRoutineCreateMutation = () => {
    const {showToast} = useToast();

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            name,
            color,
            userId,
        }: {
            name: string;
            color: Color;
            userId: string;
        }) => createRoutineOne({name, color, userId}),
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

export default useRoutineCreateMutation;
