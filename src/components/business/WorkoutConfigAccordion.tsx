import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";

import IconTextBox from "components/content/IconTextBox/IconTextBox";
import useAccordion from "hooks/client/useAccordion";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";
import { ReactComponent as PlusIcon } from "assets/image/plus2.svg";
import { ReactComponent as MinusIcon } from "assets/image/minus.svg";
import { WorkoutConfig } from "types/config";
import Table from "components/content/Table/Table";

const WorkoutConfigAccordion = ({ data }: { data: WorkoutConfig }) => {
    const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
        useAccordion();

    // 비동기 작업 추가
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
                    <IconTextBox>
                        <IconTextBox.IconText color={"#7D7D7D"}>
                            <MinusIcon />
                            <div>세트 삭제하기</div>
                        </IconTextBox.IconText>
                        <IconTextBox.IconText color={"#40E0D0"}>
                            <PlusIcon />
                            <div>세트 추가하기</div>
                        </IconTextBox.IconText>
                    </IconTextBox>
                </Accordion.Body>
                <Accordion.DeleteButton opacity={opacity} />
            </Accordion.Motion>
        </Accordion>
    );
};

export default WorkoutConfigAccordion;
