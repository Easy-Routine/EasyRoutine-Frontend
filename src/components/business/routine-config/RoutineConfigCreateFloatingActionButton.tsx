import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import ROUTES from "constants/routes";
import { useNavigate } from "react-router-dom";
import EmptyBoundary from "../EmptyBoundary";
import useToast from "hooks/useToast";
import useCreateRoutineConfigMutation from "hooks/server/useCreateRoutineConfigOneMutation";
import useGetRoutineConfigAllQuery from "hooks/server/useGetRoutineConfigAllQuery";
import { Color } from "type/Color";

const RoutineConfigCreateFloatingActionButton = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const { mutateAsync: createRoutineConfigOneMutate } =
        useCreateRoutineConfigMutation();

    const { data: routineConfigAllData } = useGetRoutineConfigAllQuery();

    const routineConfigAll = routineConfigAllData ?? [];

    const handleButtonClick = async () => {
        try {
            const userId = localStorage.getItem("userId");

            const newRoutineConfig = await createRoutineConfigOneMutate({
                name: "새 루틴",
                color: Color.VIOLET,
                userId: userId as string,
            });

            showToast("루틴이 생성되었습니다.", "success");

            navigate(
                ROUTES.CONFIG.DETAIL.PATH(newRoutineConfig?._id as string)
            );
        } catch (e) {
            showToast("루틴을 생성하던 중 오류가 발생했습니다.", "error");
        }
    };

    return (
        <EmptyBoundary
            data={routineConfigAll}
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
