import {useQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getExerciseAll} from "services/exercise";
import {ExerciseAllGetReq} from "types/exercise";

const useExerciseAllGetQuery = (ExerciseAllGetReq: ExerciseAllGetReq) => {
    const {category, keyword} = ExerciseAllGetReq;
    return useQuery({
        queryKey: [queryKey.getExerciseAll, category, keyword],
        queryFn: async () => {
            const data = await getExerciseAll(ExerciseAllGetReq);
            return data;
        },

        select: data => {
            return {
                exercises: data.result.contents,
            };
        },
    });
};

export default useExerciseAllGetQuery;
