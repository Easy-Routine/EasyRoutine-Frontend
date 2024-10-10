import { useQuery } from "@tanstack/react-query";
import { getRoutineConfigAll } from "services/routine-config";
import queryKey from "constants/queryKeys";

const useGetRoutineConfigAllQuery = () => {
    return useQuery({
        queryKey: [queryKey.getRoutineConfigAll],
        queryFn: async () => {
            const data = await getRoutineConfigAll();
            return data;
        },
    });
};

export default useGetRoutineConfigAllQuery;
