import { useSuspenseQuery } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import moment from "moment";
import { getRoutineRecordAllDaily } from "services/routine-record";

const useGetRoutineRecordAllDailyQuery = (date: Date) => {
    return useSuspenseQuery({
        queryKey: [
            queryKey.getRoutineRecordAllDaily,
            moment(date).startOf("day"),
        ],
        queryFn: async () => {
            const data = await getRoutineRecordAllDaily({
                date,
            });
            return data;
        },
    });
};

export default useGetRoutineRecordAllDailyQuery;
