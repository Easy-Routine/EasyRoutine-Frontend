import BasicButton from "headful/BasicButton/BasicButton";
import Text from "headful/Text/Text";
import {useRoutineUpdate} from "./RoutineUpdateProvider";
import useRoutineUpdateMutation from "hooks/server/useRoutineUpdateMutation";
import {useModal} from "headless/Modal/Modal";

const RoutineUpdateModalButton = () => {
    const {routine} = useRoutineUpdate();
    const {openModal} = useModal();

    const {mutateAsync: UpdateRoutineMutate} = useRoutineUpdateMutation();

    const handleButtonClick = async () => {
        // await UpdateRoutineMutate(routine);
        openModal();
    };

    return (
        <BasicButton onClick={handleButtonClick}>
            <Text color="var(--text-white)">루틴 수정하기</Text>
        </BasicButton>
    );
};

export default RoutineUpdateModalButton;
