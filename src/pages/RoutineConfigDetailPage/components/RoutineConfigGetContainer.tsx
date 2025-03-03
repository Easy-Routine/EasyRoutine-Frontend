import FlexBox from "headful/FlexBox/FlexBox";
import WorkoutConfigAccordion from "./WorkoutConfigAccordion";
import useGetRoutineConfigOneQuery from "hooks/server/useGetRoutineConfigOneQuery";
import WorkoutConfigAccordionList from "./WorkoutConfigAccordionList";

type RoutineConfigGetContainerProps = {
    routineConfigId: string;
};

const RoutineConfigGetContainer = ({
    routineConfigId,
}: RoutineConfigGetContainerProps) => {
    const {data: routineConfigOneData} =
        useGetRoutineConfigOneQuery(routineConfigId);

    const routineConfigOne = routineConfigOneData!;

    const workoutConfigs = routineConfigOne.workoutConfigs;

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
