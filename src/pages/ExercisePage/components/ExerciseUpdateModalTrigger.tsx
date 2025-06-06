import ImageTextItem from "headful/ImageTextItem/ImageTextItem";
import {useExerciseUpdate} from "./ExerciseUpdateProvider";
import {useModal} from "headless/Modal/Modal";
import {ExerciseAllGetRes} from "types/exercise";

// TODO: 스타일 작성하기

type ExerciseUpdateModalTriggerProps = {
    exerciseAllGetRes: ExerciseAllGetRes[number];
};

const ExerciseUpdateModalTrigger = ({
    exerciseAllGetRes,
}: ExerciseUpdateModalTriggerProps) => {
    const {id, image, name, category, types} = exerciseAllGetRes;
    const {setId, setImage, setName, setCategory, setTypes} =
        useExerciseUpdate();
    const {openModal} = useModal();

    const handleItemClick = () => {
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
