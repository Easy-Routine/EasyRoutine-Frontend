import type { Meta, StoryObj } from "@storybook/react";

import BottomBar from "components/box/BottomBar/BottomBar";
import ColorTab from "components/box/BottomBar/ColorTab";
import { ReactComponent as HomeIcon } from "assets/image/home.svg";
import { ReactComponent as GraphIcon } from "assets/image/graph.svg";
import { ReactComponent as TileIcon } from "assets/image/tile.svg";
import { ReactComponent as UserIcon } from "assets/image/user.svg";
import NavigationTab from "components/box/BottomBar/NavigationTab";
import useTab from "hooks/client/useTab";
import Button from "components/content/Button/Button";
import TimerTemplate from "components/box/BottomBar/TimerTemplate";

type BottomBarProps = React.ComponentProps<typeof BottomBar>;

const meta: Meta<BottomBarProps> = {
    component: BottomBar,
};

export default meta;

type Story = StoryObj<any>;

export const ColorTabBottomBar: Story = {
    render: () => {
        const { selectedValue, handleTabClick } = useTab("violet");

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
    },
};

export const NavigationBottomBar: Story = {
    render: () => {
        const { selectedValue, handleTabClick } = useTab("home");
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
    },
};

export const TimerBottomBar: Story = {
    render: () => {
        return (
            <BottomBar>
                <TimerTemplate>
                    <TimerTemplate.Timer color="red">01:30</TimerTemplate.Timer>
                    <TimerTemplate.ButtonWrapper>
                        <Button>세트 완료</Button>
                    </TimerTemplate.ButtonWrapper>
                </TimerTemplate>
            </BottomBar>
        );
    },
};
