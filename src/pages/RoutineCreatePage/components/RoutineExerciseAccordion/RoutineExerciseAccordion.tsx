import React from "react";
import Image from "headful/Image/Image";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import {RoutineExercise} from "types/model";
import Flex from "headful/Flex/Flex";

type RoutineExerciseAccordionProps = {
    routineExercise: RoutineExercise;
    children: React.ReactNode;
};

const RoutineExerciseAccordion = ({
    routineExercise,
    children,
}: RoutineExerciseAccordionProps) => {
    const {exercise} = routineExercise;

    // children를 배열로 변환한 뒤, 순서대로 분해
    const [
        setUpdateTable, // 0: <SetUpdateTable .../>
        setDeleteButton, // 1: <SetDeleteButton .../>
        setCreateButton, // 2: <SetCreateButton .../>
        workoutDeleteButton, // 3: <RoutineExerciseDeleteButton .../>
    ] = React.Children.toArray(children) as React.ReactElement[];

    return (
        <SwipeableAccordion>
            <SwipeableAccordion.Box>
                <SwipeableAccordion.Visible>
                    <Flex gap={16}>
                        <Image
                            width={60}
                            height={60}
                            src={exercise?.image ?? ""}
                        />
                        <Flex direction="column" justify="space-around">
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
                                {routineExercise.sets.length}종목
                            </Text>
                        </Flex>
                    </Flex>
                </SwipeableAccordion.Visible>

                {/* 확장됐을 때 보이는 영역 */}
                <SwipeableAccordion.Hidden>
                    {setUpdateTable}

                    <Flex padding={{t: 10, b: 10}} justify="space-around">
                        {setDeleteButton}
                        {setCreateButton}
                    </Flex>
                </SwipeableAccordion.Hidden>

                {/* 항상 보이는 삭제 버튼 */}
                {workoutDeleteButton}
            </SwipeableAccordion.Box>
        </SwipeableAccordion>
    );
};

export default RoutineExerciseAccordion;
