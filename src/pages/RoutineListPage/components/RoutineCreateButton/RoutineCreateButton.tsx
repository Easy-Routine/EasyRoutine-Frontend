import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";
import {ReactComponent as PlusIcon} from "assets/image/plus.svg";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";

const RoutineCreateButton = () => {
    const navigate = useNavigate();

    const handleButtonClick = async () => {
        navigate(ROUTES.CONFIG.CREATE.PATH);
    };

    return <FloatingCircleButton onButtonClick={handleButtonClick} />;
};

export default RoutineCreateButton;
