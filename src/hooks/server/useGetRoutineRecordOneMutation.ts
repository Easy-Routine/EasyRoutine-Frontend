import { useSuspenseQuery } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { getRoutineRecordOne } from "services/routine-record";

const useGetRoutineRecordOneQuery = (routineRecordId: string) => {
    return useSuspenseQuery({
        queryKey: [queryKey.getRoutineRecordOne, routineRecordId],
        queryFn: async () => {
            const data = await getRoutineRecordOne(routineRecordId);
            return data;
        },
    });
};

export default useGetRoutineRecordOneQuery;
