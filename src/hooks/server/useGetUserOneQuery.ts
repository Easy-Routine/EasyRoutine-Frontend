import { useQuery } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { getUserOne } from "services";

const useGetUserOneQuery = () => {
    return useQuery({
        queryKey: [queryKey.getUserOne, localStorage.getItem("userId")],
        queryFn: async () => {
            const data = await getUserOne();
            return data;
        },
    });
};

export default useGetUserOneQuery;
