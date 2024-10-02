import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";
import useAccordion from "hooks/client/useAccordion";
import React from "react";
import { WorkoutRecord } from "types/recrod";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";
import Table from "components/content/Table/Table";

type TypeMapper = {
    [key: string]: string;
};

const typeMapper: TypeMapper = {
    weight: "무게",
    rep: "횟수",
    workoutSec: "시간",
};

const WorkoutRecordAccordion = ({ data }: { data: WorkoutRecord }) => {
    const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
        useAccordion();

    return (
        <Accordion>
            <Accordion.Motion x={x} onDragEnd={handleDragEnd}>
                <Accordion.Header>
                    <Card>
                        <Card.ImageBox>
                            <img src={data.workoutImage} alt="" />
                        </Card.ImageBox>
                        <Card.Column>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Description>
                                {data.setRecords.length}세트
                            </Card.Description>
                        </Card.Column>
                    </Card>
                    <Accordion.Trigger
                        onToggleAccordion={handleToggleAccordion}
                    >
                        <ArrowIcon />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Body isOpen={isOpen}>
                    <Table>
                        <Table.Column
                            data={data.setRecords}
                            header={
                                <Table.Row>
                                    <Table.TitleText>세트</Table.TitleText>
                                    {data.type.map((key) => (
                                        <Table.TitleText>
                                            {typeMapper[key]}
                                        </Table.TitleText>
                                    ))}
                                    <Table.TitleText>휴식</Table.TitleText>
                                </Table.Row>
                            }
                            render={(setRecord) => (
                                <Table.Row>
                                    <Table.Input
                                        value={setRecord.order.toString()}
                                        onInputChange={(value) =>
                                            console.log(value)
                                        }
                                        disabled={true}
                                    />
                                    {data.type.map((key) => (
                                        <Table.Input
                                            value={setRecord[key].toString()}
                                            onInputChange={(value) =>
                                                console.log(value)
                                            }
                                            disabled={true}
                                        />
                                    ))}
                                    <Table.Input
                                        value={setRecord.order.toString()}
                                        onInputChange={(value) =>
                                            console.log(value)
                                        }
                                        disabled={true}
                                    />
                                </Table.Row>
                            )}
                        />
                    </Table>
                </Accordion.Body>
                <Accordion.DeleteButton opacity={opacity} />
            </Accordion.Motion>
        </Accordion>
    );
};

export default WorkoutRecordAccordion;
