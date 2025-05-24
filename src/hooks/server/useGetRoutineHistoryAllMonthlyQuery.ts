import {useSuspenseQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import moment from "moment";
import {getRoutineHistoryAllMonthly} from "services/routine-history";

const useGetRoutineHistoryAllMonthlyQuery = (date: Date) => {
    return useSuspenseQuery({
        queryKey: [
            queryKey.getRoutineHistoryAllMonthly,
            moment(date).startOf("month"),
        ],
        queryFn: async () => {
            const data = await getRoutineHistoryAllMonthly({
                date,
            });
            return data;
        },
    });
};

export default useGetRoutineHistoryAllMonthlyQuery;
