import {useSuspenseQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getExerciseSumAll} from "services/workout-record";
import {Period} from "types/enum";

const useGetRoutineExerciseHistorySumAllQuery = ({
    exerciseId,
    period,
}: {
    exerciseId: string;
    period: Period;
}) => {
    return useSuspenseQuery({
        queryKey: [queryKey.getExerciseSumAll, exerciseId, period],
        queryFn: async () => {
            const data = await getExerciseSumAll({
                exerciseId,
                period,
            });
            return data;
        },
    });
};

export default useGetRoutineExerciseHistorySumAllQuery;
