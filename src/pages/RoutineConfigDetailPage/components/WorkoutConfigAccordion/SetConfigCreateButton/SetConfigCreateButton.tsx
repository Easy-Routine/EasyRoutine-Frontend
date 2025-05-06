import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import useCreateSetConfigOneMutation from "hooks/server/useCreateSetConfigOneMutation";
import {ReactComponent as PlusIcon} from "assets/image/plus2.svg";
import {SetConfig, WorkoutConfig} from "types/model";
import {useRoutineConfigUpdateParams} from "../../RoutineConfigUpdateParamsProvider/RoutineConfigUpdateParamsProvider";
import {v4 as uuid} from "uuid";

type SetConfigCreateButtonButtonProps = {
    workoutConfig: WorkoutConfig;
};

const SetConfigCreateButton = ({
    workoutConfig,
}: SetConfigCreateButtonButtonProps) => {
    const {_id} = workoutConfig;
    const {routineConfig, setRoutineConfig} = useRoutineConfigUpdateParams();

    const handleSetCreateButtonClick: MouseEventHandler<
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
        // 세트 설정 배열에서 요소를 추가한다.

        const setConfigs = foundWorkoutConfig.setConfigs;
        const {type} = foundWorkoutConfig.workoutLibrary;
        const last = setConfigs[setConfigs.length - 1] as SetConfig | undefined;

        // 4) timestamp
        const now = new Date().toISOString();

        const newSet: SetConfig = {
            _id: uuid(),
            createdAt: now,
            updatedAt: now,
            // optional fields: 이전 값이 있으면 그걸, 없으면 0
            ...(type.includes("weight") && {weight: last?.weight ?? 0}),

            // workoutLibrary.type 에 "rep" 가 있고, last.rep 가 있을 때만 포함
            ...(type.includes("rep") && {rep: last?.rep ?? 0}),

            // workoutLibrary.type 에 "workoutSec" 가 있고, last.workoutSec 가 있을 때만 포함
            ...(type.includes("workoutSec") && {
                workoutSec: last?.workoutSec ?? 0,
            }),
            // required field: 역시 이전 값이 있으면 그걸, 없으면 0
            restSec: last?.restSec ?? 0,
        };

        // 6) 배열에 추가
        setConfigs.push(newSet);

        // 새로운 루틴 상태로 업데이트 시켜준다.
        setRoutineConfig(newRoutineConfig);
    };

    return (
        <FlexBox gap={16} align="center" onClick={handleSetCreateButtonClick}>
            <PlusIcon color={"var(--color-primary)"} />
            <Text color={"var(--color-primary)"}>세트 추가하기</Text>
        </FlexBox>
    );
};

export default SetConfigCreateButton;
