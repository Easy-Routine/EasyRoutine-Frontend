import { useQuery } from "@tanstack/react-query";
import { getRoutineConfigAll } from "services/routine-config";
import queryKey from "constants/queryKeys";
import { useRecoilValue } from "recoil";
import { userContextStore } from "store/userContextStore";

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
