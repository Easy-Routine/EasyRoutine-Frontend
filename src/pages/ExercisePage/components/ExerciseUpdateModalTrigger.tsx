import ImageTextItem from "headful/ImageTextItem/ImageTextItem";
import {useExerciseUpdate} from "./ExerciseUpdateProvider";
import {useModal} from "headless/Modal/Modal";
import {ExerciseAllGetItem, ExerciseAllGetRes} from "types/exercise";
import useToast from "hooks/useToast";

// TODO: 스타일 작성하기

type ExerciseUpdateModalTriggerProps = {
    exerciseAllGetRes: ExerciseAllGetItem;
};

const ExerciseUpdateModalTrigger = ({
    exerciseAllGetRes,
}: ExerciseUpdateModalTriggerProps) => {
    const {id, image, name, category, types, isEditable} = exerciseAllGetRes;
    const {setId, setImageUrl, setName, setCategory, setTypes, setMode} =
        useExerciseUpdate();
    const {openModal} = useModal();
    const {showToast} = useToast();

    const handleItemClick = () => {
        if (!isEditable) {
            showToast("기본운동은 수정 할 수 없습니다.", "error");
            return;
        }
        setMode("update");
        setId(id);
        setImageUrl(image);
        setName(name);
        setCategory(category);
        setTypes(types);
        openModal();
    };

    const handleLongPressClick = () => {
        if (!isEditable) {
            showToast("기본운동은 삭제 할 수 없습니다.", "error");
            return;
        }
        setMode("delete");
        openModal();
    };

    return (
        <ImageTextItem
            image={exerciseAllGetRes?.image ?? ""}
            text={exerciseAllGetRes.name}
            onLongPress={handleLongPressClick}
            onItemClick={handleItemClick}
        />
    );
};

export default ExerciseUpdateModalTrigger;
