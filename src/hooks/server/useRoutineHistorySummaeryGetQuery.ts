import {useSuspenseQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import moment from "moment";
import {
    getRoutineHistoryOne,
    getRoutineHistorySummary,
} from "services/routine-history";
import {RoutineHistorySummaryGetReq} from "types/routine-history";

const useRoutineHistorySummaryGetQuery = (
    request: RoutineHistorySummaryGetReq,
) => {
    return useSuspenseQuery({
        queryKey: [
            queryKey.getRoutineHistoryOne,
            moment(request.date).format("YYYY-MM-DD"),
        ],
        queryFn: async () => {
            const data = await getRoutineHistorySummary(request);
            return data;
        },
        select: response => ({
            routineHistorySummary: response.result,
        }),
    });
};

export default useRoutineHistorySummaryGetQuery;
