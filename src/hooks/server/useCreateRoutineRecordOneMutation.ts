import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { createRoutineRecordOne } from "services/routine-record";
import { Color } from "type/Color";

const useCreateRoutineRecordOneMutation = () => {
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
        }) => createRoutineRecordOne({ name, color, userId }),
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineRecordAll],
            });
        },
    });
};

export default useCreateRoutineRecordOneMutation;
