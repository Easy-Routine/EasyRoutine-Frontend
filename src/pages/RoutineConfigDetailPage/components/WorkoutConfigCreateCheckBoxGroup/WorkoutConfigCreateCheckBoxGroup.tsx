import LineCheckBoxGroup from "headful/LineCheckBoxGroup/LineCheckBoxGroup";
import React, {useEffect, useState} from "react";
import WorkoutLibraryCheckBoxItemList from "./WorkoutLibraryCheckBoxItemList";
import {WorkoutLibrary} from "types/model";
import WorkoutConfigCreateButton from "./WorkoutConfigCreateButton";
import useCreateWorkoutConfigAllMutation from "hooks/server/useCreateWorkoutConfigAllMutation";
import {useModal} from "headless/Modal/Modal";

type WorkoutConfigCreateCheckBoxGroupProps = {
    workoutLibraries: WorkoutLibrary[];
    routineConfigId: string;
};

const WorkoutConfigCreateCheckBoxGroup = ({
    workoutLibraries,
    routineConfigId,
}: WorkoutConfigCreateCheckBoxGroupProps) => {
    const [workoutLibraryIds, setWorkoutLibraryIds] = useState<string[]>([]);
    const {closeModal} = useModal();

    const {mutateAsync: createWorkoutConfigAllMutation} =
        useCreateWorkoutConfigAllMutation();

    const handleBasicButtonClick = async () => {
        await createWorkoutConfigAllMutation({
            workoutLibraryIds,
            routineConfigId,
        });

        closeModal();
    };

    const handleCheckBoxItemClick = (value: string[]) => {
        setWorkoutLibraryIds(value);
    };

    return (
        <LineCheckBoxGroup defaultValue={workoutLibraryIds}>
            <WorkoutLibraryCheckBoxItemList
                workoutLibraries={workoutLibraries}
                onCheckBoxItemClick={handleCheckBoxItemClick}
            />
            <WorkoutConfigCreateButton onButtonClick={handleBasicButtonClick} />
        </LineCheckBoxGroup>
    );
};

export default WorkoutConfigCreateCheckBoxGroup;
