import {useSuspenseQuery} from "@tanstack/react-query";
import {getRoutineOne} from "services/routine";
import queryKey from "constants/queryKeys";

const useRoutineGetQuery = (routineId: string) => {
    return useSuspenseQuery({
        queryKey: [queryKey.getRoutineOne, routineId],
        queryFn: async () => {
            const response = await getRoutineOne(routineId);
            return response;
        },
        select: response => ({
            routine: response,
        }),
    });
};

export default useRoutineGetQuery;
