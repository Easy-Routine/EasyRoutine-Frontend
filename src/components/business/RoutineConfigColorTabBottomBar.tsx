import BottomBar from "components/box/BottomBar/BottomBar";
import ColorTab from "components/box/BottomBar/ColorTab";
import useTab from "hooks/client/useTab";
import React from "react";

type RoutineConfigColorTabBottomBarProps = {
    defaultValue: string;
};

const RoutineConfigColorTabBottomBar = ({
    defaultValue,
}: RoutineConfigColorTabBottomBarProps) => {
    const { selectedValue, handleTabClick } = useTab(defaultValue);
    return (
        <BottomBar>
            <ColorTab>
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                    value="violet"
                    backgroundColor="#855CF8"
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                    value="orange"
                    backgroundColor="#F26B2C"
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                    value="green"
                    backgroundColor="#2DAF2D"
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                    value="blue"
                    backgroundColor="#455A64"
                />
                <ColorTab.Color
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                    value="pink"
                    backgroundColor="#DD408F"
                />
            </ColorTab>
        </BottomBar>
    );
};

export default RoutineConfigColorTabBottomBar;
