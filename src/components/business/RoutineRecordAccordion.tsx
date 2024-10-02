import Accordion from "components/box/Accordion/Accordion";
import Card from "components/content/Card/Card";
import useAccordion from "hooks/client/useAccordion";
import { ReactComponent as FireIcon } from "assets/image/fire.svg";
import { RoutineRecord } from "types/recrod";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";
import { ReactComponent as PenIcon } from "assets/image/pen.svg";
import { ReactComponent as RunIcon } from "assets/image/run.svg";
import { ReactComponent as TrashIcon } from "assets/image/trash.svg";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import SmallCard from "components/content/SmallCard/SmallCard";
import IconTextBox from "components/content/IconTextBox/IconTextBox";
import { useNavigate } from "react-router-dom";
import ROUTES from "constants/routes";
import { useTheme } from "styled-components";
import useModal from "hooks/client/useModal";
import Modal from "components/box/Modal/Modal";
import Confirm from "components/content/Confirm/Confirm";

const RoutineRecordAccordion = ({ data }: { data: RoutineRecord }) => {
    const navigate = useNavigate();
    const { color } = useTheme();

    const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
        useAccordion();

    const {
        isOpen: isRoutineDeleteModalOpen,
        handleOpenModal: openRoutineDeleteModal,
        handleCloseModal: closeRoutineDeleteModal,
    } = useModal();

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
                                        alt="운동 이미지"
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
                            onIconTextClick={() => openRoutineDeleteModal()}
                        >
                            <RunIcon />
                            루틴 삭제하기
                        </IconTextBox.IconText>
                    </IconTextBox>
                </Accordion.Body>
                <Accordion.DeleteButton
                    opacity={opacity}
                    onDeleteButtonClick={() => openRoutineDeleteModal()}
                />
            </Accordion.Motion>
            <RoutineDeleteModal
                isOpen={isRoutineDeleteModalOpen}
                onBackdropClick={() => closeRoutineDeleteModal()}
                onCancelButtonClick={() => closeRoutineDeleteModal()}
                onConfirmButtonClick={() => {
                    closeRoutineDeleteModal();
                    // TODO: API 연동
                }}
            />
        </Accordion>
    );
};

export default RoutineRecordAccordion;

type RoutineDeleteModalProps = {
    isOpen: boolean;
    onBackdropClick: () => void;
    onCancelButtonClick: () => void;
    onConfirmButtonClick: () => void;
};

const RoutineDeleteModal = ({
    isOpen,
    onBackdropClick,
    onCancelButtonClick,
    onConfirmButtonClick,
}: RoutineDeleteModalProps) => {
    return (
        <Modal>
            <Modal.Backdrop isOpen={isOpen} onBackdropClick={onBackdropClick} />
            <Modal.Content isOpen={isOpen}>
                <Confirm>
                    <Confirm.ContentBox>
                        <Confirm.IconBox>
                            <TrashIcon />
                        </Confirm.IconBox>
                        <Confirm.Title>기록 삭제</Confirm.Title>
                        <Confirm.Description>
                            운동 기록을 삭제하면 복구할 수 없습니다. <br />
                            해당 기록을 삭제하시겠습니까?
                        </Confirm.Description>
                    </Confirm.ContentBox>
                    <Confirm.ButtonBox
                        cancelLabel="취소"
                        confirmLabel="삭제하기"
                        onCancelButtonClick={onCancelButtonClick}
                        onConfirmButtonClick={onConfirmButtonClick}
                    />
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};
