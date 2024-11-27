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
import { Color } from "types/enum";

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
                        value={Color.VIOLET}
                        backgroundColor={Color.VIOLET}
                    />
                    <ColorTab.Color
                        selectedValue={selectedValue}
                        onTabClick={handleTabClick}
                        value={Color.ORANGE}
                        backgroundColor={Color.ORANGE}
                    />
                    <ColorTab.Color
                        selectedValue={selectedValue}
                        onTabClick={handleTabClick}
                        value={Color.GREEN}
                        backgroundColor={Color.GREEN}
                    />
                    <ColorTab.Color
                        selectedValue={selectedValue}
                        onTabClick={handleTabClick}
                        value={Color.BLUE}
                        backgroundColor={Color.BLUE}
                    />
                    <ColorTab.Color
                        selectedValue={selectedValue}
                        onTabClick={handleTabClick}
                        value={Color.PINK}
                        backgroundColor={Color.PINK}
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
                    <TimerTemplate.Timer
                        value={90}
                        onTimerClick={() => console.log()}
                    />
                    <TimerTemplate.ButtonWrapper>
                        <Button>세트 완료</Button>
                    </TimerTemplate.ButtonWrapper>
                </TimerTemplate>
            </BottomBar>
        );
    },
};
