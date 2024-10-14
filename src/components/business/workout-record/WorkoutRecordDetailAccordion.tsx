import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";
import useAccordion from "hooks/client/useAccordion";
import React from "react";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";
import Table from "components/content/Table/Table";
import { WorkoutRecord } from "db";
import useDeleteWorkoutRecordOneMutation from "hooks/server/useDeleteWorkoutRecordOneMutation";

type TypeMapper = {
    [key: string]: string;
};

const typeMapper: TypeMapper = {
    weight: "무게",
    rep: "횟수",
    workoutSec: "시간",
};

const WorkoutRecordDetailAccordion = ({ data }: { data: WorkoutRecord }) => {
    const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
        useAccordion();

    const { mutateAsync: deleteWorkoutRecordOneMutate } =
        useDeleteWorkoutRecordOneMutation();

    const handleWorkoutRecordDeleteButtonClick = async (
        workoutRecordId: string
    ) => {
        await deleteWorkoutRecordOneMutate(workoutRecordId);
    };

    return (
        <Accordion>
            <Accordion.Motion x={x} onDragEnd={handleDragEnd}>
                <Accordion.Header>
                    <Card>
                        <Card.ImageBox>
                            <img
                                src={data.workoutLibrary.workoutImage}
                                alt=""
                            />
                        </Card.ImageBox>
                        <Card.Column>
                            <Card.Title>{data.workoutLibrary.name}</Card.Title>
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
                                    {data.workoutLibrary.type.map((key) => (
                                        <Table.TitleText>
                                            {typeMapper[key]}
                                        </Table.TitleText>
                                    ))}
                                    <Table.TitleText>휴식</Table.TitleText>
                                </Table.Row>
                            }
                            render={(setRecord, index) => (
                                <Table.Row>
                                    <Table.Input
                                        value={(index + 1).toString()}
                                        onInputChange={(value) =>
                                            console.log(value)
                                        }
                                        disabled={true}
                                    />
                                    {data.workoutLibrary.type.map((key) => (
                                        <Table.Input
                                            value={setRecord[key].toString()}
                                            onInputChange={(value) =>
                                                console.log(value)
                                            }
                                            disabled={true}
                                        />
                                    ))}
                                    <Table.Input
                                        value={setRecord.restSec.toString()}
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
                <Accordion.DeleteButton
                    opacity={opacity}
                    onDeleteButtonClick={() =>
                        handleWorkoutRecordDeleteButtonClick(data.id)
                    }
                />
            </Accordion.Motion>
        </Accordion>
    );
};

export default WorkoutRecordDetailAccordion;
