import {useSuspenseQuery} from "@tanstack/react-query";
import {getRoutineAll} from "services/routine";
import queryKey from "constants/queryKeys";

const useRoutineAllGetQuery = () => {
    return useSuspenseQuery({
        queryKey: [queryKey.getRoutineAll],
        queryFn: async () => {
            const response = await getRoutineAll();
            return response;
        },
        select: response => ({
            routines: response ?? [],
        }),
    });
};

export default useRoutineAllGetQuery;
