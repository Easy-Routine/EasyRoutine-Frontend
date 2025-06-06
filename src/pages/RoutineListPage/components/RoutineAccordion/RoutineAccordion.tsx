import FireColorBox from "headful/FireColorBox/FireColorBox";
import Flex from "headful/Flex/Flex";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import {Routine, RoutineExercise} from "types/model";
import RoutineDeleteModalButton from "./RoutineDeleteModalButton/RoutineDeleteModalButton";
import RoutineExerciseFlex from "./RoutineExerciseFlex/RoutineExerciseFlex";
import RoutineStartModal from "./RoutineStartModal/RoutineStartModal";
import RoutineStartModalContent from "./RoutineStartModal/RoutineStartModalContent/RoutineStartModalContent";
import React from "react";
import RoutineStartButton from "./RoutineStartModal/RoutineStartModalContent/RoutineStartButton/RoutineStartButton";
import {RoutineAllGetRes} from "types/routine";
import {Color} from "types/enum";

type RoutineAccordionProps = {
    routine: RoutineAllGetRes[number];
    children: React.ReactNode;
};

const RoutineAccordion = ({routine, children}: RoutineAccordionProps) => {
    const {name, color, routineExercises} = routine;

    const [routineUpdateMoveButton, routineStartModalButton] =
        React.Children.toArray(children) as React.ReactElement[];

    return (
        <SwipeableAccordion>
            <SwipeableAccordion.Box>
                <SwipeableAccordion.Visible>
                    <Flex gap={16}>
                        <FireColorBox color={color as Color} />
                        <Flex direction="column" justify="space-around">
                            <NameText routine={routine} />
                            <LengthText routine={routine} />
                        </Flex>
                    </Flex>
                </SwipeableAccordion.Visible>
                <SwipeableAccordion.Hidden>
                    <Flex padding={{t: 20}} direction="column">
                        <Flex direction="column" gap={10}>
                            {routineExercises.map(
                                (routineExercise: RoutineExercise) => (
                                    <RoutineExerciseFlex
                                        routineExercise={routineExercise}
                                    />
                                ),
                            )}
                        </Flex>
                        <Flex padding={{t: 20, b: 10}} justify="space-around">
                            {routineUpdateMoveButton}
                            <RoutineStartModal
                                trigger={routineStartModalButton}
                                content={
                                    <RoutineStartModalContent routine={routine}>
                                        <RoutineStartButton routine={routine} />
                                    </RoutineStartModalContent>
                                }
                            />
                        </Flex>
                    </Flex>
                </SwipeableAccordion.Hidden>
                <RoutineDeleteModalButton routine={routine} />
            </SwipeableAccordion.Box>
        </SwipeableAccordion>
    );
};

export default RoutineAccordion;

const NameText = ({routine}: {routine: Routine}) => (
    <Text
        size={"var(--fontSize-lg)"}
        weight={"var(--fontWeight-semibold)"}
        color={"var(--text-black)"}
    >
        {routine.name}
    </Text>
);

const LengthText = ({routine}: {routine: Routine}) => (
    <Text
        size={"var(--fontSize-sm)"}
        weight={"var(--fontWeight-regular)"}
        color={"var(--text-black)"}
    >
        {routine.routineExercises.length}종목
    </Text>
);
