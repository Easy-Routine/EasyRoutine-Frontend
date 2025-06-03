import {useModal} from "headless/Modal/Modal";
import React from "react";

const ExerciseCreateModalTrigger = () => {
    const {openModal} = useModal();

    return <div onClick={() => openModal()}>ExerciseCreateModalTrigger</div>;
};

export default ExerciseCreateModalTrigger;
