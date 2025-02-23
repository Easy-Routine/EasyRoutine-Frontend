import FlexBox from "headful/FlexBox/FlexBox";
import WorkoutConfigAccordion from "./WorkoutConfigAccordion";
import useGetRoutineConfigOneQuery from "hooks/server/useGetRoutineConfigOneQuery";

type WorkoutConfigAccordionListProps = {
    routineConfigId: string;
};

const WorkoutConfigAccordionList = ({
    routineConfigId,
}: WorkoutConfigAccordionListProps) => {
    const {data: routineConfigOneData} =
        useGetRoutineConfigOneQuery(routineConfigId);

    const routineConfigOne = routineConfigOneData!;

    const workoutConfigAll = routineConfigOne.workoutConfigs;

    return (
        <FlexBox flexDirection="column" gap={20}>
            {workoutConfigAll.map(workoutConfig => (
                <WorkoutConfigAccordion
                    key={workoutConfig._id}
                    routineConfigId={routineConfigId}
                    workoutConfig={workoutConfig}
                />
            ))}
        </FlexBox>
    );
};

export default WorkoutConfigAccordionList;
