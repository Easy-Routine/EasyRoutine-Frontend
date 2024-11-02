import { useQuery } from "@tanstack/react-query";
import { getRoutineConfigAll } from "services/routine-config";
import queryKey from "constants/queryKeys";
import { useRecoilValue } from "recoil";
import { userContextStore } from "store/userContextStore";

const useGetRoutineConfigAllQuery = () => {
    const userContext = useRecoilValue(userContextStore);
    return useQuery({
        queryKey: [queryKey.getRoutineConfigAll],
        queryFn: async () => {
            const data = await getRoutineConfigAll({
                userId: userContext.userId as string,
            });
            return data;
        },
    });
};

export default useGetRoutineConfigAllQuery;
