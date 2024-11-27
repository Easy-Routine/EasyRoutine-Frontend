import { useSuspenseQuery } from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import { getWorkoutLibraryOne } from "services/workout-library";

const useGetWorkoutLibraryOneQuery = (workoutLibraryId: string) => {
    return useSuspenseQuery({
        queryKey: [queryKey.getWorkoutLibraryOne, workoutLibraryId],
        queryFn: async () => {
            const data = await getWorkoutLibraryOne(workoutLibraryId);
            return data;
        },
    });
};

export default useGetWorkoutLibraryOneQuery;
