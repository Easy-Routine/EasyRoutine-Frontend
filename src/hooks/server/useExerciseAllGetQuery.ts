import {useQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getExerciseAll} from "services/exercise";
import {ExerciseAllGetReq} from "types/exercise";

const useExerciseAllGetQuery = (ExerciseAllGetReq: ExerciseAllGetReq) => {
    const {category, name} = ExerciseAllGetReq;
    return useQuery({
        queryKey: [queryKey.getExerciseAll, category, name],
        queryFn: async () => {
            const data = await getExerciseAll(ExerciseAllGetReq);
            return data;
        },
    });
};

export default useExerciseAllGetQuery;
