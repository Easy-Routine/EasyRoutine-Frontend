import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "components/box/Accordion";
import SmallCard from "components/content/SmallCard/SmallCard";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import SeatedRowImage from "assets/image/seated-row.png";
import { ReactComponent as FireIcon } from "assets/image/fire.svg";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";
import { ReactComponent as PenIcon } from "assets/image/pen.svg";
import { ReactComponent as RunIcon } from "assets/image/run.svg";
import React from "react";
import useAccordion from "hooks/client/useAccordion";
import Table from "components/content/Table/Table";
import Button from "components/content/Button/Button";

type AccordionProps = React.ComponentProps<typeof Accordion>;

const meta: Meta<any> = {
    component: Accordion,
};

export default meta;

type Story = StoryObj<any>;

export const RoutineConfigAccordionCard: Story = {
    render: () => {
        const args = {
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
        };

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

export const WorkoutConfigAccordionCard: Story = {
    render: () => {
        const args = {
            id: 1,
            name: "벤치프레스",
            createdAt: new Date(),
            updatedAt: new Date(),
            workoutImage: SeatedRowImage,
            routineId: 3,
            setConfigs: [
                {
                    id: 1,
                    order: 1,
                    weight: 10,
                    rep: 10,
                    restSec: 50,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    workoutConfigId: 1,
                },
                {
                    id: 2,
                    order: 1,
                    weight: 10,
                    rep: 10,
                    restSec: 50,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    workoutConfigId: 1,
                },
                {
                    id: 3,
                    order: 1,
                    weight: 10,
                    rep: 10,
                    restSec: 50,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    workoutConfigId: 1,
                },
            ],
        };

        const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
            useAccordion();

        return (
            <Accordion>
                <Accordion.Motion x={x} onDragEnd={handleDragEnd}>
                    <Accordion.Header>
                        <Accordion.Card>
                            <Accordion.ImageBox>
                                <img
                                    width={"100%"}
                                    src={args.workoutImage}
                                    alt={"운동 이미지"}
                                />
                            </Accordion.ImageBox>
                            <Accordion.ColumnBox>
                                <Accordion.BoldText>
                                    {args.name}
                                </Accordion.BoldText>
                                <Accordion.NormalText>
                                    {args.setConfigs.length}종목
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
                        <Table>
                            <Table.Column
                                data={args.setConfigs}
                                header={
                                    <Table.Row>
                                        <Table.TitleText>세트</Table.TitleText>
                                        <Table.TitleText>KG</Table.TitleText>
                                        <Table.TitleText>횟수</Table.TitleText>
                                        <Table.TitleText>휴식</Table.TitleText>
                                    </Table.Row>
                                }
                                render={(setConfig) => (
                                    <Table.Row>
                                        <Table.Input
                                            value={setConfig.order.toString()}
                                            onInputChange={(value) =>
                                                console.log(value)
                                            }
                                        />
                                        <Table.Input
                                            value={setConfig.order.toString()}
                                            onInputChange={(value) =>
                                                console.log(value)
                                            }
                                        />
                                        <Table.Input
                                            value={setConfig.order.toString()}
                                            onInputChange={(value) =>
                                                console.log(value)
                                            }
                                        />
                                        <Table.Input
                                            value={setConfig.order.toString()}
                                            onInputChange={(value) =>
                                                console.log(value)
                                            }
                                        />
                                    </Table.Row>
                                )}
                            />
                        </Table>
                        <Accordion.BodyFooter>
                            <Accordion.IconText color={"#7D7D7D"}>
                                <PenIcon />
                                <div>세트 삭제하기</div>
                            </Accordion.IconText>
                            <Accordion.IconText color={"#40E0D0"}>
                                <RunIcon />
                                <div>세트 추가하기</div>
                            </Accordion.IconText>
                        </Accordion.BodyFooter>
                    </Accordion.Body>
                    <Accordion.DeleteButton opacity={opacity} />
                </Accordion.Motion>
            </Accordion>
        );
    },
};

export const WorkoutProgressAccordionCard: Story = {
    render: () => {
        const args = {
            id: 1,
            name: "벤치프레스",
            createdAt: new Date(),
            updatedAt: new Date(),
            workoutImage: SeatedRowImage,
            routineId: 3,
            setConfigs: [
                {
                    id: 1,
                    order: 1,
                    weight: 10,
                    rep: 10,
                    restSec: 50,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    workoutConfigId: 1,
                },
                {
                    id: 2,
                    order: 1,
                    weight: 10,
                    rep: 10,
                    restSec: 50,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    workoutConfigId: 1,
                },
                {
                    id: 3,
                    order: 1,
                    weight: 10,
                    rep: 10,
                    restSec: 50,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    workoutConfigId: 1,
                },
            ],
        };

        const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
            useAccordion();

        return (
            <Accordion>
                <Accordion.Motion x={x} onDragEnd={handleDragEnd}>
                    <Accordion.Header>
                        <Accordion.Card>
                            <Accordion.ImageBox>
                                <img
                                    width={"100%"}
                                    src={args.workoutImage}
                                    alt={"운동 이미지"}
                                />
                            </Accordion.ImageBox>
                            <Accordion.ColumnBox>
                                <Accordion.BoldText>
                                    {args.name}
                                </Accordion.BoldText>
                                <Accordion.NormalText>
                                    {args.setConfigs.length}종목
                                </Accordion.NormalText>
                                <Accordion.ProgressBar
                                    fullLength={100}
                                    portionLength={60}
                                />
                            </Accordion.ColumnBox>
                        </Accordion.Card>
                        <Accordion.Trigger
                            onToggleAccordion={handleToggleAccordion}
                        >
                            <ArrowIcon />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Body isOpen={isOpen}>
                        <Table>
                            <Table.Column
                                data={args.setConfigs}
                                header={
                                    <Table.Row>
                                        <Table.TitleText>세트</Table.TitleText>
                                        <Table.TitleText>KG</Table.TitleText>
                                        <Table.TitleText>횟수</Table.TitleText>
                                        <Table.TitleText>휴식</Table.TitleText>
                                    </Table.Row>
                                }
                                render={(setConfig) => (
                                    <Table.Row
                                        isGrayLine={setConfig.id === 1}
                                        isPrimaryLine={setConfig.id === 2}
                                    >
                                        <Table.Input
                                            value={setConfig.order.toString()}
                                            onInputChange={(value) =>
                                                console.log(value)
                                            }
                                        />
                                        <Table.Input
                                            value={setConfig.order.toString()}
                                            onInputChange={(value) =>
                                                console.log(value)
                                            }
                                        />
                                        <Table.Input
                                            value={setConfig.order.toString()}
                                            onInputChange={(value) =>
                                                console.log(value)
                                            }
                                        />
                                        <Table.Input
                                            value={setConfig.order.toString()}
                                            onInputChange={(value) =>
                                                console.log(value)
                                            }
                                        />
                                    </Table.Row>
                                )}
                            />
                        </Table>
                        <Accordion.BodyFooter>
                            <Accordion.IconText color={"#7D7D7D"}>
                                <PenIcon />
                                <div>세트 삭제하기</div>
                            </Accordion.IconText>
                            <Accordion.IconText color={"#40E0D0"}>
                                <RunIcon />
                                <div>세트 추가하기</div>
                            </Accordion.IconText>
                        </Accordion.BodyFooter>
                        <Button>세트완료</Button>
                    </Accordion.Body>
                    <Accordion.DeleteButton opacity={opacity} />
                </Accordion.Motion>
            </Accordion>
        );
    },
};
