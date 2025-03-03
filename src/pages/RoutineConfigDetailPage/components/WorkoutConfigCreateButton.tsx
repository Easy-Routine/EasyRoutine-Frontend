import BasicButton from "headful/BasicButton/BasicButton";
import useCreateWorkoutConfigAllMutation from "hooks/server/useCreateWorkoutConfigAllMutation";
import React from "react";

type WorkoutConfigCreateButtonProps = {
    onButtonClick: () => void;
};

const WorkoutConfigCreateButton = ({
    onButtonClick,
}: WorkoutConfigCreateButtonProps) => {
    return (
        <BasicButton
            onClick={onButtonClick}
            style={{color: "var(--text-white)"}}
        >
            운동 추가하기
        </BasicButton>
    );
};

export default WorkoutConfigCreateButton;
