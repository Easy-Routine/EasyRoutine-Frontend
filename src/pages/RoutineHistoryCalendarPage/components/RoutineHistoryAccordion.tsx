import FireColorBox from "headful/FireColorBox/FireColorBox";
import Flex from "headful/Flex/Flex";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import {Routine, RoutineExercise, RoutineHistory} from "types/model";
import React from "react";
import {RoutineAllGetRes} from "types/routine";
import {Color} from "types/enum";
import RoutineExerciseFlex from "pages/RoutineListPage/components/RoutineExerciseFlex";
import {RoutineHistoryAllGetDailyRes} from "types/routine-history";

type RoutineHistoryAccordionProps = {
    routineHistory: RoutineHistory;
    children: React.ReactNode;
};

const RoutineHistoryAccordion = ({
    routineHistory,
    children,
}: RoutineHistoryAccordionProps) => {
    const {name, color, routineExercises} = routineHistory;

    const [
        routineDetailMoveButton,
        routineDeleteModalButton1,
        routineDeleteModalButton2,
    ] = React.Children.toArray(children) as React.ReactElement[];

    return (
        <SwipeableAccordion>
            <SwipeableAccordion.Box>
                <SwipeableAccordion.Visible>
                    <Flex gap={16}>
                        <FireColorBox color={color as Color} />
                        <Flex direction="column" justify="space-around">
                            <NameText routine={routineHistory} />
                            <LengthText routine={routineHistory} />
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
                            {routineDetailMoveButton}
                            {routineDeleteModalButton1}
                        </Flex>
                    </Flex>
                </SwipeableAccordion.Hidden>
                {routineDeleteModalButton2}
            </SwipeableAccordion.Box>
        </SwipeableAccordion>
    );
};

export default RoutineHistoryAccordion;

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
