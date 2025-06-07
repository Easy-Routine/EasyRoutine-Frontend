import FireColorBox from "headful/FireColorBox/FireColorBox";
import Flex from "headful/Flex/Flex";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import {Routine, RoutineExercise} from "types/model";
import RoutineExerciseFlex from "./RoutineExerciseFlex";
import React from "react";
import {RoutineAllGetRes} from "types/routine";
import {Color} from "types/enum";

type RoutineAccordionProps = {
    routineAllGetRes: RoutineAllGetRes[number];
    children: React.ReactNode;
};

const RoutineAccordion = ({
    routineAllGetRes,
    children,
}: RoutineAccordionProps) => {
    const {name, color, routineExercises} = routineAllGetRes;

    const [
        routineUpdateMoveButton,
        routineStartModalButton,
        routineDeleteModalButton,
    ] = React.Children.toArray(children) as React.ReactElement[];

    return (
        <SwipeableAccordion>
            <SwipeableAccordion.Box>
                <SwipeableAccordion.Visible>
                    <Flex gap={16}>
                        <FireColorBox color={color as Color} />
                        <Flex direction="column" justify="space-around">
                            <NameText routine={routineAllGetRes} />
                            <LengthText routine={routineAllGetRes} />
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
                            {routineStartModalButton}
                        </Flex>
                    </Flex>
                </SwipeableAccordion.Hidden>
                {routineDeleteModalButton}
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
