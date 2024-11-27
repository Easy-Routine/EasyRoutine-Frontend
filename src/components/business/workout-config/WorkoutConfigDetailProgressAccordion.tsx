import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";
import useAccordion from "hooks/client/useAccordion";
import { RoutineConfig, SetConfig, WorkoutConfig, WorkoutLibrary } from "db";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";
import Table from "components/content/Table/Table";
import IconTextBox from "components/content/IconTextBox/IconTextBox";
import PaddingY from "components/box/PaddingY/PaddingY";
import Button from "components/content/Button/Button";
import { ReactComponent as PenIcon } from "assets/image/pen.svg";
import { ReactComponent as RunIcon } from "assets/image/run.svg";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import useCreateWorkoutRecordOneMutation from "hooks/server/useCreateWorkoutRecordOneMutation";
import useCreateSetRecordOneMutation from "hooks/server/useCreateSetRecordOneMutation";
import useDeleteSetRecordOneMutation from "hooks/server/useDeleteSetRecordOneMutation";
import useDeleteWorkoutRecordOneMutation from "hooks/server/useDeleteWorkoutRecordOneMutation";
import moment from "moment";
import { Type } from "types/enum";

type TypeMapper = {
    [key: string]: string;
};

const typeMapper: TypeMapper = {
    weight: "무게",
    rep: "횟수",
    workoutSec: "시간",
};

type WorkoutConfigDetailProgressAccordionProps = {
    data: WorkoutConfig;
    routineRecordId: string;
    remainingTime: number;
    onSetCreate: (
        workoutConfigId: string,
        newSetConfigs: WorkoutConfig["setConfigs"]
    ) => void;
    onSetDelete: (
        workoutConfigId: string,
        newSetConfigs: WorkoutConfig["setConfigs"]
    ) => void;
    onSetComplete: (restSec: number) => void;
    onSetUpdate: (
        workoutConfigId: string,
        newSetConfigs: WorkoutConfig["setConfigs"]
    ) => void;
    onCompletedSetIdsMutate: (completedSetIds: string[]) => void;
    onWorkoutDelete: (workoutConfigId: string) => void;
};

const WorkoutConfigDetailProgressAccordion = ({
    data,
    routineRecordId,
    remainingTime,
    onSetCreate,
    onSetDelete,
    onSetComplete,
    onSetUpdate,
    onCompletedSetIdsMutate,
    onWorkoutDelete,
}: WorkoutConfigDetailProgressAccordionProps) => {
    const { color, borderRadius } = useTheme();
    const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
        useAccordion();

    const [currentSetId, setCurrentSetId] = useState(data.setConfigs[0]?._id);
    const [completedSetIds, setCompletedSetIds] = useState<string[]>([]);
    const [currentWorkoutId, setCurrentWorkoutId] = useState("");

    const { mutateAsync: createWorkoutRecordOneMutate } =
        useCreateWorkoutRecordOneMutation();

    const { mutateAsync: createSetRecordOneMutate } =
        useCreateSetRecordOneMutation();

    const { mutateAsync: deleteSetRecordOneMutate } =
        useDeleteSetRecordOneMutation();

    const { mutateAsync: deleteWorkoutRecordOneMutate } =
        useDeleteWorkoutRecordOneMutation();

    useEffect(() => {
        // 컴포넌트가 마운트 될때 운동 기록 데이터를 생성  및 setCurrentWorkoutId하기
        if (routineRecordId && data) {
            (async () => {
                const newWorkoutRecordOne = await createWorkoutRecordOneMutate({
                    routineRecordId,
                    workoutLibrary: data.workoutLibrary,
                });
                if (newWorkoutRecordOne) {
                    setCurrentWorkoutId(newWorkoutRecordOne._id);
                }
            })();
        }
    }, [createWorkoutRecordOneMutate, routineRecordId]);

    const isCurrentSet = (setId: string) => setId === currentSetId;
    const isCompletedSet = (setId: string) => completedSetIds.includes(setId);
    const isWorkoutCompleted =
        completedSetIds.length === data.setConfigs.length;
    const isRestTime = remainingTime > 0;

    console.log(completedSetIds.length, data.setConfigs.length);

    const handleCompleteSetButtonClick = async () => {
        const newCompletedSetIds = structuredClone(completedSetIds);
        newCompletedSetIds.push(currentSetId);
        setCompletedSetIds(newCompletedSetIds);
        setCurrentSetId(data.setConfigs[newCompletedSetIds.length]?._id);

        const currentSetConfig = data.setConfigs.find(
            (setConfig) => setConfig._id === currentSetId
        );

        if (currentSetConfig) {
            onSetComplete(currentSetConfig.restSec);
            await createSetRecordOneMutate({
                routineRecordId: routineRecordId as string,
                workoutRecordId: currentWorkoutId,
                setConfig: currentSetConfig,
            });
        }
    };

    const handleDeleteSetButtonClick = async () => {
        const newSetConfigs = structuredClone(data.setConfigs);
        const poppedSetConfig = newSetConfigs.pop();
        const filteredCompletedSetIds = completedSetIds.filter(
            (_id) => _id !== poppedSetConfig?._id
        );
        setCompletedSetIds(filteredCompletedSetIds);
        onSetDelete(data._id, newSetConfigs);
        // currentWorkoutId에 세트 데이터 삭제하기 (삭제할때, 생성 순으로 가져온 후 마지막요소 삭제후 put 하기)

        if (completedSetIds.includes(poppedSetConfig?._id as string)) {
            await deleteSetRecordOneMutate({
                routineRecordId: routineRecordId as string,
                workoutRecordId: currentWorkoutId,
            });
        }
    };

    const handleCreateSetButtonClick = () => {
        const newSetConfigs = structuredClone(data.setConfigs);
        newSetConfigs.push({
            _id: (newSetConfigs.length + 1).toString(),
            weight: 0,
            rep: 0,
            restSec: 0,
            workoutSec: 0,
            createdAt: moment().toISOString(),
            updatedAt: moment().toISOString(),
            workoutConfigId: "1",
        });
        setCurrentSetId(newSetConfigs[completedSetIds.length]._id);
        onSetCreate(data._id, newSetConfigs);
    };

    const handleUpdateSetInputChange = (
        index: number,
        key: string,
        value: string
    ) => {
        const newSetConfigs = structuredClone(data.setConfigs);
        newSetConfigs[index][key] = value;

        onSetUpdate(data._id, newSetConfigs);
    };

    const handleDeleteWorkoutButtonClick = async (workoutRecordId: string) => {
        await deleteWorkoutRecordOneMutate({
            routineRecordId: routineRecordId as string,
            workoutRecordId,
        });
        onWorkoutDelete(data._id);
    };

    useEffect(() => {
        onCompletedSetIdsMutate(completedSetIds);
    }, [completedSetIds]);

    const isTypeExist = (workoutLibrary: WorkoutLibrary, type: Type) =>
        workoutLibrary.type.includes(type);

    return (
        <Accordion>
            <Accordion.Motion x={x} onDragEnd={handleDragEnd}>
                <Accordion.Header>
                    <Card>
                        <Card.ImageBox>
                            <Card.Image src={data.workoutLibrary.image} />
                        </Card.ImageBox>
                        <Card.Column>
                            <Card.Title>{data.workoutLibrary.name}</Card.Title>
                            <Card.Description>
                                {data.setConfigs.length}종목
                            </Card.Description>
                            <Card.ProgressBar
                                fullLength={data.setConfigs.length}
                                portionLength={completedSetIds.length}
                            />
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
                            data={data.setConfigs}
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
                            render={(setConfig: SetConfig, index) => (
                                <Table.Row
                                    key={setConfig._id}
                                    isGrayLine={isCompletedSet(setConfig._id)}
                                    isPrimaryLine={isCurrentSet(setConfig._id)}
                                >
                                    <Table.NumberPicker
                                        value={index + 1}
                                        disabled={true}
                                    />
                                    {isTypeExist(
                                        data.workoutLibrary,
                                        Type.WEIGHT
                                    ) && (
                                        <Table.WeightPicker
                                            value={setConfig.weight}
                                            onInputChange={(value) =>
                                                handleUpdateSetInputChange(
                                                    index,
                                                    Type.WEIGHT,
                                                    value
                                                )
                                            }
                                            disabled={isCompletedSet(
                                                setConfig._id
                                            )}
                                        />
                                    )}
                                    {isTypeExist(
                                        data.workoutLibrary,
                                        Type.REP
                                    ) && (
                                        <Table.NumberPicker
                                            value={setConfig.rep}
                                            onInputChange={(value) =>
                                                handleUpdateSetInputChange(
                                                    index,
                                                    Type.REP,
                                                    value
                                                )
                                            }
                                            disabled={isCompletedSet(
                                                setConfig._id
                                            )}
                                        />
                                    )}
                                    {isTypeExist(
                                        data.workoutLibrary,
                                        Type.WORKOUT_SEC
                                    ) && (
                                        <Table.TimePicker
                                            value={setConfig.workoutSec.toString()}
                                            onInputChange={(value) =>
                                                handleUpdateSetInputChange(
                                                    index,
                                                    Type.WORKOUT_SEC,
                                                    value
                                                )
                                            }
                                            disabled={isCompletedSet(
                                                setConfig._id
                                            )}
                                        />
                                    )}

                                    <Table.TimePicker
                                        value={setConfig.restSec.toString()}
                                        onInputChange={(value) =>
                                            handleUpdateSetInputChange(
                                                index,
                                                "restSec",
                                                value
                                            )
                                        }
                                        disabled={isCompletedSet(setConfig._id)}
                                    />
                                </Table.Row>
                            )}
                        />
                    </Table>
                    <IconTextBox>
                        <IconTextBox.IconText
                            color={color.gray.dark}
                            onIconTextClick={handleDeleteSetButtonClick}
                        >
                            <PenIcon />
                            세트 삭제하기
                        </IconTextBox.IconText>
                        <IconTextBox.IconText
                            color={color.primary}
                            onIconTextClick={handleCreateSetButtonClick}
                        >
                            <RunIcon />
                            세트 추가하기
                        </IconTextBox.IconText>
                    </IconTextBox>
                    <PaddingY>
                        <Button
                            onClick={handleCompleteSetButtonClick}
                            disabled={isWorkoutCompleted || isRestTime}
                        >
                            세트완료
                        </Button>
                    </PaddingY>
                </Accordion.Body>
                <Accordion.DeleteButton
                    opacity={opacity}
                    onDeleteButtonClick={() =>
                        handleDeleteWorkoutButtonClick(currentWorkoutId)
                    }
                />
            </Accordion.Motion>
        </Accordion>
    );
};

export default WorkoutConfigDetailProgressAccordion;
