import FlexBox from "headful/FlexBox/FlexBox";
import Image from "headful/Image/Image";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import {WorkoutConfig} from "types/model";
import SetConfigUpdateTable from "./SetConfigUpdateTable";
import SetConfigDeleteButton from "./SetConfigDeleteButton";
import SetConfigCreateButton from "./SetConfigCreateButton";
import WorkoutConfigDeleteButton from "./WorkoutConfigDeleteButton";

type WorkoutConfigAccordionProps = {
    routineConfigId: string;
    workoutConfig: WorkoutConfig;
};

const WorkoutConfigAccordion = ({
    routineConfigId,
    workoutConfig,
}: WorkoutConfigAccordionProps) => {
    const {workoutLibrary, setConfigs} = workoutConfig;

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
                    <SetConfigUpdateTable
                        workoutLibraryType={workoutLibrary.type}
                        workoutConfigId={workoutConfig._id}
                        setConfigs={setConfigs}
                    />
                    <FlexBox
                        padding={{top: 10, bottom: 10}}
                        justifyContent="space-around"
                    >
                        <SetConfigDeleteButton
                            routineConfigId={routineConfigId}
                            workoutConfigId={workoutConfig._id}
                        />
                        <SetConfigCreateButton
                            routineConfigId={routineConfigId}
                            workoutConfigId={workoutConfig._id}
                        />
                    </FlexBox>
                </SwipeableAccordion.Hidden>
                <WorkoutConfigDeleteButton
                    routineConfigId={routineConfigId}
                    workoutConfigId={workoutConfig._id}
                />
            </SwipeableAccordion.Box>
        </SwipeableAccordion>
    );
};
export default WorkoutConfigAccordion;
