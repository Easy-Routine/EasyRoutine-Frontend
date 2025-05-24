import {useSuspenseQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import moment from "moment";
import {getRoutineHistoryAllDaily} from "services/routine-history";

const useGetRoutineHistoryAllDailyQuery = (date: Date) => {
    return useSuspenseQuery({
        queryKey: [
            queryKey.getRoutineHistoryAllDaily,
            moment(date).startOf("day"),
        ],
        queryFn: async () => {
            const data = await getRoutineHistoryAllDaily({
                date,
            });
            return data;
        },
    });
};

export default useGetRoutineHistoryAllDailyQuery;
