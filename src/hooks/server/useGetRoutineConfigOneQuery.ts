import {useSuspenseQuery} from "@tanstack/react-query";
import {getRoutineConfigOne} from "services/routine-config";
import queryKey from "constants/queryKeys";

const useGetRoutineConfigOneQuery = (routineConfigId: string) => {
    return useSuspenseQuery({
        queryKey: [queryKey.getRoutineConfigOne, routineConfigId],
        queryFn: async () => {
            const response = await getRoutineConfigOne(routineConfigId);
            return response;
        },
        select: response => ({
            routineConfig: response,
        }),
    });
};

export default useGetRoutineConfigOneQuery;
