import FlexBox from "headful/FlexBox/FlexBox";
import WorkoutConfigAccordion from "./WorkoutConfigAccordion";
import useGetRoutineConfigOneQuery from "hooks/server/useGetRoutineConfigOneQuery";
import {useParams} from "react-router-dom";

const WorkoutConfigAccordionList = () => {
    const {routineConfigId} = useParams();
    const {data: routineConfigOneData} = useGetRoutineConfigOneQuery(
        routineConfigId as string,
    );

    const routineConfigOne = routineConfigOneData!;

    const workoutConfigAll = routineConfigOne.workoutConfigs;

    return (
        <FlexBox flexDirection="column" gap={20}>
            {workoutConfigAll.map(workoutConfig => (
                <WorkoutConfigAccordion
                    key={workoutConfig._id}
                    workoutConfig={workoutConfig}
                />
            ))}
        </FlexBox>
    );
};

export default WorkoutConfigAccordionList;
