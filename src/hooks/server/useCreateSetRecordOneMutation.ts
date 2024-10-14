import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { SetConfig } from "db";
import { createSetRecordOne } from "services/set-record";

const useCreateSetRecordOneMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            workoutRecordId,
            setConfig,
        }: {
            workoutRecordId: string;
            setConfig: SetConfig;
        }) => createSetRecordOne({ workoutRecordId, setConfig }),
        onSettled: () => {
            // queryClient.invalidateQueries({
            //     queryKey: [queryKey.getRoutineConfigOne],
            // });
        },
    });
};

export default useCreateSetRecordOneMutation;
