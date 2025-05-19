import {useSuspenseQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getExerciseSumAll} from "services/workout-record";
import {Period} from "types/enum";

const usegetExerciseSumAllQuery = ({
    workoutLibraryId,
    period,
}: {
    workoutLibraryId: string;
    period: Period;
}) => {
    return useSuspenseQuery({
        queryKey: [queryKey.getExerciseSumAll, workoutLibraryId, period],
        queryFn: async () => {
            const data = await getExerciseSumAll({
                workoutLibraryId,
                period,
            });
            return data;
        },
    });
};

export default usegetExerciseSumAllQuery;
