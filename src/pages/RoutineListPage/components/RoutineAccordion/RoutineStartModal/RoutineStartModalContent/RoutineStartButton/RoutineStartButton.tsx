import ROUTES from "constants/routes";
import ConfirmModalClose from "headful/ConfirmModal/ConfirmModalClose/ConfirmModalClose";
import React from "react";
import {useNavigate} from "react-router-dom";
import {Routine} from "types/model";

type RoutineStartButtonProps = {
    routine: Routine;
};

const RoutineStartButton = ({routine}: RoutineStartButtonProps) => {
    const {id} = routine;

    const navigate = useNavigate();

    const handleRoutineProgressModalConfirmButtonClick = () => {
        navigate(ROUTES.PROGRESS.PATH(id));
    };

    return (
        <ConfirmModalClose.Confirm
            onConfirmButtonClick={handleRoutineProgressModalConfirmButtonClick}
        >
            확인
        </ConfirmModalClose.Confirm>
    );
};

export default RoutineStartButton;
