import FloatingCircleButton from "headful/FloatingCircleButton/FloatingCircleButton";
import {useBottomSheet} from "headless/BottomSheet/BottomSheet";

const ExerciseCreateModalTrigger = () => {
    const {open} = useBottomSheet();

    return <FloatingCircleButton onButtonClick={() => open()} />;
};

export default ExerciseCreateModalTrigger;
