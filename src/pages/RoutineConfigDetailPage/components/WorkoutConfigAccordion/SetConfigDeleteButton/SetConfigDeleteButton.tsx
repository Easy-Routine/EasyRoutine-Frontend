import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import useDeleteSetConfigOneMutation from "hooks/server/useDeleteSetConfigOneMutation";
import {ReactComponent as MinusIcon} from "assets/image/minus.svg";
import {SetConfig, WorkoutConfig} from "types/model";
import {useRoutineConfigUpdateParams} from "../../RoutineConfigUpdateParamsProvider/RoutineConfigUpdateParamsProvider";

type SetConfigDeleteButtonProps = {
    workoutConfig: WorkoutConfig;
};

const SetConfigDeleteButton = ({workoutConfig}: SetConfigDeleteButtonProps) => {
    const {_id} = workoutConfig;
    const {routineConfig, setRoutineConfig} = useRoutineConfigUpdateParams();

    const handleSetDeleteButtonClick: MouseEventHandler<
        HTMLDivElement
    > = async e => {
        e.stopPropagation();

        // 루틴 설정 상태를 가져와서 깊은 복사를 해준다.
        const newRoutineConfig = structuredClone(routineConfig);
        // 운동 설정 상태의 아이디를 이용하여 해당 운동을 찾는다.
        const workoutConfigs = newRoutineConfig.workoutConfigs;
        const foundWorkoutConfig = workoutConfigs.find(
            workoutConfig => workoutConfig._id === _id,
        ) as WorkoutConfig;
        // 세트 설정 배열에서 마지막 요소를 제거한다.
        const setConfigs = foundWorkoutConfig.setConfigs;
        setConfigs.pop();

        // 새로운 루틴 상태로 업데이트 시켜준다.
        setRoutineConfig(newRoutineConfig);
    };

    return (
        <FlexBox gap={16} align="center" onClick={handleSetDeleteButtonClick}>
            <MinusIcon color={"var(--color-gray-dark)"} />
            <Text color={"var(--color-gray-dark)"}>세트 삭제하기</Text>
        </FlexBox>
    );
};

export default SetConfigDeleteButton;
