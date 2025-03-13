import FlexBox from "headful/Flex/Flex";
import useRoutineConfigAllGetQuery from "hooks/server/useRoutineConfigAllGetQuery";
import RoutineConfigAccordion from "./RoutineConfigAccordionList/RoutineConfigAccordion/RoutineConfigAccordion";

const RoutineConfigAllGetContainer = () => {
    const {data} = useRoutineConfigAllGetQuery();

    const routineConfigs = data.routineConfigs!;

    return (
        <FlexBox flexDirection="column" gap={20}>
            {routineConfigs.map(routineConfig => (
                <RoutineConfigAccordion
                    key={routineConfig._id}
                    routineConfig={routineConfig}
                />
            ))}
        </FlexBox>
    );
};

export default RoutineConfigAllGetContainer;
