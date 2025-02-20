import FlexBox from "headful/FlexBox/FlexBox";
import useGetRoutineConfigAllQuery from "hooks/server/useGetRoutineConfigAllQuery";
import RoutineConfigAccordion from "./RoutineConfigAccordion";

const RoutineConfigAccordionList = () => {
    const {data: routineConfigAllData} = useGetRoutineConfigAllQuery();

    const routineConfigAll = routineConfigAllData!;

    return (
        <FlexBox flexDirection="column" gap={20}>
            {routineConfigAll.map(routineConfig => (
                <RoutineConfigAccordion
                    key={routineConfig._id}
                    routineConfig={routineConfig}
                />
            ))}
        </FlexBox>
    );
};

export default RoutineConfigAccordionList;
