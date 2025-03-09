import useRoutineConfigGetQuery from "hooks/server/useRoutineConfigGetQuery";
import RoutineProgressContainer from "./RoutinePregressContainer/RoutineProgressContainer";

type RoutineConfigGetContainerProps = {
    routineConfigId: string;
};

const RoutineConfigGetContainer = ({
    routineConfigId,
}: RoutineConfigGetContainerProps) => {
    const {data} = useRoutineConfigGetQuery(routineConfigId);
    const routineConfig = data.routineConfig!;

    const workoutConfigs = routineConfig.workoutConfigs;

    return (
        <>
            <RoutineProgressContainer routineConfig={routineConfig} />
        </>
    );
};

export default RoutineConfigGetContainer;
