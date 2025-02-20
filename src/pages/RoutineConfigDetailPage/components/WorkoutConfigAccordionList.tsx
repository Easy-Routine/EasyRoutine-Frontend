/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import FireColorBox from "headful/FireColorBox/FireColorBox";
import FlexBox from "headful/FlexBox/FlexBox";
import Image from "headful/Image/Image";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import useGetRoutineConfigAllQuery from "hooks/server/useGetRoutineConfigAllQuery";
import React from "react";
import {WorkoutConfig} from "types/model";
import WorkoutConfigAccordion from "./WorkoutConfigAccordion";
import useGetRoutineConfigOneQuery from "hooks/server/useGetRoutineConfigOneQuery";
import {useParams} from "react-router-dom";

const WorkoutConfigAccordionList = () => {
    const theme = useTheme();
    const {routineConfigId} = useParams();
    const {data: routineConfigOneData} = useGetRoutineConfigOneQuery(
        routineConfigId as string,
    );

    const routineConfigOne = routineConfigOneData!;

    const workoutConfigAll = routineConfigOne.workoutConfigs;

    return (
        <FlexBox flexDirection="column" gap={20}>
            {workoutConfigAll.map(workoutConfig => (
                <WorkoutConfigAccordion
                    key={workoutConfig._id}
                    workoutConfig={workoutConfig}
                />
            ))}
        </FlexBox>
    );
};

export default WorkoutConfigAccordionList;
