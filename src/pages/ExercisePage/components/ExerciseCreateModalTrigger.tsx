import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";
import {useModal} from "headless/Modal/Modal";

const ExerciseCreateModalTrigger = () => {
    const {openModal} = useModal();

    return <FloatingCircleButton onButtonClick={() => openModal()} />;
};

export default ExerciseCreateModalTrigger;
