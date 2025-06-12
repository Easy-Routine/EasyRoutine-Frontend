import CircleButton from "headful/CircleButton/CircleButton";
import {ReactComponent as PlusIcon} from "assets/image/plus.svg";
import {useModal} from "headless/Modal/Modal";
import Flex from "headful/Flex/Flex";

const RoutineExerciseAddModalButton = () => {
    const {openModal} = useModal();

    const handleButtonClick = () => {
        openModal();
    };

    return (
        <Flex justify="center">
            <CircleButton
                width={40}
                height={40}
                onCircleButtonClick={handleButtonClick}
            >
                <PlusIcon color={"var(--text-white)"} width={20} height={20} />
            </CircleButton>
        </Flex>
    );
};

export default RoutineExerciseAddModalButton;
