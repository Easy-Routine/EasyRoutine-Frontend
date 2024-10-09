import BottomBar from "components/box/BottomBar/BottomBar";
import ColorTab from "components/box/BottomBar/ColorTab";
import useTab from "hooks/client/useTab";
import React, { useEffect } from "react";

type RoutineConfigColorTabBottomBarProps = {
    defaultValue: string;
};

const RoutineConfigColorTabBottomBar = ({
    defaultValue,
}: RoutineConfigColorTabBottomBarProps) => {
    const { selectedValue, setSelectedValue, handleTabClick } =
        useTab(defaultValue);

    useEffect(() => {
        setSelectedValue(defaultValue);
    }, [defaultValue, setSelectedValue]);

    const handleColorTabClick = (value: string) => {
        //TODO: routine-config 칼라 수정 API 연결
        handleTabClick(value);
    };

    return (
        <BottomBar>
            <ColorTab>
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={handleColorTabClick}
                    value="#855CF8"
                    backgroundColor="#855CF8"
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={handleColorTabClick}
                    value="#F26B2C"
                    backgroundColor="#F26B2C"
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={handleColorTabClick}
                    value="#2DAF2D"
                    backgroundColor="#2DAF2D"
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={handleColorTabClick}
                    value="#455A64"
                    backgroundColor="#455A64"
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={handleColorTabClick}
                    value="#DD408F"
                    backgroundColor="#DD408F"
                />
            </ColorTab>
        </BottomBar>
    );
};

export default RoutineConfigColorTabBottomBar;
