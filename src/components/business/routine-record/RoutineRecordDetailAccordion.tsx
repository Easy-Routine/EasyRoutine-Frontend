import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";
import useAccordion from "hooks/client/useAccordion";
import {ReactComponent as FireIcon} from "assets/image/fire.svg";
import {ReactComponent as ArrowIcon} from "assets/image/arrow.svg";
import {ReactComponent as PenIcon} from "assets/image/pen.svg";
import {ReactComponent as RunIcon} from "assets/image/run.svg";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import SmallCard from "components/content/SmallCard/SmallCard";
import IconTextBox from "components/content/IconTextBox/IconTextBox";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";
import {useTheme} from "styled-components";
import {Color} from "types/enum";
import {RoutineHistory} from "types/model";
import EmptyBoundary from "../EmptyBoundary";
import SimpleTextEmptyView from "components/content/EmptyView/SimpleTextEmptyView";
import DefaultImage from "assets/image/default-image.png";

type RoutineHistoryDetailAccordionProps = {
    data: RoutineHistory;
    onRoutineHistoryDeleteButtonClick: (routineHistoryId: string) => void;
};

const RoutineHistoryDetailAccordion = ({
    data,
    onRoutineHistoryDeleteButtonClick,
}: RoutineHistoryDetailAccordionProps) => {
    const navigate = useNavigate();
    const {color} = useTheme();

    const {isOpen, handleToggleAccordion, handleDragEnd, opacity, x} =
        useAccordion();

    return (
        <Accordion>
            <Accordion.Motion x={x} onDragEnd={handleDragEnd}>
                <Accordion.Header>
                    <Card>
                        <Card.ImageBox $backgroundColor={data.color as Color}>
                            <FireIcon />
                        </Card.ImageBox>
                        <Card.Column>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Description>
                                {data.routineExercises.length}종목
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
                        data={data.routineExercises}
                        fallback={
                            <SimpleTextEmptyView>
                                운동 기록이 없습니다
                            </SimpleTextEmptyView>
                        }
                    >
                        <SmallCardList<any>
                            data={data.routineExercises}
                            render={item => (
                                <SmallCard key={item.id}>
                                    <SmallCard.ImageBox
                                        src={
                                            item.exercise.image || DefaultImage
                                        }
                                    />
                                    <SmallCard.ColumnBox>
                                        <SmallCard.BoldText>
                                            {item.exercise.name}
                                        </SmallCard.BoldText>
                                        <SmallCard.NormalText>
                                            {item.sets.length}세트
                                        </SmallCard.NormalText>
                                    </SmallCard.ColumnBox>
                                </SmallCard>
                            )}
                        />
                    </EmptyBoundary>

                    <IconTextBox>
                        <IconTextBox.IconText
                            color={color.gray.dark}
                            onIconTextClick={() =>
                                navigate(ROUTES.RECORD.DETAIL.PATH(data.id))
                            }
                        >
                            <PenIcon />
                            세부 기록보기
                        </IconTextBox.IconText>
                        <IconTextBox.IconText
                            color={color.warning}
                            onIconTextClick={() =>
                                onRoutineHistoryDeleteButtonClick(data.id)
                            }
                        >
                            <RunIcon />
                            루틴 삭제하기
                        </IconTextBox.IconText>
                    </IconTextBox>
                </Accordion.Body>
                <Accordion.DeleteButton
                    opacity={opacity}
                    onDeleteButtonClick={() =>
                        onRoutineHistoryDeleteButtonClick(data.id)
                    }
                />
            </Accordion.Motion>
        </Accordion>
    );
};

export default RoutineHistoryDetailAccordion;
