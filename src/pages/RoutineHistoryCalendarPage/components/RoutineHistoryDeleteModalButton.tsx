import FlexBox from "headful/Flex/Flex";
import Text from "headful/Text/Text";
import {ReactComponent as RunIcon} from "assets/image/run.svg";
import {Routine, RoutineHistory} from "types/model";
import {RoutineAllGetRes} from "types/routine";

type RoutineHistoryDeleteModalButtonProps = {
    routineHistory: RoutineHistory;
};

const RoutineHistoryDeleteModalButton = ({
    routineHistory,
}: RoutineHistoryDeleteModalButtonProps) => {
    const {name} = routineHistory;
    return (
        <FlexBox gap={16} align="center">
            <RunIcon color={"#FF0000"} />
            <Text color={"#FF0000"}>기록 삭제하기</Text>
        </FlexBox>
    );
};

export default RoutineHistoryDeleteModalButton;
