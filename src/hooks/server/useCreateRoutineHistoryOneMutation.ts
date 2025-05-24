import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {createRoutineHistoryOne} from "services/routine-history";
import {Color} from "types/enum";

const useCreateRoutineHistoryMutation = () => {
    const {showToast} = useToast();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            id,
            name,
            color,
            userId,
        }: {
            id: string;
            name: string;
            color: Color;
            userId: string;
        }) => createRoutineHistoryOne({id, name, color, userId}),
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

export default useCreateRoutineHistoryMutation;
