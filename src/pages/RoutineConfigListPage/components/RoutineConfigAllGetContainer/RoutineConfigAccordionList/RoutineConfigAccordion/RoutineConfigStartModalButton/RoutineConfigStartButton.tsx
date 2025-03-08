import ROUTES from "constants/routes";
import ConfirmModalClose from "headful/ConfirmModal/ConfirmModalClose/ConfirmModalClose";
import React from "react";
import {useNavigate} from "react-router-dom";

type RoutineConfigStartButtonProps = {
    routineConfigId: string;
};

const RoutineConfigStartButton = ({
    routineConfigId,
}: RoutineConfigStartButtonProps) => {
    const navigate = useNavigate();

    const handleRoutineProgressModalConfirmButtonClick = () => {
        navigate(ROUTES.PROGRESS.PATH(routineConfigId));
    };

    return (
        <ConfirmModalClose.Confirm
            onConfirmButtonClick={handleRoutineProgressModalConfirmButtonClick}
        >
            확인
        </ConfirmModalClose.Confirm>
    );
};

export default RoutineConfigStartButton;
