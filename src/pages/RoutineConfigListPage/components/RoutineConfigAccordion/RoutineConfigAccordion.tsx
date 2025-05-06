import FireColorBox from "headful/FireColorBox/FireColorBox";
import Flex from "headful/Flex/Flex";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import {RoutineConfig, WorkoutConfig} from "types/model";
import RoutineConfigUpdateButton from "./RoutineConfigUpdateButton/RoutineConfigUpdateButton";
import RoutineConfigDeleteModalButton from "./RoutineConfigDeleteModalButton/RoutineConfigDeleteModalButton";
import RoutineConfigStartModalButton from "./RoutineConfigStartModalButton/RoutineConfigStartModalButton";
import WorkoutConfigFlex from "./WorkoutConfigFlex/WorkoutConfigFlex";

type RoutineConfigAccordionProps = {
    routineConfig: RoutineConfig;
};

const RoutineConfigAccordion = ({
    routineConfig,
}: RoutineConfigAccordionProps) => {
    const {name, color, workoutConfigs} = routineConfig;

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
                            <RoutineConfigUpdateButton
                                routineConfig={routineConfig}
                            />
                            <RoutineConfigStartModalButton
                                routineConfig={routineConfig}
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
