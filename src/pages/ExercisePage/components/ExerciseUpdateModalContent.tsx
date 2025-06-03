import React from "react";
import {useExerciseUpdate} from "./ExerciseUpdateProvider";

const ExerciseUpdateModalContent = () => {
    const {id, name, image, category, types} = useExerciseUpdate();

    return (
        <div>
            {id} {name} {image} {category} {types}
        </div>
    );
};

export default ExerciseUpdateModalContent;
