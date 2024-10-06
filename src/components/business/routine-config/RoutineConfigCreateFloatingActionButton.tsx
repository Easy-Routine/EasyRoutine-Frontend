import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import ROUTES from "constants/routes";
import { useNavigate } from "react-router-dom";
import EmptyBoundary from "../EmptyBoundary";
import { RoutineConfig } from "types/config";
import useToast from "hooks/useToast";

const RoutineConfigCreateFloatingActionButton = () => {
    // TODO : 데이터 페칭
    const data: RoutineConfig[] | {} = [{}];

    const navigate = useNavigate();
    const { showToast } = useToast();
    const handleButtonClick = async () => {
        // TODO: routineConfig 데이터 생성
        showToast("루틴이 생성되었습니다.");
        navigate(ROUTES.CONFIG.DETAIL.PATH("1"));
    };

    return (
        <EmptyBoundary
            data={data}
            fallback={
                <FloatingActionButton
                    onButtonClick={handleButtonClick}
                    text={
                        <>
                            본인 만의 루틴이 있나요? <br /> 루틴을 생성해보세요!
                        </>
                    }
                />
            }
        >
            <FloatingActionButton onButtonClick={handleButtonClick} />
        </EmptyBoundary>
    );
};

export default RoutineConfigCreateFloatingActionButton;
