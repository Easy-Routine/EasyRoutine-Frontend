import BasicButton from "headful/BasicButton/BasicButton";
import {useModal} from "headless/Modal/Modal";
import {useRoutineProgress} from "pages/RoutineProgressPage/components/RoutineProgressProvider";
import React from "react";

const RoutineCompleteButton = () => {
    const {openModal} = useModal();

    const handleButtonClick = () => {
        openModal();
    };

    return <BasicButton onClick={handleButtonClick}>루틴 완료</BasicButton>;
};

export default RoutineCompleteButton;
