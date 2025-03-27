import FlexBox from "headful/Flex/Flex";
import Image from "headful/Image/Image";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import {WorkoutConfig} from "types/model";
import WorkoutConfigDeleteButton from "./WorkoutConfigDeleteButton/WorkoutConfigDeleteButton";
import SetProgressCreateButton from "./SetProgressCreateButton/SetProgressCreateButton";
import SetProgressDeleteButton from "./SetProgressDeleteButton/SetProgressDeleteButton";
import SetProgressUpdateTable from "./SetProgressUpdateTable/SetProgressUpdateTable";
import SetProgressCompleteButton from "./SetProgressCompleteButton/SetProgressCompleteButton";
import WorkoutProgressReactiveTrigger from "./WorkoutProgressReactiveTrigger/WorkoutProgressReactiveTrigger";
import RoutineProgressCompleteModalTrigger from "./RoutineProgressCompleteModalTrigger/RoutineProgressCompleteModalTrigger";
import {useRoutineProgress} from "../RoutineProgressProvider";

type WorkoutProgressAccordionProps = {
    workoutConfig: WorkoutConfig;
};

const WorkoutProgressAccordion = ({
    workoutConfig,
}: WorkoutProgressAccordionProps) => {
    const {workoutLibrary, setConfigs} = workoutConfig;
    const {
        routineProgress,
        currentWorkoutId,
        completedSetIds,
        setCurrentWorkoutId,
        setCurrentSetId,
    } = useRoutineProgress();

    const handleWorkoutProgressReactiveTriggerClick = () => {
        setCurrentWorkoutId(workoutConfig._id);

        // 현재 세트를 구하기
        // 완료된 세트 목록을 가져오기

        // 현재 운동의 세트 목록을 가져온다.
        const currentSetIds = setConfigs.map(setConfig => setConfig._id);

        // 완료된 세트 배열(completedSetIds)에서 현재 세트 설정의 아이디배열과 겹치는 아이디를 구한다.
        const currentWorkoutCompletedSetIds = currentSetIds.filter(id =>
            completedSetIds.includes(id),
        );

        // 현재 운동의 완료된 세트 배열의 길이를 구한다.(그게 현재 진행해야하는 세트의 인덱스)
        const currentSetIndex = currentWorkoutCompletedSetIds.length;

        const newCurrentSetId = setConfigs[currentSetIndex]?._id ?? "";

        setCurrentSetId(newCurrentSetId);
    };

    return (
        <SwipeableAccordion>
            <SwipeableAccordion.Box>
                <WorkoutProgressReactiveTrigger
                    currentWorkoutConfigId={currentWorkoutId}
                    workoutConfigId={workoutConfig._id}
                    onTriggerClick={handleWorkoutProgressReactiveTriggerClick}
                >
                    <SwipeableAccordion.Visible>
                        <FlexBox gap={16}>
                            <Image
                                width={60}
                                height={60}
                                src={workoutLibrary.image}
                            />
                            <FlexBox
                                flexDirection="column"
                                justifyContent="space-around"
                            >
                                <Text
                                    fontSize={"var(--fontSize-lg)"}
                                    fontWeight={"var(--fontWeight-semibold)"}
                                    color={"var(--text-black)"}
                                >
                                    {workoutLibrary.name}
                                </Text>
                                <Text
                                    fontSize={"var(--fontSize-sm)"}
                                    fontWeight={"var(--fontWeight-regular)"}
                                    color={"var(--text-black)"}
                                >
                                    {setConfigs.length}종목
                                </Text>
                            </FlexBox>
                        </FlexBox>
                    </SwipeableAccordion.Visible>
                    <SwipeableAccordion.Hidden>
                        <SetProgressUpdateTable />
                        <FlexBox
                            padding={{top: 10, bottom: 10}}
                            justifyContent="space-around"
                        >
                            <SetProgressDeleteButton />
                            <SetProgressCreateButton />
                        </FlexBox>

                        <RoutineProgressCompleteModalTrigger>
                            <SetProgressCompleteButton />
                        </RoutineProgressCompleteModalTrigger>
                    </SwipeableAccordion.Hidden>
                    <WorkoutConfigDeleteButton
                        routineConfigId={routineProgress._id}
                        workoutConfigId={workoutConfig._id}
                    />
                </WorkoutProgressReactiveTrigger>
            </SwipeableAccordion.Box>
        </SwipeableAccordion>
    );
};
export default WorkoutProgressAccordion;
