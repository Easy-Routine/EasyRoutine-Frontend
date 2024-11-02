import { useQuery } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import moment from "moment";
import { useRecoilValue } from "recoil";
import { getRoutineRecordAllDaily } from "services/routine-record";
import { userContextStore } from "store/userContextStore";

const useGetRoutineRecordAllDailyQuery = (date: Date) => {
    const userContext = useRecoilValue(userContextStore);
    return useQuery({
        queryKey: [
            queryKey.getRoutineRecordAllDaily,
            moment(date).startOf("day"),
        ],
        queryFn: async () => {
            const data = await getRoutineRecordAllDaily({
                date,
                userId: userContext.userId as string,
            });
            return data;
        },
    });
};

export default useGetRoutineRecordAllDailyQuery;
