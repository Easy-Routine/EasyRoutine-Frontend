import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import SmallCard from "components/content/SmallCard/SmallCard";
import IconTextBox from "components/content/IconTextBox/IconTextBox";
import useAccordion from "hooks/client/useAccordion";
import { ReactComponent as FireIcon } from "assets/image/fire.svg";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";
import { ReactComponent as PenIcon } from "assets/image/pen.svg";
import { ReactComponent as RunIcon } from "assets/image/run.svg";
import { RoutineConfig } from "types/config";
import { useNavigate } from "react-router-dom";
import ROUTES from "constants/routes";

const RoutineConfigAccordion = ({ data }: { data: RoutineConfig }) => {
    const navigate = useNavigate();
    const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
        useAccordion();

    const handleRoutineProgressButtonClick = (routineConfigId: string) => {
        navigate(ROUTES.PROGRESS.PATH(routineConfigId));
    };

    // 비동기 작업 추가
    return (
        <Accordion>
            <Accordion.Motion x={x} onDragEnd={handleDragEnd}>
                <Accordion.Header>
                    <Card>
                        <Card.ImageBox backgroundColor={data.color}>
                            <FireIcon />
                        </Card.ImageBox>
                        <Card.Column>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Description>
                                {data.workoutConfigs.length}종목
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
                    <SmallCardList<any>
                        data={data.workoutConfigs}
                        render={(workoutConfig) => (
                            <SmallCard>
                                <SmallCard.ImageBox>
                                    <img
                                        src={workoutConfig.workoutImage}
                                        alt="seated row"
                                    />
                                </SmallCard.ImageBox>
                                <SmallCard.ColumnBox>
                                    <SmallCard.BoldText>
                                        {workoutConfig.name}
                                    </SmallCard.BoldText>
                                    <SmallCard.NormalText>
                                        {workoutConfig.setConfigs.length} 세트
                                    </SmallCard.NormalText>
                                </SmallCard.ColumnBox>
                            </SmallCard>
                        )}
                    />
                    <IconTextBox>
                        <IconTextBox.IconText color={"#7D7D7D"}>
                            <PenIcon />
                            <div>루틴 수정하기</div>
                        </IconTextBox.IconText>
                        <IconTextBox.IconText
                            color={"#40E0D0"}
                            onIconTextClick={() =>
                                handleRoutineProgressButtonClick(data.id)
                            }
                        >
                            <RunIcon />
                            <div>루틴 시작하기</div>
                        </IconTextBox.IconText>
                    </IconTextBox>
                </Accordion.Body>
                <Accordion.DeleteButton opacity={opacity} />
            </Accordion.Motion>
        </Accordion>
    );
};

export default RoutineConfigAccordion;
