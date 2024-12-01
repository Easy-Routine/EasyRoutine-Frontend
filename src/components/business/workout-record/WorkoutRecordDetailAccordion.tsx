import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";
import useAccordion from "hooks/client/useAccordion";
import Table from "components/content/Table/Table";
import { WorkoutLibrary, WorkoutRecord } from "types/model";
import useDeleteWorkoutRecordOneMutation from "hooks/server/useDeleteWorkoutRecordOneMutation";
import { useParams } from "react-router-dom";
import { Type } from "types/enum";

type TypeMapper = {
    [key: string]: string;
};

const typeMapper: TypeMapper = {
    weight: "무게",
    rep: "횟수",
    workoutSec: "시간",
};

const WorkoutRecordDetailAccordion = ({ data }: { data: WorkoutRecord }) => {
    const { routineRecordId } = useParams();

    const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
        useAccordion();

    const { mutateAsync: deleteWorkoutRecordOneMutate } =
        useDeleteWorkoutRecordOneMutation();

    const handleWorkoutRecordDeleteButtonClick = async (
        workoutRecordId: string
    ) => {
        await deleteWorkoutRecordOneMutate({
            routineRecordId: routineRecordId as string,
            workoutRecordId,
        });
    };

    const isTypeExist = (workoutLibrary: WorkoutLibrary, type: Type) =>
        workoutLibrary.type.includes(type);

    return (
        <Accordion>
            <Accordion.Motion x={x} onDragEnd={handleDragEnd}>
                <Accordion.Header>
                    <Card>
                        <Card.ImageBox>
                            {/* <img
                                src={data.workoutLibrary.image}
                                alt=""
                                style={{
                                    borderRadius: borderRadius.md,
                                    width: "100%",
                                    height: "100%",
                                }}
                            /> */}
                            <Card.Image src={data.workoutLibrary.image} />
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
                        <Accordion.Arrow isOpen={isOpen} />
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
                                    <Table.NumberPicker
                                        value={index + 1}
                                        disabled={true}
                                    />
                                    {isTypeExist(
                                        data.workoutLibrary,
                                        Type.WEIGHT
                                    ) && (
                                        <Table.WeightPicker
                                            value={setRecord.weight}
                                            disabled={true}
                                        />
                                    )}
                                    {isTypeExist(
                                        data.workoutLibrary,
                                        Type.REP
                                    ) && (
                                        <Table.NumberPicker
                                            value={setRecord.rep}
                                            disabled={true}
                                        />
                                    )}
                                    {isTypeExist(
                                        data.workoutLibrary,
                                        Type.WORKOUT_SEC
                                    ) && (
                                        <Table.TimePicker
                                            value={setRecord.workoutSec.toString()}
                                            disabled={true}
                                        />
                                    )}

                                    <Table.TimePicker
                                        value={setRecord.restSec.toString()}
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
                        handleWorkoutRecordDeleteButtonClick(data._id)
                    }
                />
            </Accordion.Motion>
        </Accordion>
    );
};

export default WorkoutRecordDetailAccordion;
