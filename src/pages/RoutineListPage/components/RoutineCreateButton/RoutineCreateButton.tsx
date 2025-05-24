import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";
import {ReactComponent as PlusIcon} from "assets/image/plus.svg";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";

const RoutineCreateButton = () => {
    const navigate = useNavigate();

    const handleButtonClick = async () => {
        navigate(ROUTES.CONFIG.CREATE.PATH);
    };

    return (
        <FloatingCircleButton
            width={64}
            height={64}
            onFloatingCircleButtonClick={handleButtonClick}
        >
            <PlusIcon color={"var(--text-white)"} />
        </FloatingCircleButton>
    );
};

export default RoutineCreateButton;
