import { useQuery } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { getWorkoutLibraryAll } from "services/workout-library";

const useGetWorkoutLibraryAllQuery = (category?: string) => {
    return useQuery({
        queryKey: [queryKey.getWorkoutLibraryAll, category],
        queryFn: async () => {
            const data = await getWorkoutLibraryAll(category);
            return data;
        },
    });
};

export default useGetWorkoutLibraryAllQuery;
