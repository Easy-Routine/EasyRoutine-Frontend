import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import EmptyBoundary from "../EmptyBoundary";
import useCreateRoutineConfigMutation from "hooks/server/useCreateRoutineConfigOneMutation";
import useGetRoutineConfigAllQuery from "hooks/server/useRoutineConfigAllGetQuery";
import {Color} from "types/enum";
import {useNavigate} from "react-router-dom";
import useToast from "hooks/useToast";
import ROUTES from "constants/routes";

const RoutineConfigCreateFloatingActionButton = () => {
    const {showToast} = useToast();
    const navigate = useNavigate();

    const {mutateAsync: createRoutineConfigOneMutate} =
        useCreateRoutineConfigMutation();

    const {data: routineConfigAllData} = useGetRoutineConfigAllQuery();

    const handleButtonClick = async () => {
        const userId = localStorage.getItem("userId");

        const response = await createRoutineConfigOneMutate({
            name: "새 루틴",
            color: Color.VIOLET,
            userId: userId as string,
        });

        showToast("루틴이 생성되었습니다.", "success");
        navigate(ROUTES.CONFIG.DETAIL.PATH(response!._id));
    };

    return (
        <EmptyBoundary
            data={routineConfigAllData}
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
