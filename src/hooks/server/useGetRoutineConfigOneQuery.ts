import { useQuery } from "@tanstack/react-query";
import { getRoutineConfigOne } from "services/routine-config";
import queryKey from "constants/queryKeys";

const useRoutineConfigOneQuery = (routineConfigId: string) => {
    return useQuery({
        queryKey: [queryKey.getRoutineConfigOne, routineConfigId],
        queryFn: async () => {
            const data = await getRoutineConfigOne(routineConfigId);
            return data;
        },
    });
};

export default useRoutineConfigOneQuery;
