import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import {ReactComponent as PenIcon} from "assets/image/pen.svg";
import Text from "headful/Text/Text";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";
import {RoutineHistory} from "types/model";
import Flex from "headful/Flex/Flex";

/*
    루틴 설정을 수정하는 페이지로 이동하는 버튼
*/

type RoutineHistoryDetailMoveButtonProps = {
    routineHistory: RoutineHistory;
};

const RoutineHistoryDetailMoveButton = ({
    routineHistory,
}: RoutineHistoryDetailMoveButtonProps) => {
    const {id} = routineHistory;

    const navigate = useNavigate();

    const handleRoutineHistoryDetailButtonClick: MouseEventHandler<
        HTMLDivElement
    > = e => {
        e.stopPropagation();
        navigate(ROUTES.CONFIG.DETAIL.PATH(id.toString()));
    };

    return (
        <Flex
            gap={16}
            align="center"
            onClick={handleRoutineHistoryDetailButtonClick}
        >
            <PenIcon color={"#7D7D7D"} />
            <Text color={"#7D7D7D"}>루틴 수정하기</Text>
        </Flex>
    );
};

export default RoutineHistoryDetailMoveButton;
