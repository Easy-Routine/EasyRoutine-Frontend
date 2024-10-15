import { useQuery } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { getWorkoutRecordSumAll } from "services/workout-record";
import { Period } from "type/Period";

const useGetWorkoutRecordSumAllQuery = ({
    workoutLibraryId,
    period,
}: {
    workoutLibraryId: string;
    period: Period;
}) => {
    return useQuery({
        queryKey: [queryKey.getWorkoutRecordSumAll, workoutLibraryId, period],
        queryFn: async () => {
            const data = await getWorkoutRecordSumAll({
                workoutLibraryId,
                period,
            });
            return data;
        },
    });
};

export default useGetWorkoutRecordSumAllQuery;
