import { useQuery } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { useRecoilValue } from "recoil";
import { getWorkoutLibraryAll } from "services/workout-library";
import { userContextStore } from "store/userContextStore";

const useGetWorkoutLibraryAllQuery = (name?: string, category?: string) => {
    const userContext = useRecoilValue(userContextStore);
    return useQuery({
        queryKey: [queryKey.getWorkoutLibraryAll, category, name],
        queryFn: async () => {
            const data = await getWorkoutLibraryAll({
                name,
                category,
                userId: userContext.userId as string,
            });
            return data;
        },
    });
};

export default useGetWorkoutLibraryAllQuery;
