import useRoutineConfigGetQuery from "hooks/server/useRoutineConfigGetQuery";
import RoutineProgressContainer from "./RoutinePregressContainer/RoutineProgressContainer";
import RoutineProgressProvider from "./RoutinePregressContainer/RoutineProgressProvider";

type RoutineConfigGetContainerProps = {
    routineConfigId: string;
};

const RoutineConfigGetContainer = ({
    routineConfigId,
}: RoutineConfigGetContainerProps) => {
    const {data} = useRoutineConfigGetQuery(routineConfigId);
    const routineConfig = data.routineConfig!;

    return (
        <>
            <RoutineProgressProvider routineConfig={routineConfig}>
                <RoutineProgressContainer />
            </RoutineProgressProvider>
        </>
    );
};

export default RoutineConfigGetContainer;
