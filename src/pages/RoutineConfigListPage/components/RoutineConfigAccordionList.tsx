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
import RoutineConfigAccordion from "./RoutineConfigAccordion";

const RoutineConfigAccordionList = () => {
    const theme = useTheme();
    const {data: routineConfigAllData} = useGetRoutineConfigAllQuery();

    const routineConfigAll = routineConfigAllData!;

    return (
        <FlexBox flexDirection="column" gap={20}>
            {routineConfigAll.map(routineConfig => (
                <RoutineConfigAccordion
                    key={routineConfig._id}
                    routineConfig={routineConfig}
                />
            ))}
        </FlexBox>
    );
};

export default RoutineConfigAccordionList;
