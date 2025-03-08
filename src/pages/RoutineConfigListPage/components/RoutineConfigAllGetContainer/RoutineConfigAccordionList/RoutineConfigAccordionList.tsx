import {RoutineConfig} from "types/model";
import RoutineConfigAccordion from "./RoutineConfigAccordion/RoutineConfigAccordion";

type RoutineConfigAccordionListProps = {
    routineConfigs: RoutineConfig[];
};

const RoutineConfigAccordionList = ({
    routineConfigs,
}: RoutineConfigAccordionListProps) => {
    return (
        <>
            {routineConfigs.map(routineConfig => (
                <RoutineConfigAccordion
                    key={routineConfig._id}
                    routineConfig={routineConfig}
                />
            ))}
        </>
    );
};

export default RoutineConfigAccordionList;
