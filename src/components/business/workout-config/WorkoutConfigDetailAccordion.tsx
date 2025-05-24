import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";
import IconTextBox from "components/content/IconTextBox/IconTextBox";
import useAccordion from "hooks/client/useAccordion";
import {ReactComponent as PlusIcon} from "assets/image/plus2.svg";
import {ReactComponent as MinusIcon} from "assets/image/minus.svg";
import Table from "components/content/Table/Table";
import {useTheme} from "styled-components";
import {Set, RoutineExercise, Exercise} from "types/model";
import useCreateSetOneMutation from "hooks/server/useCreateSetOneMutation";
import useUpdateSetFieldMutation from "hooks/server/useUpdateSetFiledMutation";
import useDeleteSetOneMutation from "hooks/server/useDeleteSetOneMutation";
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
    const {color} = useTheme();
    const {isOpen, handleToggleAccordion, handleDragEnd, opacity, x} =
        useAccordion();
    const {routineId} = useParams();

    const {mutateAsync: createSetOneMutate} = useCreateSetOneMutation();
    const {mutateAsync: updateSetFieldMutate} = useUpdateSetFieldMutation();
    const {mutateAsync: deleteSetOneMutate} = useDeleteSetOneMutation();
    const {mutateAsync: deleteRoutineExerciseOneMutate} =
        useDeleteRoutineExerciseOneMutation();

    const handleSetDeleteButtonClick = async (routineExerciseId: string) => {
        await deleteSetOneMutate({
            // routineId: routineId as string,
            routineExerciseId,
        });
    };

    const handleSetCreateButtonClick = async (routineExerciseId: string) => {
        await createSetOneMutate({
            // routineId: routineId as string,
            routineExerciseId,
        });
    };

    const handleWorkoutDeleteButtonClick = async (
        routineExerciseId: string,
    ) => {
        await deleteRoutineExerciseOneMutate({
            // routineId: routineId as string,
            routineExerciseId,
        });
    };

    const handleSetInputChange = async (
        setId: string,
        key: string,
        value: string,
    ) => {
        await updateSetFieldMutate({
            routineId: routineId as string,
            routineExerciseId: data.id,
            setId,
            key,
            value,
        });
    };

    const isTypeExist = (exercise: Exercise, type: Type) =>
        exercise.type.includes(type);

    // 비동기 작업 추가
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
                                세트 설정이 없습니다.
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
                                            <Table.TitleText key={key}>
                                                {typeMapper[key]}
                                            </Table.TitleText>
                                        ))}
                                        <Table.TitleText>휴식</Table.TitleText>
                                    </Table.Row>
                                }
                                render={(
                                    set: Set & {
                                        [key: string]: any;
                                    },
                                    index: number,
                                ) => (
                                    <Table.Row key={set.id}>
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
                                                onInputChange={value =>
                                                    handleSetInputChange(
                                                        set.id,
                                                        Type.WEIGHT,
                                                        value,
                                                    )
                                                }
                                            />
                                        )}
                                        {isTypeExist(
                                            data.exercise,
                                            Type.REP,
                                        ) && (
                                            <Table.NumberPicker
                                                value={set.rep as number}
                                                onInputChange={value =>
                                                    handleSetInputChange(
                                                        set.id,
                                                        Type.REP,
                                                        value,
                                                    )
                                                }
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
                                                onInputChange={value =>
                                                    handleSetInputChange(
                                                        set.id,
                                                        Type.WORKOUT_SEC,
                                                        value,
                                                    )
                                                }
                                            />
                                        )}
                                        <Table.TimePicker
                                            value={set.restSec.toString()}
                                            onInputChange={value =>
                                                handleSetInputChange(
                                                    set.id,
                                                    "restSec",
                                                    value,
                                                )
                                            }
                                        />
                                    </Table.Row>
                                )}
                            />
                        </Table>
                    </EmptyBoundary>
                    <IconTextBox>
                        <IconTextBox.IconText
                            color={color.gray.dark}
                            onIconTextClick={() =>
                                handleSetDeleteButtonClick(data.id)
                            }
                        >
                            <MinusIcon />
                            세트 삭제하기
                        </IconTextBox.IconText>
                        <IconTextBox.IconText
                            color={color.primary}
                            onIconTextClick={() =>
                                handleSetCreateButtonClick(data.id)
                            }
                        >
                            <PlusIcon />
                            세트 추가하기
                        </IconTextBox.IconText>
                    </IconTextBox>
                </Accordion.Body>
                <Accordion.DeleteButton
                    opacity={opacity}
                    onDeleteButtonClick={() =>
                        handleWorkoutDeleteButtonClick(data.id)
                    }
                />
            </Accordion.Motion>
        </Accordion>
    );
};

export default RoutineExerciseDetailAccordion;
