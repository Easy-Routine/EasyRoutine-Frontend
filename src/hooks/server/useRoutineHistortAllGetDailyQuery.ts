import {useSuspenseQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getRoutineHistoryAllDaily} from "services/routine-history";
import {RoutineHistoryAllGetDailyReq} from "types/routine-history";
import moment from "moment";

const useRoutineHistoryAllGetDailyQuery = (
    routineHistoryAllGetDailyReq: RoutineHistoryAllGetDailyReq,
) => {
    return useSuspenseQuery({
        queryKey: [
            queryKey.getRoutineHistoryAllDaily,
            moment(routineHistoryAllGetDailyReq.date).format("YYYY-MM-DD"),
        ],
        queryFn: async () => {
            const response = await getRoutineHistoryAllDaily(
                routineHistoryAllGetDailyReq,
            );
            return response;
        },
        select: response => ({
            routineHistories: response.result.contents,
        }),
    });
};

export default useRoutineHistoryAllGetDailyQuery;
