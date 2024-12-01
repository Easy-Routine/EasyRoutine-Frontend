import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SetConfig } from "types/model";
import { createSetRecordOne } from "services/set-record";
import useToast from "hooks/useToast";

const useCreateSetRecordOneMutation = () => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();
    return useMutation({
        mutationFn: ({
            routineRecordId,
            workoutRecordId,
            setConfig,
        }: {
            routineRecordId: string;
            workoutRecordId: string;
            setConfig: SetConfig;
        }) =>
            createSetRecordOne({ routineRecordId, workoutRecordId, setConfig }),
        onError: (error) => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {
            // queryClient.invalidateQueries({
            //     queryKey: [queryKey.getRoutineConfigOne],
            // });
        },
    });
};

export default useCreateSetRecordOneMutation;
