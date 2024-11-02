import { useQuery } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import moment from "moment";
import { useRecoilValue } from "recoil";
import { getRoutineRecordAllMonthly } from "services/routine-record";
import { userContextStore } from "store/userContextStore";

const useGetRoutineRecordAllMonthlyQuery = (date: Date) => {
    const userContext = useRecoilValue(userContextStore);
    return useQuery({
        queryKey: [
            queryKey.getRoutineRecordAllMonthly,
            moment(date).startOf("month"),
        ],
        queryFn: async () => {
            const data = await getRoutineRecordAllMonthly({
                date,
                userId: userContext.userId as string,
            });
            return data;
        },
    });
};

export default useGetRoutineRecordAllMonthlyQuery;
