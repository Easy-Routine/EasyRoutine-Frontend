import FlexBox from "headful/Flex/Flex";
import Image from "headful/Image/Image";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import {RoutineExercise} from "types/model";
import RoutineExerciseDeleteButton from "./RoutineExerciseDeleteButton/RoutineExerciseDeleteButton";
import SetCreateButton from "./SetCreateButton/SetCreateButton";
import SetDeleteButton from "./SetDeleteButton/SetDeleteButton";
import SetUpdateTable from "./SetUpdateTable/SetUpdateTable";
import SetCompleteButton from "./SetCompleteButton/SetCompleteButton";
import React from "react";

type RoutineExerciseAccordionProps = {
    routineExercise: RoutineExercise;
    children: React.ReactNode;
};

const RoutineExerciseAccordion = ({
    routineExercise,
    children,
}: RoutineExerciseAccordionProps) => {
    const {exercise, sets} = routineExercise;
    // const [
    //     setUpdateTable, // 0: <SetUpdateTable .../>
    //     setDeleteButton, // 1: <SetDeleteButton .../>
    //     setCreateButton, // 2: <SetCreateButton .../>
    //     setCompleteButton,
    //     routineExerciseDeleteButton, // 3: <RoutineExerciseDeleteButton .../>
    // ] = React.Children.toArray(children) as React.ReactElement[];
    // const {
    //     routineProgress,
    //     currentWorkoutId,
    //     completedSetIds,
    //     setCurrentWorkoutId,
    //     setCurrentSetId,
    // } = useRoutineProgress();

    // const handleRoutineExerciseReactiveTriggerClick = () => {
    //     setCurrentWorkoutId(routineExercise.id);
    //     // 현재 운동의 세트 목록을 가져온다.
    //     const currentSetIds = sets.map(set => set.id);

    //     // 완료된 세트 배열(completedSetIds)에서 현재 세트 설정의 아이디배열과 겹치는 아이디를 구한다.
    //     const currentWorkoutCompletedSetIds = currentSetIds.filter(id =>
    //         completedSetIds.includes(id),
    //     );

    //     // 현재 운동의 완료된 세트 배열의 길이를 구한다.(그게 현재 진행해야하는 세트의 인덱스)
    //     const currentSetIndex = currentWorkoutCompletedSetIds.length;

    //     const newCurrentSetId = sets[currentSetIndex]?.id ?? "";

    //     setCurrentSetId(newCurrentSetId);
    // };

    return (
        <SwipeableAccordion>
            <SwipeableAccordion.Box>
                <SwipeableAccordion.Visible>
                    <FlexBox gap={16}>
                        <Image width={60} height={60} src={exercise.image} />
                        <FlexBox direction="column" justify="space-around">
                            <Text
                                size={"var(--fontSize-lg)"}
                                weight={"var(--fontWeight-semibold)"}
                                color={"var(--text-black)"}
                            >
                                {exercise.name}
                            </Text>
                            <Text
                                size={"var(--fontSize-sm)"}
                                weight={"var(--fontWeight-regular)"}
                                color={"var(--text-black)"}
                            >
                                {sets.length}종목
                            </Text>
                        </FlexBox>
                    </FlexBox>
                </SwipeableAccordion.Visible>
                <SwipeableAccordion.Hidden>
                    {/* {setUpdateTable} */}
                    <FlexBox padding={{t: 10, b: 10}} justify="space-around">
                        {/* {setDeleteButton} */}
                        {/* {setCreateButton} */}
                        dd
                    </FlexBox>
                    {/* {setCompleteButton} */}
                </SwipeableAccordion.Hidden>
                {/* {routineExerciseDeleteButton} */}
                {/* <RoutineExerciseDeleteButton
                    routineExerciseId={routineExercise.id}
                /> */}
            </SwipeableAccordion.Box>
        </SwipeableAccordion>
    );
};
export default RoutineExerciseAccordion;
