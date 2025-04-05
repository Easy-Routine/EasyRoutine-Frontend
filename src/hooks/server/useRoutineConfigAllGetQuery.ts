import {useSuspenseQuery} from "@tanstack/react-query";
import {getRoutineConfigAll} from "services/routine-config";
import queryKey from "constants/queryKeys";

const useRoutineConfigAllGetQuery = () => {
    return useSuspenseQuery({
        queryKey: [queryKey.getRoutineConfigAll],
        queryFn: async () => {
            const response = await getRoutineConfigAll();
            return response;
        },
        select: response => ({
            routineConfigs: response ?? [],
        }),
    });
};

export default useRoutineConfigAllGetQuery;
