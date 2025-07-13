import BasicButton from "headful/BasicButton/BasicButton";
import Text from "headful/Text/Text";
import {useRoutineCreate} from "./RoutineCreateProvider";
import useRoutineCreateMutation from "hooks/server/useRoutineCreateMutation";
import {useModal} from "headless/Modal/Modal";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";

const RoutineCreateModalButton = () => {
    const {routine} = useRoutineCreate();
    const {closeModal} = useModal();
    const navigate = useNavigate();

    const {mutateAsync: createRoutineMutate} = useRoutineCreateMutation();

    const handleButtonClick = async () => {
        await createRoutineMutate(routine);
        closeModal();
        navigate(ROUTES.CONFIG.LIST.PATH);
    };

    return (
        <BasicButton onClick={handleButtonClick}>
            <Text color="var(--text-white)">루틴 저장하기</Text>
        </BasicButton>
    );
};

export default RoutineCreateModalButton;
