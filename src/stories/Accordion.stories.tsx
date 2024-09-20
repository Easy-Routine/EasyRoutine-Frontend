import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "components/template/Accordion";
import SmallCard from "components/template/SmallCard/SmallCard";
import SmallCardList from "components/template/SmallCard/SmallCardList";
import SeatedRowImage from "assets/image/seated-row.png";
import { ReactComponent as FireIcon } from "assets/image/fire.svg";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";
import { ReactComponent as PenIcon } from "assets/image/pen.svg";
import { ReactComponent as RunIcon } from "assets/image/run.svg";
import React from "react";
import useAccordion from "hooks/client/useAccordion";

type AccordionProps = React.ComponentProps<typeof Accordion>;

const meta: Meta<any> = {
    component: Accordion,
    render: (args) => {
        const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
            useAccordion();

        return (
            <Accordion>
                <Accordion.Motion x={x} onDragEnd={handleDragEnd}>
                    <Accordion.Header>
                        <Accordion.Card>
                            <Accordion.ImageBox backgroundColor={args.color}>
                                <FireIcon />
                            </Accordion.ImageBox>
                            <Accordion.ColumnBox>
                                <Accordion.BoldText>
                                    {args.name}
                                </Accordion.BoldText>
                                <Accordion.NormalText>
                                    {args.workoutConfigs.length}종목
                                </Accordion.NormalText>
                            </Accordion.ColumnBox>
                        </Accordion.Card>
                        <Accordion.Trigger
                            onToggleAccordion={handleToggleAccordion}
                        >
                            <ArrowIcon />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Body isOpen={isOpen}>
                        <SmallCardList<any>
                            data={args.workoutConfigs}
                            render={(item) => (
                                <SmallCard>
                                    <SmallCard.ImageBox>
                                        <img
                                            src={SeatedRowImage}
                                            alt="seated row"
                                        />
                                    </SmallCard.ImageBox>
                                    <SmallCard.ColumnBox>
                                        <SmallCard.BoldText>
                                            벤치프레스
                                        </SmallCard.BoldText>
                                        <SmallCard.NormalText>
                                            5세트
                                        </SmallCard.NormalText>
                                    </SmallCard.ColumnBox>
                                </SmallCard>
                            )}
                        />
                        <Accordion.BodyFooter>
                            <Accordion.IconText color={"#7D7D7D"}>
                                <PenIcon />
                                <div>루틴 수정하기</div>
                            </Accordion.IconText>
                            <Accordion.IconText color={"#40E0D0"}>
                                <RunIcon />
                                <div>루틴 수정하기</div>
                            </Accordion.IconText>
                        </Accordion.BodyFooter>
                    </Accordion.Body>
                    <Accordion.DeleteButton opacity={opacity} />
                </Accordion.Motion>
            </Accordion>
        );
    },
};

export default meta;

type Story = StoryObj<any>;

export const Default: Story = {
    args: {
        id: 1,
        name: "나의 가슴 루틴",
        color: "#f0fff0",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        workoutConfigs: [
            {
                id: 1,
                name: "벤치프레스",
                workoutImage: SeatedRowImage,
                type: "weight, time",
                createdAt: new Date(),
                updatedAt: new Date(),
                routineConfigId: 1,
            },
            {
                id: 2,
                name: "벤치프레스",
                workoutImage: SeatedRowImage,
                type: "weight, time",
                createdAt: new Date(),
                updatedAt: new Date(),
                routineConfigId: 1,
            },
            {
                id: 3,
                name: "벤치프레스",
                workoutImage: SeatedRowImage,
                type: "weight, time",
                createdAt: new Date(),
                updatedAt: new Date(),
                routineConfigId: 1,
            },
        ],
    },
};
