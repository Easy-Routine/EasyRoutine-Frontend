import FlexBox from "headful/Flex/Flex";
import {MouseEventHandler} from "react";
import Text from "headful/Text/Text";
import useCreateSetConfigOneMutation from "hooks/server/useCreateSetConfigOneMutation";
import {ReactComponent as PlusIcon} from "assets/image/plus2.svg";
import {SetConfig, WorkoutConfig} from "types/model";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
import {useRoutineProgress} from "../../RoutineProgressProvider";

type SetProgressCreateButtonButtonProps = {
    // setConfigs: SetConfig[];
    // onSetProgressCreateButtonClick: (setConfigs: SetConfig[]) => void;
};

const SetProgressCreateButton = (
    {
        // setConfigs,
        // onSetProgressCreateButtonClick,
    }: SetProgressCreateButtonButtonProps,
) => {
    const {
        setConfigs,
        completedSetIds,
        setCurrentSetId,
        routineProgress,
        setRoutineProgress,
        currentWorkoutId,
    } = useRoutineProgress();

    const handleSetProgressCreateButtonClick: MouseEventHandler<
        HTMLDivElement
    > = async e => {
        e.stopPropagation();

        const lastSetConfigIndex = setConfigs.length - 1;

        // 세트 설정 배열에 새로운 세트 설정을 추가한다.
        setConfigs.push({
            _id: uuidv4(),
            weight: setConfigs[lastSetConfigIndex]?.weight || 0,
            rep: setConfigs[lastSetConfigIndex]?.rep || 0,
            restSec: setConfigs[lastSetConfigIndex]?.restSec || 0,
            workoutSec: setConfigs[lastSetConfigIndex]?.restSec || 0,
            createdAt: moment().toISOString(),
            updatedAt: moment().toISOString(),
            workoutConfigId: "1",
        });

        console.log(setConfigs, "setConfigs");
        console.log(completedSetIds, "completedSetIds");

        // 현재 세트 설정(setConfigs)에서 아이디 배열을 구한다.
        const currentSetIds = setConfigs.map(setConfig => setConfig._id);
        // 완료된 세트 배열(completedSetIds)에서 현재 세트 설정의 아이디배열과 겹치는 아이디를 구한다.
        const commonSetIds = currentSetIds.filter(id =>
            completedSetIds.includes(id),
        );

        setCurrentSetId(setConfigs[commonSetIds.length]._id);

        const newRoutineProgress = structuredClone(routineProgress);

        const currentWorkoutConfig = newRoutineProgress.workoutConfigs.find(
            (workoutConfig: WorkoutConfig) =>
                workoutConfig._id === currentWorkoutId,
        ) as WorkoutConfig;
        // 선택된 운동 설정의 세트설정을 업데이트 시킵니다.
        currentWorkoutConfig.setConfigs = setConfigs;

        setRoutineProgress(newRoutineProgress);

        // 완료된 세트보다 하나 더 많은 인덱스를 현재 세트로 지정한다.
        // setCurrentSetId(newSetConfigs[completedSetIds.length]._id);
    };

    return (
        <FlexBox
            gap={16}
            align="center"
            onClick={handleSetProgressCreateButtonClick}
        >
            <PlusIcon color={"var(--color-primary)"} />
            <Text color={"var(--color-primary)"}>세트 추가하기</Text>
        </FlexBox>
    );
};

export default SetProgressCreateButton;
