import useRoutineGetQuery from "hooks/server/useRoutineGetQuery";
import RoutineProgressContainer from "../RoutinePregressContainer/RoutineProgressContainer";
import RoutineProgressProvider from "../RoutinePregressContainer/RoutineProgressProvider";

type RoutineGetContainerProps = {
    routineId: string;
};

const RoutineGetContainer = ({routineId}: RoutineGetContainerProps) => {
    const {data} = useRoutineGetQuery(routineId);
    const routine = data.routine!;

    return (
        <>
            <RoutineProgressProvider routine={routine}>
                <RoutineProgressContainer />
            </RoutineProgressProvider>
        </>
    );
};

export default RoutineGetContainer;
