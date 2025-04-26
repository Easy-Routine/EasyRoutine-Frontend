import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import {ReactComponent as PenIcon} from "assets/image/pen.svg";
import Text from "headful/Text/Text";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";
import {RoutineConfig} from "types/model";

/*
    루틴 설정을 수정하는 페이지로 이동하는 버튼
*/

type RoutineConfigUpdateButtonButtonProps = {
    routineConfig: RoutineConfig;
};

const RoutineConfigUpdateButton = ({
    routineConfig,
}: RoutineConfigUpdateButtonButtonProps) => {
    const {_id} = routineConfig;

    const navigate = useNavigate();

    const handleRoutineUpdateButtonClick: MouseEventHandler<
        HTMLDivElement
    > = e => {
        e.stopPropagation();
        navigate(ROUTES.CONFIG.DETAIL.PATH(_id));
    };

    return (
        <FlexBox
            gap={16}
            alignItems="center"
            onClick={handleRoutineUpdateButtonClick}
        >
            <PenIcon color={"#7D7D7D"} />
            <Text color={"#7D7D7D"}>루틴 수정하기</Text>
        </FlexBox>
    );
};

export default RoutineConfigUpdateButton;
