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
import { RoutineConfig, WorkoutConfig } from "types/model";

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
                                <FireIcon style={{ color: data.color }} />
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
                            <Accordion.Arrow isOpen={isOpen} />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Body isOpen={isOpen}>
                        <SmallCardList<WorkoutConfig>
                            data={data.workoutConfigs}
                            render={(workoutConfig) => (
                                <SmallCard key={workoutConfig._id}>
                                    <SmallCard.ImageBox
                                        src={workoutConfig.workoutLibrary.image}
                                    />
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
                                    handleRoutineUpdateButtonClick(data._id);
                                }}
                            >
                                <PenIcon />
                                루틴 수정하기
                            </IconTextBox.IconText>
                            <IconTextBox.IconText
                                color={color.primary}
                                onIconTextClick={() => {
                                    onRoutineConfigProgressButtonClick(
                                        data._id
                                    );
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
                            onRoutineConfigDeleteButtonClick(data._id)
                        }
                    />
                </Accordion.Motion>
            </Accordion>
        </>
    );
};

export default RoutineConfigDetailAccordion;
