import WorkoutConfigAccordion from "pages/RoutineConfigDetailPage/components/RoutineConfigGetContainer/WorkoutConfigAccordionList/WorkoutConfigAccordion/WorkoutConfigAccordion";
import {WorkoutConfig} from "types/model";

type WorkoutConfigAccordionListProps = {
    workoutConfigs: WorkoutConfig[];
    routineConfigId: string;
};

const WorkoutConfigAccordionList = ({
    workoutConfigs,
    routineConfigId,
}: WorkoutConfigAccordionListProps) => {
    return (
        <>
            {workoutConfigs.map(workoutConfig => (
                <WorkoutConfigAccordion
                    key={workoutConfig._id}
                    routineConfigId={routineConfigId}
                    workoutConfig={workoutConfig}
                />
            ))}
        </>
    );
};

export default WorkoutConfigAccordionList;
