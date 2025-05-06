import FireColorBox from "headful/FireColorBox/FireColorBox";
import Flex from "headful/Flex/Flex";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import {RoutineConfig, WorkoutConfig} from "types/model";
import RoutineConfigDeleteModalButton from "./RoutineConfigDeleteModalButton/RoutineConfigDeleteModalButton";
import WorkoutConfigFlex from "./WorkoutConfigFlex/WorkoutConfigFlex";
import RoutineConfigStartModal from "./RoutineConfigStartModal/RoutineConfigStartModal";
import RoutineConfigStartModalContent from "./RoutineConfigStartModal/RoutineConfigStartModalContent/RoutineConfigStartModalContent";
import React from "react";
import RoutineConfigStartButton from "./RoutineConfigStartModal/RoutineConfigStartModalContent/RoutineConfigStartButton/RoutineConfigStartButton";

type RoutineConfigAccordionProps = {
    routineConfig: RoutineConfig;
    children: React.ReactNode;
};

const RoutineConfigAccordion = ({
    routineConfig,
    children,
}: RoutineConfigAccordionProps) => {
    const {name, color, workoutConfigs} = routineConfig;

    const [routineConfigUpdateMoveButton, routineConfigStartModalButton] =
        React.Children.toArray(children) as React.ReactElement[];

    return (
        <SwipeableAccordion>
            <SwipeableAccordion.Box>
                <SwipeableAccordion.Visible>
                    <Flex gap={16}>
                        <FireColorBox color={color} />
                        <Flex direction="column" justify="space-around">
                            <NameText routineConfig={routineConfig} />
                            <LengthText routineConfig={routineConfig} />
                        </Flex>
                    </Flex>
                </SwipeableAccordion.Visible>
                <SwipeableAccordion.Hidden>
                    <Flex padding={{t: 20}} direction="column">
                        <Flex direction="column" gap={10}>
                            {workoutConfigs.map(
                                (workoutConfig: WorkoutConfig) => (
                                    <WorkoutConfigFlex
                                        workoutConfig={workoutConfig}
                                    />
                                ),
                            )}
                        </Flex>
                        <Flex padding={{t: 20, b: 10}} justify="space-around">
                            {routineConfigUpdateMoveButton}
                            <RoutineConfigStartModal
                                trigger={routineConfigStartModalButton}
                                content={
                                    <RoutineConfigStartModalContent
                                        routineConfig={routineConfig}
                                    >
                                        <RoutineConfigStartButton
                                            routineConfig={routineConfig}
                                        />
                                    </RoutineConfigStartModalContent>
                                }
                            />
                        </Flex>
                    </Flex>
                </SwipeableAccordion.Hidden>
                <RoutineConfigDeleteModalButton routineConfig={routineConfig} />
            </SwipeableAccordion.Box>
        </SwipeableAccordion>
    );
};

export default RoutineConfigAccordion;

const NameText = ({routineConfig}: {routineConfig: RoutineConfig}) => (
    <Text
        size={"var(--fontSize-lg)"}
        weight={"var(--fontWeight-semibold)"}
        color={"var(--text-black)"}
    >
        {routineConfig.name}
    </Text>
);

const LengthText = ({routineConfig}: {routineConfig: RoutineConfig}) => (
    <Text
        size={"var(--fontSize-sm)"}
        weight={"var(--fontWeight-regular)"}
        color={"var(--text-black)"}
    >
        {routineConfig.workoutConfigs.length}종목
    </Text>
);
