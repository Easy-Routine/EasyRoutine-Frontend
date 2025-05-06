import React from "react";
import Image from "headful/Image/Image";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import Text from "headful/Text/Text";
import {WorkoutConfig} from "types/model";
import Flex from "headful/Flex/Flex";

type WorkoutConfigAccordionProps = {
    workoutConfig: WorkoutConfig;
    children: React.ReactNode;
};

const WorkoutConfigAccordion = ({
    workoutConfig,
    children,
}: WorkoutConfigAccordionProps) => {
    const {workoutLibrary} = workoutConfig;

    // children를 배열로 변환한 뒤, 순서대로 분해
    const [
        setConfigUpdateTable, // 0: <SetConfigUpdateTable .../>
        setConfigDeleteButton, // 1: <SetConfigDeleteButton .../>
        setConfigCreateButton, // 2: <SetConfigCreateButton .../>
        workoutDeleteButton, // 3: <WorkoutConfigDeleteButton .../>
    ] = React.Children.toArray(children) as React.ReactElement[];

    return (
        <SwipeableAccordion>
            <SwipeableAccordion.Box>
                <SwipeableAccordion.Visible>
                    <Flex gap={16}>
                        <Image
                            width={60}
                            height={60}
                            src={workoutLibrary.image}
                        />
                        <Flex direction="column" justify="space-around">
                            <Text
                                size={"var(--fontSize-lg)"}
                                weight={"var(--fontWeight-semibold)"}
                                color={"var(--text-black)"}
                            >
                                {workoutLibrary.name}
                            </Text>
                            <Text
                                size={"var(--fontSize-sm)"}
                                weight={"var(--fontWeight-regular)"}
                                color={"var(--text-black)"}
                            >
                                {workoutConfig.setConfigs.length}종목
                            </Text>
                        </Flex>
                    </Flex>
                </SwipeableAccordion.Visible>

                {/* 확장됐을 때 보이는 영역 */}
                <SwipeableAccordion.Hidden>
                    {setConfigUpdateTable}

                    <Flex padding={{t: 10, b: 10}} justify="space-around">
                        {setConfigDeleteButton}
                        {setConfigCreateButton}
                    </Flex>
                </SwipeableAccordion.Hidden>

                {/* 항상 보이는 삭제 버튼 */}
                {workoutDeleteButton}
            </SwipeableAccordion.Box>
        </SwipeableAccordion>
    );
};

export default WorkoutConfigAccordion;
