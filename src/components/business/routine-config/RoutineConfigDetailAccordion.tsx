import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import SmallCard from "components/content/SmallCard/SmallCard";
import IconTextBox from "components/content/IconTextBox/IconTextBox";
import useAccordion from "hooks/client/useAccordion";
import {ReactComponent as FireIcon} from "assets/image/fire.svg";
import {ReactComponent as ArrowIcon} from "assets/image/arrow.svg";
import {ReactComponent as PenIcon} from "assets/image/pen.svg";
import {ReactComponent as RunIcon} from "assets/image/run.svg";
import {useNavigate} from "react-router-dom";
import ROUTES from "constants/routes";
import {useTheme} from "styled-components";
import {Routine, RoutineExercise} from "types/model";
import EmptyBoundary from "../EmptyBoundary";
import SimpleTextEmptyView from "components/content/EmptyView/SimpleTextEmptyView";
import DefaultImage from "assets/image/default-image.png";

type RoutineDetailAccordionProps = {
    data: Routine;
    onRoutineDeleteButtonClick: (routineId: string) => void;
    onRoutineProgressButtonClick: (routineId: string) => void;
};

const RoutineDetailAccordion = ({
    data,
    onRoutineProgressButtonClick,
    onRoutineDeleteButtonClick,
}: RoutineDetailAccordionProps) => {
    const {color} = useTheme();
    const navigate = useNavigate();
    const {isOpen, handleToggleAccordion, handleDragEnd, opacity, x} =
        useAccordion();

    const handleRoutineUpdateButtonClick = (routineId: string) => {
        navigate(ROUTES.CONFIG.DETAIL.PATH(routineId));
    };

    // 비동기 작업 추가
    return (
        <>
            <Accordion>
                <Accordion.Motion x={x} onDragEnd={handleDragEnd}>
                    <Accordion.Header>
                        <Card>
                            <Card.ImageBox $backgroundColor={data.color}>
                                <FireIcon style={{color: data.color}} />
                            </Card.ImageBox>
                            <Card.Column>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Description>
                                    {data.routineExercises?.length}종목
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
                                    운동 설정이 없습니다.
                                </SimpleTextEmptyView>
                            }
                        >
                            <SmallCardList<RoutineExercise>
                                data={data.routineExercises}
                                render={routineExercise => (
                                    <SmallCard key={routineExercise.id}>
                                        <SmallCard.ImageBox
                                            src={
                                                routineExercise.exercise
                                                    .image || DefaultImage
                                            }
                                        />
                                        <SmallCard.ColumnBox>
                                            <SmallCard.BoldText>
                                                {routineExercise.exercise.name}
                                            </SmallCard.BoldText>
                                            <SmallCard.NormalText>
                                                {routineExercise.sets.length}
                                                세트
                                            </SmallCard.NormalText>
                                        </SmallCard.ColumnBox>
                                    </SmallCard>
                                )}
                            />
                        </EmptyBoundary>

                        <IconTextBox>
                            <IconTextBox.IconText
                                color={color.gray.dark}
                                onIconTextClick={() => {
                                    handleRoutineUpdateButtonClick(data.id);
                                }}
                            >
                                <PenIcon />
                                루틴 수정하기
                            </IconTextBox.IconText>
                            <IconTextBox.IconText
                                color={color.primary}
                                onIconTextClick={() => {
                                    onRoutineProgressButtonClick(data.id);
                                }}
                            >
                                <RunIcon />
                                루틴 시작하기
                            </IconTextBox.IconText>
                        </IconTextBox>
                    </Accordion.Body>
                    <Accordion.DeleteButton
                        opacity={opacity}
                        onDeleteButtonClick={() =>
                            onRoutineDeleteButtonClick(data.id)
                        }
                    />
                </Accordion.Motion>
            </Accordion>
        </>
    );
};

export default RoutineDetailAccordion;
