import FlexBox from "headful/FlexBox/FlexBox";
import React, {MouseEventHandler} from "react";
import {ReactComponent as PenIcon} from "assets/image/pen.svg";
import Text from "headful/Text/Text";
import {useTheme} from "@emotion/react";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";

type RoutineConfigUpdateButtonButtonProps = {
    routineConfigId: string;
};

const RoutineConfigUpdateButton = ({
    routineConfigId,
}: RoutineConfigUpdateButtonButtonProps) => {
    const theme = useTheme();
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
            <PenIcon color={theme.color.gray.dark} />
            <Text color={theme.color.gray.dark}>루틴 수정하기</Text>
        </FlexBox>
    );
};

export default RoutineConfigUpdateButton;
