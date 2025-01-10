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
import {RoutineRecord} from "types/model";
import EmptyBoundary from "../EmptyBoundary";
import SimpleTextEmptyView from "components/content/EmptyView/SimpleTextEmptyView";

type RoutineRecordDetailAccordionProps = {
    data: RoutineRecord;
    onRoutineRecordDeleteButtonClick: (routineRecordId: string) => void;
};

const RoutineRecordDetailAccordion = ({
    data,
    onRoutineRecordDeleteButtonClick,
}: RoutineRecordDetailAccordionProps) => {
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
                                {data.workoutRecords.length}종목
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
                        data={data.workoutRecords}
                        fallback={
                            <SimpleTextEmptyView>
                                운동 기록이 없습니다
                            </SimpleTextEmptyView>
                        }
                    >
                        <SmallCardList<any>
                            data={data.workoutRecords}
                            render={item => (
                                <SmallCard key={item._id}>
                                    <SmallCard.ImageBox
                                        src={item.workoutLibrary.image}
                                    />
                                    <SmallCard.ColumnBox>
                                        <SmallCard.BoldText>
                                            {item.workoutLibrary.name}
                                        </SmallCard.BoldText>
                                        <SmallCard.NormalText>
                                            {item.setRecords.length}세트
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
                                navigate(ROUTES.RECORD.DETAIL.PATH(data._id))
                            }
                        >
                            <PenIcon />
                            세부 기록보기
                        </IconTextBox.IconText>
                        <IconTextBox.IconText
                            color={color.warning}
                            onIconTextClick={() =>
                                onRoutineRecordDeleteButtonClick(data._id)
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
                        onRoutineRecordDeleteButtonClick(data._id)
                    }
                />
            </Accordion.Motion>
        </Accordion>
    );
};

export default RoutineRecordDetailAccordion;
