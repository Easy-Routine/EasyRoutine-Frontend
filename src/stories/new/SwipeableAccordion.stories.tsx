/** @jsxImportSource @emotion/react */
import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import SwipeableAccordion from "headful/SwiperableAccordion/SwipeableAccordion";
import {css} from "@emotion/react";

type SwipeableAccordionProps = React.ComponentProps<typeof SwipeableAccordion>;

const meta: Meta<SwipeableAccordionProps> = {
    title: "Components/SwipeableAccordion", // Storybook에서 표시될 제목
    component: SwipeableAccordion,
};

export default meta;

type Story = StoryObj<SwipeableAccordionProps>;

export const DefaultSwipeableAccordion: Story = {
    render: () => (
        <div
            css={css`
                display: flex;
            `}
        >
            <SwipeableAccordion>
                <SwipeableAccordion.Box>
                    <SwipeableAccordion.Visible>
                        dd
                        {/* <ImageText>
                            <ImageText.Image
                                width={60}
                                height={60}
                                src="https://example.com/image.jpg"
                            />
                            <ImageText.Text>
                                <ImageTextText.Bold>
                                    Bold Text
                                </ImageTextText.Bold>
                                <ImageTextText.Regular>
                                    Regular Text
                                </ImageTextText.Regular>
                            </ImageText.Text>
                        </ImageText> */}
                    </SwipeableAccordion.Visible>
                    <SwipeableAccordion.Hidden>
                        <div>히든</div>
                    </SwipeableAccordion.Hidden>
                    <SwipeableAccordion.DeleteButton />
                </SwipeableAccordion.Box>
            </SwipeableAccordion>
        </div>
    ),
};
