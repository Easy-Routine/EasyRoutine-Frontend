import {useMutation, useQueryClient} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import useToast from "hooks/useToast";
import {createRoutineRecordOne} from "services/routine-record";
import {Color} from "types/enum";

const useCreateRoutineRecordMutation = () => {
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
        }) => createRoutineRecordOne({id, name, color, userId}),
        onError: (error: any) => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineConfigAll],
            });
        },
    });
};

export default useCreateRoutineRecordMutation;
