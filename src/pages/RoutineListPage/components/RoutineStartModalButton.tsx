import FlexBox from "headful/Flex/Flex";
import Text from "headful/Text/Text";
import {ReactComponent as RunIcon} from "assets/image/run.svg";
import {RoutineAllGetItem} from "types/routine";

type RoutineStartModalButtonProps = {
    routineAllGetRes: RoutineAllGetItem;
};

const RoutineStartModalButton = ({
    routineAllGetRes,
}: RoutineStartModalButtonProps) => {
    const {name} = routineAllGetRes;
    return (
        <FlexBox gap={16} align="center">
            <RunIcon color={"#82B1FF"} />
            <Text color={"var(--color-primary)"}>루틴 시작하기</Text>
        </FlexBox>
    );
};

export default RoutineStartModalButton;
