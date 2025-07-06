import ContentBox from "headful/ContentBox/ContentBox";
import Flex from "headful/Flex/Flex";
import Text from "headful/Text/Text";
import React from "react";
import {FaClock, FaRegClock} from "react-icons/fa";
import {LuAlarmClock} from "react-icons/lu";
import {LuClock} from "react-icons/lu";
import {useAlram} from "./AlarmProvider";
import RoutineStartHourSelect from "./RoutineStartHourSelect";
import RoutineStartMinuteSelect from "./RoutineStartMinuteSelect";
import BeforeRoutineStartTab from "./BeforeRoutineStartTab";

const AlarmSettingBox = () => {
    const {isActive} = useAlram();

    return (
        <>
            {isActive && (
                <ContentBox>
                    <Flex direction="column" gap={16}>
                        <Flex gap={12}>
                            <LuClock size={24} />
                            <Flex direction="column" gap={4} width="100%">
                                <Text weight="600">운동 시작 알림 시간</Text>
                                <Text size={12} color="#666">
                                    매일 이 시간에 운동 알람을 받을거에요.
                                </Text>
                                <Flex>
                                    <div style={{flex: 1}}>
                                        <RoutineStartHourSelect />
                                    </div>
                                    :
                                    <div style={{flex: 1}}>
                                        <RoutineStartMinuteSelect />
                                    </div>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex gap={12} width="100%">
                            <LuAlarmClock size={24} />
                            <Flex direction="column" gap={4} width="100%">
                                <Text weight="600">운동 시작 전 알림 시간</Text>
                                <Text size={12} color="#666">
                                    운동 시작 전에 미리 알려드릴게요.
                                </Text>

                                <BeforeRoutineStartTab />
                            </Flex>
                        </Flex>
                    </Flex>
                </ContentBox>
            )}
        </>
    );
};

export default AlarmSettingBox;
