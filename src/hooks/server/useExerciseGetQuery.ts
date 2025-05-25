import {useSuspenseQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getExerciseOne} from "services/exercise";

const useExerciseGetQuery = (exerciseId: string) => {
    return useSuspenseQuery({
        queryKey: [queryKey.getExerciseOne, exerciseId],
        queryFn: async () => {
            const data = await getExerciseOne(exerciseId);
            return data;
        },
    });
};

export default useExerciseGetQuery;
