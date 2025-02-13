import type { Meta, StoryObj } from "@storybook/react";
import ChipTab from "components/content/ChipTab/ChipTab";
import useTab from "hooks/client/useTab";

type ChipTabProps = React.ComponentProps<typeof ChipTab>;

const meta: Meta<ChipTabProps> = {
    component: ChipTab,
};

export default meta;

type Story = StoryObj<any>;

export const DefaultChipTab: Story = {
    render: () => {
        const { selectedValue, handleTabClick } = useTab("calendar");

        return (
            <ChipTab>
                <ChipTab.Chip
                    value="가슴"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    가슴
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="등"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    등
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="어깨"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    어깨
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="하체"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    하체
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="팔"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    팔
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="기타"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    기타
                </ChipTab.Chip>
            </ChipTab>
        );
    },
};
