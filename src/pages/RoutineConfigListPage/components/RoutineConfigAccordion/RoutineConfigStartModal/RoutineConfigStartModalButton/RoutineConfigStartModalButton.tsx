import FlexBox from "headful/Flex/Flex";
import Text from "headful/Text/Text";
import {ReactComponent as RunIcon} from "assets/image/run.svg";
import {RoutineConfig} from "types/model";

type RoutineConfigStartModalButtonProps = {
    routineConfig: RoutineConfig;
};

const RoutineConfigStartModalButton = ({
    routineConfig,
}: RoutineConfigStartModalButtonProps) => {
    const {name} = routineConfig;
    return (
        <FlexBox gap={16} align="center">
            <RunIcon color={"#82B1FF"} />
            <Text color={"var(--color-primary)"}>루틴 시작하기</Text>
        </FlexBox>
    );
};

export default RoutineConfigStartModalButton;
