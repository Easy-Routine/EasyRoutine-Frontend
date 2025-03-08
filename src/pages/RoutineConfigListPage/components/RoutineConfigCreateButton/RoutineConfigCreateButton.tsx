import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";
import React from "react";
import {ReactComponent as PlusIcon} from "assets/image/plus.svg";
import {useNavigate} from "react-router-dom";
import useToast from "hooks/useToast";
import useCreateRoutineConfigMutation from "hooks/server/useCreateRoutineConfigOneMutation";
import useRoutineConfigAllGetQuery from "hooks/server/useRoutineConfigAllGetQuery";
import {Color} from "types/enum";
import ROUTES from "constants/routes";

const RoutineConfigCreateButton = () => {
    const {showToast} = useToast();
    const navigate = useNavigate();

    const {mutateAsync: createRoutineConfigOneMutate} =
        useCreateRoutineConfigMutation();

    const {data: routineConfigAllData} = useRoutineConfigAllGetQuery();

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
        <FloatingCircleButton
            width={64}
            height={64}
            onFloatingCircleButtonClick={handleButtonClick}
        >
            <PlusIcon color={"var(--text-white)"} />
        </FloatingCircleButton>
    );
};

export default RoutineConfigCreateButton;
