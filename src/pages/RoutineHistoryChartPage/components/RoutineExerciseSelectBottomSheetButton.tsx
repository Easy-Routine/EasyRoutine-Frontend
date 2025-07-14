import BasicButton from "headful/BasicButton/BasicButton";
import {useBottomSheet} from "headless/BottomSheet/BottomSheet";
import {useModal} from "headless/Modal/Modal";

const RoutineExerciseSelectBottomSheetButton = () => {
    const {open} = useBottomSheet();

    return <BasicButton onClick={() => open()}>운동 선택하기</BasicButton>;
};

export default RoutineExerciseSelectBottomSheetButton;
