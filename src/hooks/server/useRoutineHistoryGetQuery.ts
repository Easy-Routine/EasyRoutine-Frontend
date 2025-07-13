import {useSuspenseQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getRoutineHistoryOne} from "services/routine-history";
import {RoutineHistoryGetReq} from "types/routine-history";

const useRoutineHistoryGetQuery = (
    routineHistoryGetReq: RoutineHistoryGetReq,
) => {
    return useSuspenseQuery({
        queryKey: [
            queryKey.getRoutineHistoryOne,
            routineHistoryGetReq.routineHistoryId,
        ],
        queryFn: async () => {
            const data = await getRoutineHistoryOne(routineHistoryGetReq);
            return data;
        },
        select: response => ({
            routineHistory: response.result,
        }),
    });
};

export default useRoutineHistoryGetQuery;
