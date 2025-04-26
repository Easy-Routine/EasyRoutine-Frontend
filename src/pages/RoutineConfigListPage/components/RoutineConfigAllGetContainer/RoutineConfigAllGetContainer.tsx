import FlexBox from "headful/Flex/Flex";
import useRoutineConfigAllGetQuery from "hooks/server/useRoutineConfigAllGetQuery";
import RoutineConfigAccordion from "../RoutineConfigAccordion/RoutineConfigAccordion";
import {RoutineConfig} from "types/model";

type RoutineConfigAllGetContainerProps = {
    children: (routineConfigs: RoutineConfig[]) => React.ReactNode;
};

const RoutineConfigAllGetContainer = ({
    children,
}: RoutineConfigAllGetContainerProps) => {
    const {data} = useRoutineConfigAllGetQuery();

    const routineConfigs = data.routineConfigs!;

    return <>{children(routineConfigs)}</>;
};

export default RoutineConfigAllGetContainer;
