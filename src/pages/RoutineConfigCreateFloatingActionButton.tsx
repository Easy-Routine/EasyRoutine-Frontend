import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import ROUTES from "constants/routes";
import React from "react";
import { useNavigate } from "react-router-dom";

const RoutineConfigCreateFloatingActionButton = () => {
    const navigate = useNavigate();
    const handleButtonClick = async () => {
        // TODO: routineConfig 데이터 생성
        navigate(ROUTES.CONFIG.DETAIL.PATH("1"));
    };

    return <FloatingActionButton onButtonClick={handleButtonClick} />;
};

export default RoutineConfigCreateFloatingActionButton;
