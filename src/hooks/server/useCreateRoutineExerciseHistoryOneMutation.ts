import {useMutation} from "@tanstack/react-query";
import {Exercise} from "types/model";
import {createRoutineExerciseOne} from "services/workout-record";
import useToast from "hooks/useToast";

const useCreateRoutineExerciseHistoryOneMutation = () => {
    const {showToast} = useToast();
    return useMutation({
        mutationFn: ({
            routineHistoryId,
            exercise,
            routineExerciseId,
        }: {
            routineHistoryId: string;
            exercise: Exercise;
            routineExerciseId: string;
        }) =>
            createRoutineExerciseOne({
                routineHistoryId,
                exercise,
                routineExerciseId,
            }),
        onError: (error: any) => {
            console.log(error);
            showToast(error.message, "error");
        },
        onSettled: () => {},
    });
};

export default useCreateRoutineExerciseHistoryOneMutation;
