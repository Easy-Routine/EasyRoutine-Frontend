import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";
import useAccordion from "hooks/client/useAccordion";
import Table from "components/content/Table/Table";
import {Exercise, RoutineExercise} from "types/model";
import useDeleteRoutineExerciseOneMutation from "hooks/server/useDeleteRoutineExerciseOneMutation";
import {useParams} from "react-router-dom";
import {Type} from "types/enum";
import EmptyBoundary from "../EmptyBoundary";
import SimpleTextEmptyView from "components/content/EmptyView/SimpleTextEmptyView";
import DefaultImage from "assets/image/default-image.png";

type TypeMapper = {
    [key: string]: string;
};

const typeMapper: TypeMapper = {
    weight: "무게",
    rep: "횟수",
    workoutSec: "시간",
};

const RoutineExerciseDetailAccordion = ({data}: {data: RoutineExercise}) => {
    const {routineHistoryId} = useParams();

    const {isOpen, handleToggleAccordion, handleDragEnd, opacity, x} =
        useAccordion();

    const {mutateAsync: deleteRoutineExerciseOneMutate} =
        useDeleteRoutineExerciseOneMutation();

    const handleRoutineExerciseDeleteButtonClick = async (
        routineExerciseId: string,
    ) => {
        await deleteRoutineExerciseOneMutate({
            // routineHistoryId: routineHistoryId as string,
            routineExerciseId,
        });
    };

    const isTypeExist = (exercise: Exercise, type: Type) =>
        exercise.type.includes(type);

    return (
        <Accordion>
            <Accordion.Motion x={x} onDragEnd={handleDragEnd}>
                <Accordion.Header>
                    <Card>
                        <Card.ImageBox>
                            {/* <img
                                src={data.exercise.image}
                                alt=""
                                style={{
                                    borderRadius: borderRadius.md,
                                    width: "100%",
                                    height: "100%",
                                }}
                            /> */}
                            <Card.Image
                                src={data.exercise.image || DefaultImage}
                            />
                        </Card.ImageBox>
                        <Card.Column>
                            <Card.Title>{data.exercise.name}</Card.Title>
                            <Card.Description>
                                {data.sets.length}세트
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
                    <EmptyBoundary
                        data={data.sets}
                        fallback={
                            <SimpleTextEmptyView>
                                세트 기록이 없습니다.
                            </SimpleTextEmptyView>
                        }
                    >
                        <Table>
                            <Table.Column
                                data={data.sets}
                                header={
                                    <Table.Row>
                                        <Table.TitleText>세트</Table.TitleText>
                                        {data.exercise.type.map(key => (
                                            <Table.TitleText>
                                                {typeMapper[key]}
                                            </Table.TitleText>
                                        ))}
                                        <Table.TitleText>휴식</Table.TitleText>
                                    </Table.Row>
                                }
                                render={(set, index) => (
                                    <Table.Row>
                                        <Table.NumberPicker
                                            value={index + 1}
                                            disabled={true}
                                        />
                                        {isTypeExist(
                                            data.exercise,
                                            Type.WEIGHT,
                                        ) && (
                                            <Table.WeightPicker
                                                value={set.weight as number}
                                                disabled={true}
                                            />
                                        )}
                                        {isTypeExist(
                                            data.exercise,
                                            Type.REP,
                                        ) && (
                                            <Table.NumberPicker
                                                value={set.rep as number}
                                                disabled={true}
                                            />
                                        )}
                                        {isTypeExist(
                                            data.exercise,
                                            Type.WORKOUT_SEC,
                                        ) && (
                                            <Table.TimePicker
                                                value={(
                                                    set.workoutSec as number
                                                ).toString()}
                                                disabled={true}
                                            />
                                        )}

                                        <Table.TimePicker
                                            value={set.restSec.toString()}
                                            disabled={true}
                                        />
                                    </Table.Row>
                                )}
                            />
                        </Table>
                    </EmptyBoundary>
                </Accordion.Body>
                <Accordion.DeleteButton
                    opacity={opacity}
                    onDeleteButtonClick={() =>
                        handleRoutineExerciseDeleteButtonClick(data.id)
                    }
                />
            </Accordion.Motion>
        </Accordion>
    );
};

export default RoutineExerciseDetailAccordion;
