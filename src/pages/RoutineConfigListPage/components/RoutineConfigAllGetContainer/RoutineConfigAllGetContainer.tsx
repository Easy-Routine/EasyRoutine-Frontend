import FlexBox from "headful/FlexBox/FlexBox";
import RoutineConfigAccordionList from "./RoutineConfigAccordionList";
import useRoutineConfigAllGetQuery from "hooks/server/useRoutineConfigAllGetQuery";

const RoutineConfigAllGetContainer = () => {
    const {data} = useRoutineConfigAllGetQuery();

    const routineConfigs = data.routineConfigs!;

    return (
        <FlexBox flexDirection="column" gap={20}>
            <RoutineConfigAccordionList routineConfigs={routineConfigs} />
        </FlexBox>
    );
};

export default RoutineConfigAllGetContainer;
