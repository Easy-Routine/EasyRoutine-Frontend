import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import EmptyBoundary from "../EmptyBoundary";
import useCreateRoutineMutation from "hooks/server/useCreateRoutineOneMutation";
import useGetRoutineAllQuery from "hooks/server/useRoutineAllGetQuery";
import {Color} from "types/enum";
import {useNavigate} from "react-router-dom";
import useToast from "hooks/useToast";
import ROUTES from "constants/routes";

const RoutineCreateFloatingActionButton = () => {
    const {showToast} = useToast();
    const navigate = useNavigate();

    const {mutateAsync: createRoutineOneMutate} = useCreateRoutineMutation();

    const {data: routineAllData} = useGetRoutineAllQuery();

    const handleButtonClick = async () => {
        const userId = localStorage.getItem("userId");

        const response = await createRoutineOneMutate({
            name: "새 루틴",
            color: Color.VIOLET,
            userId: userId as string,
        });

        showToast("루틴이 생성되었습니다.", "success");
        navigate(ROUTES.CONFIG.DETAIL.PATH(response!.id));
    };

    return (
        <EmptyBoundary
            data={routineAllData}
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

export default RoutineCreateFloatingActionButton;
