import {useQuery} from "@tanstack/react-query";
import queryKey from "constants/queryKeys";
import {getExerciseAll} from "services/exercise";

const useExerciseAllGetQuery = (name?: string, category?: string) => {
    return useQuery({
        queryKey: [queryKey.getExerciseAll, category, name],
        queryFn: async () => {
            const data = await getExerciseAll({
                name,
                category,
            });
            return data;
        },
    });
};

export default useExerciseAllGetQuery;
