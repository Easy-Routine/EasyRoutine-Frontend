import {useSuspenseQuery} from "@tanstack/react-query";
import {getRoutineOne} from "services/routine";
import queryKey from "constants/queryKeys";

const useRoutineConfigGetQuery = (routineConfigId: string) => {
    return useSuspenseQuery({
        queryKey: [queryKey.getRoutineOne, routineConfigId],
        queryFn: async () => {
            const response = await getRoutineOne(routineConfigId);
            return response;
        },
        select: response => ({
            routineConfig: response,
        }),
    });
};

export default useRoutineConfigGetQuery;
