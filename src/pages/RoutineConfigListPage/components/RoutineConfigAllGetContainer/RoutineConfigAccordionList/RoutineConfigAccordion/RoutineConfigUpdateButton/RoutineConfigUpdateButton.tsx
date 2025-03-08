import FlexBox from "headful/FlexBox/FlexBox";
import {MouseEventHandler} from "react";
import {ReactComponent as PenIcon} from "assets/image/pen.svg";
import Text from "headful/Text/Text";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";

/*
    루틴 설정을 수정하는 페이지로 이동하는 버튼
*/

type RoutineConfigUpdateButtonButtonProps = {
    routineConfigId: string;
};

const RoutineConfigUpdateButton = ({
    routineConfigId,
}: RoutineConfigUpdateButtonButtonProps) => {
    const navigate = useNavigate();

    const handleRoutineUpdateButtonClick: MouseEventHandler<
        HTMLDivElement
    > = e => {
        e.stopPropagation();
        navigate(ROUTES.CONFIG.DETAIL.PATH(routineConfigId));
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
