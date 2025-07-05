import {useQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getRoutineHistoryExerciseVolumeByPeriodAll} from "services/routine-history";
import {RoutineHistoryExerciseVolumeByPeriodAllGetReq} from "types/routine-history";

const useRoutineHistoryExerciseVolumeByPeriodAllGetQuery = (
    routineHistoryExerciseVolumeByPeriodAllGetReq: RoutineHistoryExerciseVolumeByPeriodAllGetReq,
) => {
    const {exerciseId, period, type} =
        routineHistoryExerciseVolumeByPeriodAllGetReq;
    return useQuery({
        queryKey: [
            queryKey.getRoutineHistoryExerciseVolumeByPeriodAll,
            exerciseId,
            period,
            type,
        ],
        queryFn: async () => {
            const data = await getRoutineHistoryExerciseVolumeByPeriodAll(
                routineHistoryExerciseVolumeByPeriodAllGetReq,
            );
            return data;
        },
    });
};

export default useRoutineHistoryExerciseVolumeByPeriodAllGetQuery;
