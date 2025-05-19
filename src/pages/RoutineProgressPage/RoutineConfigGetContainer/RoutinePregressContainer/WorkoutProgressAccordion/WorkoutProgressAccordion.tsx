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
import React from "react";

type WorkoutProgressAccordionProps = {
    workoutConfig: WorkoutConfig;
    children: React.ReactNode;
};

const WorkoutProgressAccordion = ({
    workoutConfig,
    children,
}: WorkoutProgressAccordionProps) => {
    const {workoutLibrary, setConfigs} = workoutConfig;
    const [
        setProgressUpdateTable, // 0: <SetConfigUpdateTable .../>
        setProgressDeleteButton, // 1: <SetConfigDeleteButton .../>
        setProgressCreateButton, // 2: <SetConfigCreateButton .../>
        setProgressCompleteButton,
        workoutProgressDeleteButton, // 3: <WorkoutConfigDeleteButton .../>
    ] = React.Children.toArray(children) as React.ReactElement[];
    // const {
    //     routineProgress,
    //     currentWorkoutId,
    //     completedSetIds,
    //     setCurrentWorkoutId,
    //     setCurrentSetId,
    // } = useRoutineProgress();

    // const handleWorkoutProgressReactiveTriggerClick = () => {
    //     setCurrentWorkoutId(workoutConfig._id);
    //     // 현재 운동의 세트 목록을 가져온다.
    //     const currentSetIds = setConfigs.map(setConfig => setConfig._id);

    //     // 완료된 세트 배열(completedSetIds)에서 현재 세트 설정의 아이디배열과 겹치는 아이디를 구한다.
    //     const currentWorkoutCompletedSetIds = currentSetIds.filter(id =>
    //         completedSetIds.includes(id),
    //     );

    //     // 현재 운동의 완료된 세트 배열의 길이를 구한다.(그게 현재 진행해야하는 세트의 인덱스)
    //     const currentSetIndex = currentWorkoutCompletedSetIds.length;

    //     const newCurrentSetId = setConfigs[currentSetIndex]?._id ?? "";

    //     setCurrentSetId(newCurrentSetId);
    // };

    return (
        <SwipeableAccordion>
            <SwipeableAccordion.Box>
                <SwipeableAccordion.Visible>
                    <FlexBox gap={16}>
                        <Image
                            width={60}
                            height={60}
                            src={workoutLibrary.image}
                        />
                        <FlexBox direction="column" justify="space-around">
                            <Text
                                size={"var(--fontSize-lg)"}
                                weight={"var(--fontWeight-semibold)"}
                                color={"var(--text-black)"}
                            >
                                {workoutLibrary.name}
                            </Text>
                            <Text
                                size={"var(--fontSize-sm)"}
                                weight={"var(--fontWeight-regular)"}
                                color={"var(--text-black)"}
                            >
                                {setConfigs.length}종목
                            </Text>
                        </FlexBox>
                    </FlexBox>
                </SwipeableAccordion.Visible>
                <SwipeableAccordion.Hidden>
                    {setProgressUpdateTable}
                    <FlexBox padding={{t: 10, b: 10}} justify="space-around">
                        {setProgressDeleteButton}
                        {setProgressCreateButton}
                    </FlexBox>
                    {setProgressCompleteButton}
                </SwipeableAccordion.Hidden>
                {workoutProgressDeleteButton}
                {/* <WorkoutConfigDeleteButton
                    workoutConfigId={workoutConfig._id}
                /> */}
            </SwipeableAccordion.Box>
        </SwipeableAccordion>
    );
};
export default WorkoutProgressAccordion;
