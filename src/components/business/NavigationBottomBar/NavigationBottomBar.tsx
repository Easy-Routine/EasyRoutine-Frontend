import BottomBar from "components/box/BottomBar/BottomBar";
import ColorTab from "components/box/BottomBar/ColorTab";
import NavigationTab from "components/box/BottomBar/NavigationTab";
import { ReactComponent as HomeIcon } from "assets/image/home.svg";
import { ReactComponent as GraphIcon } from "assets/image/graph.svg";
import { ReactComponent as TileIcon } from "assets/image/tile.svg";
import { ReactComponent as UserIcon } from "assets/image/user.svg";
import useTab from "hooks/client/useTab";
import React from "react";

type NavigationBottomBarProps = {
    defaultValue: string;
};

const NavigationBottomBar = ({ defaultValue }: NavigationBottomBarProps) => {
    const { selectedValue, handleTabClick } = useTab(defaultValue);

    return (
        <BottomBar>
            <NavigationTab>
                <NavigationTab.NavItem
                    value="home"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    <HomeIcon />홈
                </NavigationTab.NavItem>
                <NavigationTab.NavItem
                    value="graph"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    <GraphIcon />
                    기록
                </NavigationTab.NavItem>
                <NavigationTab.NavItem
                    value="library"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    <TileIcon />
                    라이브러리
                </NavigationTab.NavItem>
                <NavigationTab.NavItem
                    value="my"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    <UserIcon />
                    마이
                </NavigationTab.NavItem>
            </NavigationTab>
        </BottomBar>
    );
};

export default NavigationBottomBar;
