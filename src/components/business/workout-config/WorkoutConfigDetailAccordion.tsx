import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";

import IconTextBox from "components/content/IconTextBox/IconTextBox";
import useAccordion from "hooks/client/useAccordion";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";
import { ReactComponent as PlusIcon } from "assets/image/plus2.svg";
import { ReactComponent as MinusIcon } from "assets/image/minus.svg";
import Table from "components/content/Table/Table";
import { useTheme } from "styled-components";
import { SetConfig, WorkoutConfig } from "db";
import useCreateSetConfigOneMutation from "hooks/server/useCreateSetConfigOneMutation";
import useUpdateSetConfigFieldMutation from "hooks/server/useUpdateSetConfigFiledMutation";

type TypeMapper = {
    [key: string]: string;
};

const typeMapper: TypeMapper = {
    weight: "무게",
    rep: "횟수",
    workoutSec: "시간",
};

const WorkoutConfigDetailAccordion = ({ data }: { data: WorkoutConfig }) => {
    const { color } = useTheme();
    const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
        useAccordion();

    const { mutateAsync: createSetConfigMutate } =
        useCreateSetConfigOneMutation();
    const { mutateAsync: updateSetConfigFieldMutate } =
        useUpdateSetConfigFieldMutation();

    const handleSetCreateButtonClick = async () => {
        await createSetConfigMutate(data.id);
    };

    const handleSetInputChange = async (
        setConfigId: string,
        key: string,
        value: string
    ) => {
        await updateSetConfigFieldMutate({ setConfigId, key, value });
    };

    // 비동기 작업 추가
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
                                {data.setConfigs.length}세트
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
                            data={data.setConfigs}
                            header={
                                <Table.Row>
                                    <Table.TitleText>세트</Table.TitleText>
                                    {data.workoutLibrary.type.map((key) => (
                                        <Table.TitleText key={key}>
                                            {typeMapper[key]}
                                        </Table.TitleText>
                                    ))}
                                    <Table.TitleText>휴식</Table.TitleText>
                                </Table.Row>
                            }
                            render={(
                                setConfig: SetConfig & { [key: string]: any },
                                index: number
                            ) => (
                                <Table.Row key={setConfig.id}>
                                    {" "}
                                    {/* 고유한 id를 key로 사용 */}
                                    <Table.Input
                                        value={(index + 1).toString()}
                                        disabled={true}
                                    />
                                    {data.workoutLibrary.type.map((key) => (
                                        <Table.Input
                                            key={key} // 각 Input에도 key를 추가
                                            value={setConfig[key].toString()}
                                            onInputChange={(value) =>
                                                handleSetInputChange(
                                                    setConfig.id,
                                                    key,
                                                    value
                                                )
                                            }
                                        />
                                    ))}
                                    <Table.Input
                                        value={setConfig.restSec.toString()}
                                        onInputChange={(value) =>
                                            handleSetInputChange(
                                                setConfig.id,
                                                "restSec",
                                                value
                                            )
                                        }
                                    />
                                </Table.Row>
                            )}
                        />
                    </Table>
                    <IconTextBox>
                        <IconTextBox.IconText color={color.gray.dark}>
                            <MinusIcon />
                            세트 삭제하기
                        </IconTextBox.IconText>
                        <IconTextBox.IconText
                            color={color.primary}
                            onIconTextClick={handleSetCreateButtonClick}
                        >
                            <PlusIcon />
                            세트 추가하기
                        </IconTextBox.IconText>
                    </IconTextBox>
                </Accordion.Body>
                <Accordion.DeleteButton opacity={opacity} />
            </Accordion.Motion>
        </Accordion>
    );
};

export default WorkoutConfigDetailAccordion;
