import ButtonTabGroup from "headful/ButtonTabGroup/ButtonTabGroup";
import React from "react";
import {Before, useAlram} from "./AlarmProvider";
import {TabValue} from "headless/TabGroup/TabGroup";

const BeforeRoutineStartTab = () => {
    const {beforeRoutineStartTime, setBeforeRoutineStartTime} = useAlram();

    const handleTabClick = (value: TabValue) => {
        const newTime = value as Before;
        setBeforeRoutineStartTime(newTime);
    };

    return (
        <ButtonTabGroup defaultValue={beforeRoutineStartTime}>
            <ButtonTabGroup.Item
                value={Before.HALF_HOUR}
                onTabGroupItemClick={handleTabClick}
            >
                30분 전
            </ButtonTabGroup.Item>
            <ButtonTabGroup.Item
                value={Before.ONE_HOUR}
                onTabGroupItemClick={handleTabClick}
            >
                1시간 전
            </ButtonTabGroup.Item>
            <ButtonTabGroup.Item
                value={Before.TWO_HOUR}
                onTabGroupItemClick={handleTabClick}
            >
                2시간 전
            </ButtonTabGroup.Item>
            <ButtonTabGroup.Item
                value={Before.NONE}
                onTabGroupItemClick={handleTabClick}
            >
                설정안함
            </ButtonTabGroup.Item>
        </ButtonTabGroup>
    );
};

export default BeforeRoutineStartTab;
