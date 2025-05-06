import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import {WorkoutConfig} from "types/model";
import {MouseEventHandler} from "react";
import {useRoutineConfigCreate} from "../../RoutineConfigCreateProvider/RoutineConfigCreateProvider";

type WorkoutConfigDeleteButtonProps = {
    workoutConfig: WorkoutConfig;
};

const WorkoutConfigDeleteButton = ({
    workoutConfig,
}: WorkoutConfigDeleteButtonProps) => {
    const {_id} = workoutConfig;
    const {routineConfig, setRoutineConfig} = useRoutineConfigCreate();

    const handleWorkoutConfigDeleteButtonClick: MouseEventHandler<
        HTMLDivElement
    > = e => {
        e.stopPropagation();
        // 루틴 설정 상태를 가져와서 깊은 복사를 해준다.
        const newRoutineConfig = structuredClone(routineConfig);
        const workoutConfigs = newRoutineConfig.workoutConfigs;
        // 새로운 루틴 상태로 업데이트 시켜준다.
        newRoutineConfig.workoutConfigs = workoutConfigs.filter(
            workoutConfig => workoutConfig._id !== _id,
        );
        setRoutineConfig(newRoutineConfig);
    };

    return (
        <SwipeableAccordion.DeleteButton
            onClick={handleWorkoutConfigDeleteButtonClick}
        />
    );
};

export default WorkoutConfigDeleteButton;
