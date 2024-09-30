import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";
import useAccordion from "hooks/client/useAccordion";
import { ReactComponent as FireIcon } from "assets/image/fire.svg";
import { RoutineRecord } from "types/recrod";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";
import { ReactComponent as PenIcon } from "assets/image/pen.svg";
import { ReactComponent as RunIcon } from "assets/image/run.svg";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import SmallCard from "components/content/SmallCard/SmallCard";
import IconTextBox from "components/content/IconTextBox/IconTextBox";
import { useNavigate } from "react-router-dom";
import ROUTES from "constants/routes";

const RoutineRecordAccordion = ({ data }: { data: RoutineRecord }) => {
    const navigate = useNavigate();

    const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
        useAccordion();

    const handleRoutineMutateTextClick = (routineRecordId: string) => {
        navigate(ROUTES.RECORD.DETAIL.PATH(routineRecordId));
    };

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
                                {data.workoutRecords.length}종목
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
                        data={data.workoutRecords}
                        render={(item) => (
                            <SmallCard>
                                <SmallCard.ImageBox>
                                    <img
                                        src={item.workoutImage}
                                        alt="seated row"
                                    />
                                </SmallCard.ImageBox>
                                <SmallCard.ColumnBox>
                                    <SmallCard.BoldText>
                                        {item.name}
                                    </SmallCard.BoldText>
                                    <SmallCard.NormalText>
                                        {item.setRecords.length}세트
                                    </SmallCard.NormalText>
                                </SmallCard.ColumnBox>
                            </SmallCard>
                        )}
                    />
                    <IconTextBox>
                        <IconTextBox.IconText
                            color={"#7D7D7D"}
                            onIconTextClick={() =>
                                handleRoutineMutateTextClick(data.id.toString())
                            }
                        >
                            <PenIcon />
                            <div>루틴 수정하기</div>
                        </IconTextBox.IconText>
                        <IconTextBox.IconText color={"#FF0000"}>
                            <RunIcon />
                            <div>루틴 삭제하기</div>
                        </IconTextBox.IconText>
                    </IconTextBox>
                </Accordion.Body>
                <Accordion.DeleteButton opacity={opacity} />
            </Accordion.Motion>
        </Accordion>
    );
};

export default RoutineRecordAccordion;
