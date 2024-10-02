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
import Modal from "components/box/Modal/Modal";
import Confirm from "components/content/Confirm/Confirm";
import { ReactComponent as ClockIcon } from "assets/image/clock.svg";
import { ReactComponent as TrashIcon } from "assets/image/trash.svg";
import useModal from "hooks/client/useModal";
import { useTheme } from "styled-components";

const RoutineConfigAccordion = ({ data }: { data: RoutineConfig }) => {
    const { color } = useTheme();
    const navigate = useNavigate();
    const { isOpen, handleToggleAccordion, handleDragEnd, opacity, x } =
        useAccordion();

    const {
        isOpen: isRoutineProgressModalOpen,
        handleOpenModal: openRoutineProgressModal,
        handleCloseModal: closeRoutineProgressModal,
    } = useModal();
    const {
        isOpen: isRoutineDeleteModalOpen,
        handleOpenModal: openRoutineDeleteModal,
        handleCloseModal: closeRoutineDeleteModal,
    } = useModal();

    const handleRoutineUpdateButtonClick = (routineConfigId: string) => {
        navigate(ROUTES.CONFIG.DETAIL.PATH(routineConfigId));
    };

    const handleDeleteButtonClick = () => {
        openRoutineDeleteModal();
    };

    // 비동기 작업 추가
    return (
        <>
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
                                            alt="운동 이미지"
                                        />
                                    </SmallCard.ImageBox>
                                    <SmallCard.ColumnBox>
                                        <SmallCard.BoldText>
                                            {workoutConfig.name}
                                        </SmallCard.BoldText>
                                        <SmallCard.NormalText>
                                            {workoutConfig.setConfigs.length}{" "}
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
                                <div>루틴 수정하기</div>
                            </IconTextBox.IconText>
                            <IconTextBox.IconText
                                color={color.primary}
                                onIconTextClick={() =>
                                    openRoutineProgressModal()
                                }
                            >
                                <RunIcon />
                                <div>루틴 시작하기</div>
                            </IconTextBox.IconText>
                        </IconTextBox>
                    </Accordion.Body>
                    <Accordion.DeleteButton
                        opacity={opacity}
                        onDeleteButtonClick={handleDeleteButtonClick}
                    />
                </Accordion.Motion>

                <RoutineProgressModal
                    data={data}
                    isOpen={isRoutineProgressModalOpen}
                    onBackdropClick={() => closeRoutineProgressModal()}
                    onCancelButtonClick={() => closeRoutineProgressModal()}
                    onConfirmButtonClick={() => {
                        closeRoutineProgressModal();
                        navigate(ROUTES.PROGRESS.PATH(data.id));
                    }}
                />
                <RoutineDeleteModal
                    data={data}
                    isOpen={isRoutineDeleteModalOpen}
                    onBackdropClick={() => closeRoutineDeleteModal()}
                    onCancelButtonClick={() => closeRoutineDeleteModal()}
                    onConfirmButtonClick={() => {
                        closeRoutineDeleteModal();
                        // TODO: API 연동
                    }}
                />
            </Accordion>
        </>
    );
};

export default RoutineConfigAccordion;

type RoutineProgressModalProps = {
    data: RoutineConfig;
    isOpen: boolean;
    onBackdropClick: () => void;
    onCancelButtonClick: () => void;
    onConfirmButtonClick: () => void;
};

const RoutineProgressModal = ({
    data,
    isOpen,
    onBackdropClick,
    onCancelButtonClick,
    onConfirmButtonClick,
}: RoutineProgressModalProps) => {
    return (
        <Modal>
            <Modal.Backdrop isOpen={isOpen} onBackdropClick={onBackdropClick} />
            <Modal.Content isOpen={isOpen}>
                <Confirm>
                    <Confirm.ContentBox>
                        <Confirm.IconBox>
                            <TrashIcon />
                        </Confirm.IconBox>
                        <Confirm.Title>루틴 진행</Confirm.Title>
                        <Confirm.Description>
                            '{data.name}'으로
                            <br /> 운동을 시작하시겠습니까?
                        </Confirm.Description>
                    </Confirm.ContentBox>
                    <Confirm.ButtonBox
                        cancelLabel="취소"
                        confirmLabel="시작하기"
                        onCancelButtonClick={onCancelButtonClick}
                        onConfirmButtonClick={onConfirmButtonClick}
                    />
                </Confirm>
            </Modal.Content>
        </Modal>
    );
};

type RoutineDeleteModalProps = {
    data: RoutineConfig;
    isOpen: boolean;
    onBackdropClick: () => void;
    onCancelButtonClick: () => void;
    onConfirmButtonClick: () => void;
};

const RoutineDeleteModal = ({
    data,
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
                            <ClockIcon />
                        </Confirm.IconBox>
                        <Confirm.Title>루틴 삭제</Confirm.Title>
                        <Confirm.Description>
                            '{data.name}'을
                            <br /> 삭제하시겠습니까?
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
