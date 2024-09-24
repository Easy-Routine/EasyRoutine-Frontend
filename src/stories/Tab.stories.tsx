import type { Meta, StoryObj } from "@storybook/react";
import Tab from "components/content/Tab/Tab";
import useTab from "hooks/client/useTab";

type TabProps = React.ComponentProps<typeof Tab>;

const meta: Meta<TabProps> = {
    component: Tab,
};

export default meta;

type Story = StoryObj<any>;

export const DefaultTab: Story = {
    render: () => {
        const { selectedValue, handleTabClick } = useTab("calendar");

        return (
            <>
                <Tab>
                    <Tab.Button
                        value="calendar"
                        selectedValue={selectedValue}
                        onButtonClick={handleTabClick}
                    >
                        캘린더
                    </Tab.Button>
                    <Tab.Button
                        value="graph"
                        selectedValue={selectedValue}
                        onButtonClick={handleTabClick}
                    >
                        통계
                    </Tab.Button>
                </Tab>
            </>
        );
    },
};
