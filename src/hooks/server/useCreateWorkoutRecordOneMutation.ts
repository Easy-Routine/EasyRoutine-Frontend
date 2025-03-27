import {useMutation} from "@tanstack/react-query";
import {WorkoutLibrary} from "types/model";
import {createWorkoutRecordOne} from "services/workout-record";
import useToast from "hooks/useToast";

const useCreateWorkoutRecordOneMutation = () => {
    const {showToast} = useToast();
    return useMutation({
        mutationFn: ({
            routineRecordId,
            workoutLibrary,
            workoutRecordId,
        }: {
            routineRecordId: string;
            workoutLibrary: WorkoutLibrary;
            workoutRecordId: string;
        }) =>
            createWorkoutRecordOne({
                routineRecordId,
                workoutLibrary,
                workoutRecordId,
            }),
        onError: (error: any) => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {},
    });
};

export default useCreateWorkoutRecordOneMutation;
