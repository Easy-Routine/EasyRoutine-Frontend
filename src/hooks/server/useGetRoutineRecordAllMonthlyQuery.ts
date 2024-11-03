import { useQuery } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import moment from "moment";
import { getRoutineRecordAllMonthly } from "services/routine-record";

const useGetRoutineRecordAllMonthlyQuery = (date: Date) => {
    return useQuery({
        queryKey: [
            queryKey.getRoutineRecordAllMonthly,
            moment(date).startOf("month"),
        ],
        queryFn: async () => {
            const data = await getRoutineRecordAllMonthly({
                date,
            });
            return data;
        },
    });
};

export default useGetRoutineRecordAllMonthlyQuery;
