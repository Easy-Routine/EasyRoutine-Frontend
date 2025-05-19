import {useSuspenseQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getRoutineHistoryOne} from "services/routine-history";

const usegetRoutineHistoryOneQuery = (routineRecordId: string) => {
    return useSuspenseQuery({
        queryKey: [queryKey.getRoutineHistoryOne, routineRecordId],
        queryFn: async () => {
            const data = await getRoutineHistoryOne(routineRecordId);
            return data;
        },
    });
};

export default usegetRoutineHistoryOneQuery;
