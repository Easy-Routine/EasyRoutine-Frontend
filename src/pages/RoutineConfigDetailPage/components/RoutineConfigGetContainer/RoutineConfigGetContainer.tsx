import FlexBox from "headful/FlexBox/FlexBox";
import WorkoutConfigAccordionList from "./WorkoutConfigAccordionList/WorkoutConfigAccordionList";
import useRoutineConfigGetQuery from "hooks/server/useRoutineConfigGetQuery";

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
        <FlexBox flexDirection="column" gap={20}>
            <WorkoutConfigAccordionList
                workoutConfigs={workoutConfigs}
                routineConfigId={routineConfigId}
            />
        </FlexBox>
    );
};

export default RoutineConfigGetContainer;
