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
import { useNavigate } from "react-router-dom";
import ROUTES from "constants/routes";
import { useTheme } from "styled-components";
import { RoutineConfig, WorkoutConfig } from "db";

type RoutineConfigDetailAccordionProps = {
    data: RoutineConfig;
    onRoutineConfigDeleteButtonClick: (routineConfigId: string) => void;
    onRoutineConfigProgressButtonClick: (routineConfigId: string) => void;
};

const RoutineConfigDetailAccordion = ({
    data,
    onRoutineConfigProgressButtonClick,
    onRoutineConfigDeleteButtonClick,
}: RoutineConfigDetailAccordionProps) => {
    const { color } = useTheme();
    const navigate = useNavigate();
    const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
        useAccordion();

    const handleRoutineUpdateButtonClick = (routineConfigId: string) => {
        navigate(ROUTES.CONFIG.DETAIL.PATH(routineConfigId));
    };

    // 비동기 작업 추가
    return (
        <>
            <Accordion>
                <Accordion.Motion x={x} onDragEnd={handleDragEnd}>
                    <Accordion.Header>
                        <Card>
                            <Card.ImageBox $backgroundColor={data.color}>
                                <FireIcon />
                            </Card.ImageBox>
                            <Card.Column>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Description>
                                    {data.workoutConfigs?.length}종목
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
                        <SmallCardList<WorkoutConfig>
                            data={data.workoutConfigs}
                            render={(workoutConfig) => (
                                <SmallCard key={workoutConfig.id}>
                                    <SmallCard.ImageBox>
                                        <img
                                            src={
                                                workoutConfig.workoutLibrary
                                                    .workoutImage
                                            }
                                            alt="운동 이미지"
                                        />
                                    </SmallCard.ImageBox>
                                    <SmallCard.ColumnBox>
                                        <SmallCard.BoldText>
                                            {workoutConfig.workoutLibrary.name}
                                        </SmallCard.BoldText>
                                        <SmallCard.NormalText>
                                            {workoutConfig.setConfigs.length}
                                            세트
                                        </SmallCard.NormalText>
                                    </SmallCard.ColumnBox>
                                </SmallCard>
                            )}
                        />
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
                                    onRoutineConfigProgressButtonClick(data.id);
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
                            onRoutineConfigDeleteButtonClick(data.id)
                        }
                    />
                </Accordion.Motion>
            </Accordion>
        </>
    );
};

export default RoutineConfigDetailAccordion;
