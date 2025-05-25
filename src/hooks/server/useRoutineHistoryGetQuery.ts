import {useSuspenseQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getRoutineHistoryOne} from "services/routine-history";

const useGetRoutineHistoryOneQuery = (routineHistoryId: string) => {
    return useSuspenseQuery({
        queryKey: [queryKey.getRoutineHistoryOne, routineHistoryId],
        queryFn: async () => {
            const data = await getRoutineHistoryOne(routineHistoryId);
            return data;
        },
    });
};

export default useGetRoutineHistoryOneQuery;
