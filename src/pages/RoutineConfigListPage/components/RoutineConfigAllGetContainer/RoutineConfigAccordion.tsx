import FireColorBox from "headful/FireColorBox/FireColorBox";
import FlexBox from "headful/FlexBox/FlexBox";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import {RoutineConfig} from "types/model";
import WorkoutConfigFlexBoxList from "../WorkoutConfigFlexBoxList";
import RoutineConfigUpdateButton from "../RoutineConfigUpdateButton";
import RoutineConfigProgressButton from "../RoutineConfigProgressButton";
import RoutineConfigDeleteButton from "../RoutineConfigDeleteButton";

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
                    <FlexBox gap={16}>
                        <FireColorBox color={color} />
                        <FlexBox
                            flexDirection="column"
                            justifyContent="space-around"
                        >
                            <Text
                                fontSize={"var(--fontSize-lg)"}
                                fontWeight={"var(--fontWeight-semibold)"}
                                color={"var(--text-black)"}
                            >
                                {name}
                            </Text>
                            <Text
                                fontSize={"var(--fontSize-sm)"}
                                fontWeight={"var(--fontWeight-regular)"}
                                color={"var(--text-black)"}
                            >
                                {workoutConfigs.length}종목
                            </Text>
                        </FlexBox>
                    </FlexBox>
                </SwipeableAccordion.Visible>
                <SwipeableAccordion.Hidden>
                    <WorkoutConfigFlexBoxList workoutConfigs={workoutConfigs} />
                    <FlexBox
                        padding={{top: 10, bottom: 10}}
                        justifyContent="space-around"
                    >
                        <RoutineConfigUpdateButton
                            routineConfigId={routineConfig._id}
                        />
                        <RoutineConfigProgressButton
                            routineConfigName={routineConfig.name}
                            routineConfigId={routineConfig._id}
                        />
                    </FlexBox>
                </SwipeableAccordion.Hidden>
                <RoutineConfigDeleteButton
                    routineConfigName={routineConfig.name}
                    routineConfigId={routineConfig._id}
                />
            </SwipeableAccordion.Box>
        </SwipeableAccordion>
    );
};

export default RoutineConfigAccordion;
