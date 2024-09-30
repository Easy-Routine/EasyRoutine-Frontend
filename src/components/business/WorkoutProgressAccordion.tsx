import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";
import useAccordion from "hooks/client/useAccordion";
import { WorkoutConfig } from "types/config";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";
import Table from "components/content/Table/Table";
import IconTextBox from "components/content/IconTextBox/IconTextBox";
import PaddingY from "components/box/PaddingY/PaddingY";
import Button from "components/content/Button/Button";
import { ReactComponent as PenIcon } from "assets/image/pen.svg";
import { ReactComponent as RunIcon } from "assets/image/run.svg";
import { useEffect, useState } from "react";

type WorkoutProgressAccordionProp = {
    data: WorkoutConfig;
    onSetCreate: (
        workoutConfigId: string,
        newSetConfigs: WorkoutConfig["setConfigs"]
    ) => void;
    onSetDelete: (
        workoutConfigId: string,
        newSetConfigs: WorkoutConfig["setConfigs"]
    ) => void;
};

const WorkoutProgressAccordion = ({
    data,
    onSetCreate,
    onSetDelete,
}: WorkoutProgressAccordionProp) => {
    const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
        useAccordion();

    const [currentSetId, setCurrentSetId] = useState(data.setConfigs[0]?.id);
    const [completedSetIds, setCompletedSetIds] = useState<string[]>([]);

    const [currentWorkoutId, setCurrentWorkoutId] = useState(null);

    useEffect(() => {
        // 컴포넌트가 마운트 될때 운동 기록 데이터를 생성  및 setCurrentWorkoutId하기
    }, []);

    const isCurrentSet = (setId: string) => setId === currentSetId;
    const isCompletedSet = (setId: string) => completedSetIds.includes(setId);
    const isWorkoutCompleted =
        completedSetIds.length === data.setConfigs.length;

    const handleCompleteWorkoutButtonClick = () => {
        const newCompletedSetIds = structuredClone(completedSetIds);
        newCompletedSetIds.push(currentSetId);
        setCompletedSetIds(newCompletedSetIds);
        setCurrentSetId(data.setConfigs[newCompletedSetIds.length]?.id);
        // TODO: 데이터 추가 API
    };

    const handleDeleteSetButtonClick = () => {
        const newSetConfigs = structuredClone(data.setConfigs);
        const poppedSetConfig = newSetConfigs.pop();
        const filteredSetConfig = completedSetIds.filter(
            (id) => id !== poppedSetConfig?.id
        );
        setCompletedSetIds(filteredSetConfig);
        onSetDelete(data.id, newSetConfigs);
        // currentWorkoutId에 세트 데이터 삭제하기
    };

    const handleCreateSetButtonClick = () => {
        const newSetConfigs = structuredClone(data.setConfigs);
        newSetConfigs.push({
            id: (newSetConfigs.length + 1).toString(),
            order: newSetConfigs.length + 1,
            weight: 50,
            rep: 10,
            restSec: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
            workoutConfigId: "1",
        });
        setCurrentSetId(newSetConfigs[completedSetIds.length].id);
        onSetCreate(data.id, newSetConfigs);
        // // currentWorkoutId에 세트 데이터 추가하기
    };

    return (
        <Accordion>
            <Accordion.Motion x={x} onDragEnd={handleDragEnd}>
                <Accordion.Header>
                    <Card>
                        <Card.ImageBox>
                            <img
                                width={"100%"}
                                src={data.workoutImage}
                                alt={"운동 이미지"}
                            />
                        </Card.ImageBox>
                        <Card.Column>
                            <Card.Title>{data.name}</Card.Title>
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
                        <ArrowIcon />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Body isOpen={isOpen}>
                    <Table>
                        <Table.Column
                            data={data.setConfigs}
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
                                    isGrayLine={isCompletedSet(setConfig.id)}
                                    isPrimaryLine={isCurrentSet(setConfig.id)}
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
                    <IconTextBox>
                        <IconTextBox.IconText
                            color={"#7D7D7D"}
                            onIconTextClick={handleDeleteSetButtonClick}
                        >
                            <PenIcon />
                            <div>세트 삭제하기</div>
                        </IconTextBox.IconText>
                        <IconTextBox.IconText
                            color={"#40E0D0"}
                            onIconTextClick={handleCreateSetButtonClick}
                        >
                            <RunIcon />
                            <div>세트 추가하기</div>
                        </IconTextBox.IconText>
                    </IconTextBox>
                    <PaddingY>
                        <Button
                            onClick={handleCompleteWorkoutButtonClick}
                            disabled={isWorkoutCompleted}
                        >
                            세트완료
                        </Button>
                    </PaddingY>
                </Accordion.Body>
                <Accordion.DeleteButton opacity={opacity} />
            </Accordion.Motion>
        </Accordion>
    );
};

export default WorkoutProgressAccordion;
