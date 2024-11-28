import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import ROUTES from "constants/routes";
import { useNavigate } from "react-router-dom";
import EmptyBoundary from "../EmptyBoundary";
import useToast from "hooks/useToast";
import useCreateRoutineConfigMutation from "hooks/server/useCreateRoutineConfigOneMutation";
import useGetRoutineConfigAllQuery from "hooks/server/useGetRoutineConfigAllQuery";
import { Color } from "types/enum";
import useThrowError from "hooks/client/useThrowError";
import { RoutineConfig } from "types/model";

const RoutineConfigCreateFloatingActionButton = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const { throwError } = useThrowError();
    const { mutateAsync: createRoutineConfigOneMutate } =
        useCreateRoutineConfigMutation();

    const { data: routineConfigAllData } = useGetRoutineConfigAllQuery();

    const handleButtonClick = async () => {
        const userId = localStorage.getItem("userId");

        await throwError<RoutineConfig | undefined>({
            fetchFn: async () =>
                await createRoutineConfigOneMutate({
                    name: "새 루틴",
                    color: Color.VIOLET,
                    userId: userId as string,
                }),

            onSuccess: (data) => {
                showToast("루틴이 생성되었습니다.", "success");
                navigate(ROUTES.CONFIG.DETAIL.PATH(data!._id));
            },
        });
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
