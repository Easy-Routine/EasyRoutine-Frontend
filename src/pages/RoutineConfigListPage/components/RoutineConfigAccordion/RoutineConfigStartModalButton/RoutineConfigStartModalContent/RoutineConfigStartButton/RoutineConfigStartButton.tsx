import ROUTES from "constants/routes";
import ConfirmModalClose from "headful/ConfirmModal/ConfirmModalClose/ConfirmModalClose";
import React from "react";
import {useNavigate} from "react-router-dom";
import {RoutineConfig} from "types/model";

type RoutineConfigStartButtonProps = {
    routineConfig: RoutineConfig;
};

const RoutineConfigStartButton = ({
    routineConfig,
}: RoutineConfigStartButtonProps) => {
    const {_id} = routineConfig;

    const navigate = useNavigate();

    const handleRoutineProgressModalConfirmButtonClick = () => {
        navigate(ROUTES.PROGRESS.PATH(_id));
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
