/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import LineCheckBoxGroup from "headful/LineCheckBoxGroup/LineCheckBoxGroup";
import ImageText from "headful/ImageText/ImageText";
import ImageTextText from "headful/ImageText/ImageTextText/ImageTextText";

type LineCheckBoxGroupProps = React.ComponentProps<typeof LineCheckBoxGroup>;

const meta: Meta<LineCheckBoxGroupProps> = {
    title: "Components/LineCheckBoxGroup", // Storybook에서 표시될 제목
    component: LineCheckBoxGroup,
};

export default meta;

type Story = StoryObj<LineCheckBoxGroupProps>;

export const DefaultLineCheckBoxGroup: Story = {
    render: () => (
        <LineCheckBoxGroup>
            <LineCheckBoxGroup.Item value="item1">
                <ImageText>
                    <ImageText.Image
                        width={40}
                        height={40}
                        src="https://example.com/image.jpg"
                    />
                    <ImageText.Text>
                        <ImageTextText.Bold>Bold Text</ImageTextText.Bold>
                        <ImageTextText.Regular>
                            Regular Text
                        </ImageTextText.Regular>
                    </ImageText.Text>
                </ImageText>
            </LineCheckBoxGroup.Item>
            <LineCheckBoxGroup.Item value="item2">
                <ImageText>
                    <ImageText.Image
                        width={40}
                        height={40}
                        src="https://example.com/image.jpg"
                    />
                    <ImageText.Text>
                        <ImageTextText.Bold>Bold Text</ImageTextText.Bold>
                        <ImageTextText.Regular>
                            Regular Text
                        </ImageTextText.Regular>
                    </ImageText.Text>
                </ImageText>
            </LineCheckBoxGroup.Item>
            <LineCheckBoxGroup.Item value="item3">
                <ImageText>
                    <ImageText.Image
                        width={40}
                        height={40}
                        src="https://example.com/image.jpg"
                    />
                    <ImageText.Text>
                        <ImageTextText.Bold>Bold Text</ImageTextText.Bold>
                        <ImageTextText.Regular>
                            Regular Text
                        </ImageTextText.Regular>
                    </ImageText.Text>
                </ImageText>
            </LineCheckBoxGroup.Item>
        </LineCheckBoxGroup>
    ),
};
