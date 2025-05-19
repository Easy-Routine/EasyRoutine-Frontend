import {useSuspenseQuery} from "@tanstack/react-query";
import {getRoutineAll} from "services/routine";
import queryKey from "constants/queryKeys";

const useRoutineConfigAllGetQuery = () => {
    return useSuspenseQuery({
        queryKey: [queryKey.getRoutineAll],
        queryFn: async () => {
            const response = await getRoutineAll();
            return response;
        },
        select: response => ({
            routineConfigs: response ?? [],
        }),
    });
};

export default useRoutineConfigAllGetQuery;
