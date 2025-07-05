import {useSuspenseQuery} from "@tanstack/react-query";
import {getRoutineOne} from "services/routine";
import queryKey from "constants/queryKeys";

const useRoutineGetQuery = (routineId: string) => {
    return useSuspenseQuery({
        queryKey: [queryKey.getRoutineOne, routineId],
        queryFn: async () => {
            const data = await getRoutineOne(routineId);
            return data;
        },
        select: data => ({
            routine: data.result.contents,
        }),
    });
};

export default useRoutineGetQuery;
