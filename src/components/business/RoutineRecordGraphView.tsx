import Box from "components/box/Box/Box";
import Modal from "components/box/Modal/Modal";
import Button from "components/content/Button/Button";
import ChipTab from "components/content/ChipTab/ChipTab";
import Graph from "components/content/Graph/Graph";
import useTab from "hooks/client/useTab";
import styled from "styled-components";
import SearchInput from "components/content/SearchInput/SearchInput";
import useInput from "hooks/client/useInput";
import useModal from "hooks/client/useModal";
import SmallCard from "components/content/SmallCard/SmallCard";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import { WorkoutLibrary } from "types/workout-library";
import SeatedRowImage from "assets/image/seated-row.png";
import { useState } from "react";
import TitleText from "components/content/TitleText/TitleText";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineRecordGraphView = () => {
    const { selectedValue, handleTabClick } = useTab("1week");
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();
    const {
        selectedValue: selectedChipTabValue,
        handleTabClick: handleChipTabClick,
    } = useTab("가슴");
    const { value, handleInputChange, handleInputClear } = useInput();
    const [currentWorkout, setCurrentWorkout] = useState({
        id: "",
        name: "운동 선택",
    });

    const data = [
        { key: "1월", value: 400 },
        { key: "2월", value: 300 },
        { key: "3월", value: 200 },
        { key: "4월", value: 278 },
        { key: "5월", value: 189 },
        { key: "6월", value: 400 },
        { key: "7월", value: 300 },
        { key: "8월", value: 400 },
        { key: "9월", value: 300 },
        { key: "10월", value: 200 },
        { key: "11월", value: 278 },
        { key: "12월", value: 189 },
    ];

    const workoutLibraryData = [
        {
            id: "1",
            name: "벤치프레스",
            workoutImage: SeatedRowImage,
            workoutPart: "가슴",
            type: "weight, rep, workoutSec",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
        },
        {
            id: "2",
            name: "데드리프트",
            workoutImage: SeatedRowImage,
            workoutPart: "등",
            type: "weight, rep, workoutSec",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
        },
        {
            id: "3",
            name: "스쿼트",
            workoutImage: SeatedRowImage,
            workoutPart: "하체",
            type: "weight, rep, workoutSec",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
        },
    ];

    const handleButtonClick = () => {
        handleOpenModal();
    };

    const handleCardClick = ({ id, name }: { id: string; name: string }) => {
        setCurrentWorkout({ id, name });
        handleTabClick("1week");
        handleCloseModal();
    };

    return (
        <Container>
            <Box>
                <TitleText>{currentWorkout.name}</TitleText>
            </Box>
            <Box>
                <Graph
                    onDotClick={(data) => console.log(data)}
                    data={data}
                    lineKey="key"
                    areaKey="value"
                />
            </Box>

            <ChipTab>
                <ChipTab.Chip
                    value="1week"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    1주
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="1month"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    1달
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="3month"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    3달
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="1year"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    1년
                </ChipTab.Chip>
                <ChipTab.Chip
                    value="all"
                    selectedValue={selectedValue}
                    onTabClick={handleTabClick}
                >
                    전체
                </ChipTab.Chip>
            </ChipTab>

            <Button onClick={handleButtonClick}>운동 선택하기</Button>

            <Modal>
                <Modal.Backdrop
                    isOpen={isOpen}
                    onBackdropClick={handleCloseModal}
                />
                <Modal.BottomSheet isOpen={isOpen}>
                    <Container>
                        <SearchInput
                            value={value}
                            onInputChange={handleInputChange}
                            onInputClear={handleInputClear}
                        />
                        <ChipTab>
                            <ChipTab.Chip
                                value="가슴"
                                selectedValue={selectedChipTabValue}
                                onTabClick={handleChipTabClick}
                            >
                                가슴
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value="등"
                                selectedValue={selectedChipTabValue}
                                onTabClick={handleChipTabClick}
                            >
                                등
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value="어깨"
                                selectedValue={selectedChipTabValue}
                                onTabClick={handleChipTabClick}
                            >
                                어깨
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value="하체"
                                selectedValue={selectedChipTabValue}
                                onTabClick={handleChipTabClick}
                            >
                                하체
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value="팔"
                                selectedValue={selectedChipTabValue}
                                onTabClick={handleChipTabClick}
                            >
                                팔
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value="기타"
                                selectedValue={selectedChipTabValue}
                                onTabClick={handleChipTabClick}
                            >
                                기타
                            </ChipTab.Chip>
                        </ChipTab>

                        <SmallCardList<WorkoutLibrary>
                            data={workoutLibraryData}
                            render={({ id, name }, index) => (
                                <SmallCard
                                    onCardClick={() =>
                                        handleCardClick({ id, name })
                                    }
                                >
                                    <SmallCard.ImageBox>
                                        <img
                                            src={SeatedRowImage}
                                            alt="seated row"
                                        />
                                    </SmallCard.ImageBox>
                                    <SmallCard.NormalText>
                                        {name}
                                    </SmallCard.NormalText>
                                </SmallCard>
                            )}
                        />
                    </Container>
                </Modal.BottomSheet>
            </Modal>
        </Container>
    );
};

export default RoutineRecordGraphView;
