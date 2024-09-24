import type { Meta, StoryObj } from "@storybook/react";
import LabelBox from "components/box/LabelBox/LabelBox";
import ChipTab from "components/content/ChipTab/ChipTab";
import UnderlineInput from "components/content/UnderlineInput/UnderlineInput";
import useTab from "hooks/client/useTab";

type LabelBoxProps = React.ComponentProps<typeof LabelBox>;

const meta: Meta<LabelBoxProps> = {
    component: LabelBox,
};

export default meta;

type Story = StoryObj<any>;

export const DefaultLabelBox: Story = {
    render: () => {
        const { selectedValue, handleTabClick } = useTab("가슴");
        return (
            <LabelBox labelText="운동 부위">
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
            </LabelBox>
        );
    },
};

export const WithUnderlineInput: Story = {
    render: () => {
        return (
            <LabelBox labelText="운동 부위" gap="0px">
                <UnderlineInput
                    placeholder="운동 이름을 입력하세요."
                    onInputChange={(value: string) => console.log(value)}
                />
            </LabelBox>
        );
    },
};
