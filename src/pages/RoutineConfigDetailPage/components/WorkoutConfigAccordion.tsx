import {useTheme} from "@emotion/react";
import FlexBox from "headful/FlexBox/FlexBox";
import Image from "headful/Image/Image";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import React from "react";
import {WorkoutConfig} from "types/model";
import SetConfigTable from "./SetConfigUpdateTable";
import WorkoutConfigDeleteButton from "./WorkoutConfigDeleteButton";
import SetConfigDeleteButton from "./SetConfigDeleteButton";
import SetConfigCreateButton from "./SetConfigCreateButton";

type WorkoutConfigAccordionProps = {
    workoutConfig: WorkoutConfig;
};

const WorkoutConfigAccordion = ({
    workoutConfig,
}: WorkoutConfigAccordionProps) => {
    const theme = useTheme();
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
                                fontSize={theme.fontSize.lg}
                                fontWeight={theme.fontWeight.semibold}
                            >
                                {workoutLibrary.name}
                            </Text>
                            <Text
                                fontSize={theme.fontSize.sm}
                                fontWeight={theme.fontWeight.regular}
                            >
                                {setConfigs.length}종목
                            </Text>
                        </FlexBox>
                    </FlexBox>
                </SwipeableAccordion.Visible>
                <SwipeableAccordion.Hidden>
                    <SetConfigTable
                        workoutLibraryType={workoutLibrary.type}
                        workoutConfigId={workoutConfig._id}
                        setConfigs={setConfigs}
                    />
                    <FlexBox
                        padding={{top: 10, bottom: 10}}
                        justifyContent="space-around"
                    >
                        하단
                        <SetConfigDeleteButton />
                        <SetConfigCreateButton />
                    </FlexBox>
                </SwipeableAccordion.Hidden>
                <WorkoutConfigDeleteButton />
            </SwipeableAccordion.Box>
        </SwipeableAccordion>
    );
};
export default WorkoutConfigAccordion;
