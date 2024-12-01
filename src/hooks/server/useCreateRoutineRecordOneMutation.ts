import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import ROUTES from "constants/routes";
import useToast from "hooks/useToast";
import { useNavigate } from "react-router-dom";
import { createRoutineRecordOne } from "services/routine-record";
import { Color } from "types/enum";

const useCreateRoutineRecordOneMutation = () => {
    const { showToast } = useToast();
    const navigate = useNavigate();

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
        onError: (error) => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKey.getRoutineRecordAll],
            });
        },
    });
};

export default useCreateRoutineRecordOneMutation;
