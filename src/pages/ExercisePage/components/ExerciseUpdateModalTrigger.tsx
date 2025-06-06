import ImageTextItem from "headful/ImageTextItem/ImageTextItem";
import {useExerciseUpdate} from "./ExerciseUpdateProvider";
import {useModal} from "headless/Modal/Modal";
import {ExerciseAllGetRes} from "types/exercise";
import useToast from "hooks/useToast";

// TODO: 스타일 작성하기

type ExerciseUpdateModalTriggerProps = {
    exerciseAllGetRes: ExerciseAllGetRes[number];
};

const ExerciseUpdateModalTrigger = ({
    exerciseAllGetRes,
}: ExerciseUpdateModalTriggerProps) => {
    const {id, image, name, category, types, isEditable} = exerciseAllGetRes;
    const {setId, setImage, setName, setCategory, setTypes} =
        useExerciseUpdate();
    const {openModal} = useModal();
    const {showToast} = useToast();

    const handleItemClick = () => {
        if (!isEditable) {
            showToast("수정 할 수 없는 운동입니다.", "error");
            return;
        }

        setId(id);
        setImage(image);
        setName(name);
        setCategory(category);
        setTypes(types);
        openModal();
    };

    return (
        <ImageTextItem
            image={exerciseAllGetRes?.image ?? ""}
            text={exerciseAllGetRes.name}
            onItemClick={handleItemClick}
        />
    );
};

export default ExerciseUpdateModalTrigger;
