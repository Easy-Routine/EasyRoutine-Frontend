import BasicButton from "headful/BasicButton/BasicButton";
import {useModal} from "headless/Modal/Modal";

const RoutineExerciseSelectBottomSheetButton = () => {
    const {openModal} = useModal();

    return <BasicButton onClick={() => openModal()}>운동 선택하기</BasicButton>;
};

export default RoutineExerciseSelectBottomSheetButton;
