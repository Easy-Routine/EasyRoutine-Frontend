import ImageTextItem from "headful/ImageTextItem/ImageTextItem";
import React from "react";
import {Exercise} from "types/model";
import {useExerciseUpdate} from "./ExerciseUpdateProvider";
import {useModal} from "headless/Modal/Modal";

// TODO: 스타일 작성하기

type ExerciseUpdateModalTriggerProps = {
    exercise: Exercise;
};

const ExerciseUpdateModalTrigger = ({
    exercise,
}: ExerciseUpdateModalTriggerProps) => {
    const {id, image, name, category, types} = exercise;
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
            image={exercise?.image ?? ""}
            text={exercise.name}
            onItemClick={handleItemClick}
        />
    );
};

export default ExerciseUpdateModalTrigger;
