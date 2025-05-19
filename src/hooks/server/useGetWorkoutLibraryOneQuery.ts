import {useSuspenseQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getExerciseOne} from "services/exercise";

const usegetExerciseOneQuery = (workoutLibraryId: string) => {
    return useSuspenseQuery({
        queryKey: [queryKey.getExerciseOne, workoutLibraryId],
        queryFn: async () => {
            const data = await getExerciseOne(workoutLibraryId);
            return data;
        },
    });
};

export default usegetExerciseOneQuery;
