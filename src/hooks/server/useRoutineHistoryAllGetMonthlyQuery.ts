import {useSuspenseQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getRoutineHistoryAllMonthly} from "services/routine-history";
import {RoutineHistoryAllGetMonthlyReq} from "types/routine-history";
import moment from "moment";

const useRoutineHistoryAllGetMonthlyQuery = (
    routineHistoryAllGetMonthlyReq: RoutineHistoryAllGetMonthlyReq,
) => {
    return useSuspenseQuery({
        queryKey: [
            queryKey.getRoutineHistoryAllMonthly,
            moment(routineHistoryAllGetMonthlyReq.date).format("YYYY-MM"),
        ],
        queryFn: async () => {
            const response = await getRoutineHistoryAllMonthly(
                routineHistoryAllGetMonthlyReq,
            );
            return response;
        },
        select: response => ({
            routineHistories: response ?? [],
        }),
    });
};

export default useRoutineHistoryAllGetMonthlyQuery;
