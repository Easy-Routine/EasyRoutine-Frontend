/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import ImageText from "headful/ImageText/ImageText";
import ImageTextText from "headful/ImageText/ImageTextText/ImageTextText";

type ImageTextProps = React.ComponentProps<typeof ImageText>;

const meta: Meta<ImageTextProps> = {
    title: "Components/ImageText", // Storybook에서 표시될 제목
    component: ImageText,
};

export default meta;

type Story = StoryObj<ImageTextProps>;

export const DefaultImageText: Story = {
    render: () => (
        <ImageText>
            <ImageText.Image
                width={40}
                height={40}
                src="https://example.com/image.jpg"
            />
            <ImageText.Text>
                <ImageTextText.Bold>Bold Text</ImageTextText.Bold>
                <ImageTextText.Regular>Regular Text</ImageTextText.Regular>
            </ImageText.Text>
        </ImageText>
    ),
};
