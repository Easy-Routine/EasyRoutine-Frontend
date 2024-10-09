import { useQuery } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { getWorkoutLibraryAll } from "services/workout-library";

const useGetWorkoutLibraryAllQuery = () => {
    return useQuery({
        queryKey: [queryKey.getWorkoutLibraryAll],
        queryFn: async () => {
            const data = await getWorkoutLibraryAll();
            return data;
        },
    });
};

export default useGetWorkoutLibraryAllQuery;
