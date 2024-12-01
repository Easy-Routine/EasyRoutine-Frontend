import { useMutation } from "@tanstack/react-query";
import useToast from "hooks/useToast";
import { deleteSetRecordOne } from "services/set-record";

const useDeleteSetRecordOneMutation = () => {
    const { showToast } = useToast();
    return useMutation({
        mutationFn: ({
            routineRecordId,
            workoutRecordId,
        }: {
            routineRecordId: string;
            workoutRecordId: string;
        }) =>
            deleteSetRecordOne({
                routineRecordId,
                workoutRecordId,
            }),

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

export default useDeleteSetRecordOneMutation;
