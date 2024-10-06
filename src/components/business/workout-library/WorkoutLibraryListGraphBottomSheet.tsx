import Modal from "components/box/Modal/Modal";
import styled from "styled-components";
import SearchInput from "components/content/SearchInput/SearchInput";
import useInput from "hooks/client/useInput";
import ChipTab from "components/content/ChipTab/ChipTab";
import useTab from "hooks/client/useTab";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import { WorkoutLibrary } from "types/workout-library";
import SmallCard from "components/content/SmallCard/SmallCard";
import SeatedRowImage from "assets/image/seated-row.png";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

type WorkoutLibraryListGraphBottomSheetProps = {
    isOpen: boolean;
    onBackdropClick: () => void;
    onSmallCardClick: (workoutLibraryId: string) => void;
};

const WorkoutLibraryListGraphBottomSheet = ({
    isOpen,
    onBackdropClick,
    onSmallCardClick,
}: WorkoutLibraryListGraphBottomSheetProps) => {
    const data: WorkoutLibrary[] = [
        {
            id: "1",
            name: "벤치프레스",
            workoutImage: SeatedRowImage,
            workoutPart: "가슴",
            type: ["weight", "rep"],
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
        },
        {
            id: "2",
            name: "데드리프트",
            workoutImage: SeatedRowImage,
            workoutPart: "등",
            type: ["weight", "rep"],
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
        },
        {
            id: "3",
            name: "스쿼트",
            workoutImage: SeatedRowImage,
            workoutPart: "하체",
            type: ["weight", "rep"],
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 1,
        },
    ];

    const { value, handleInputChange, handleInputClear } = useInput();
    const {
        selectedValue: selectedChipTabValue,
        handleTabClick: handleChipTabClick,
    } = useTab("가슴");

    return (
        <Modal>
            <Modal.Backdrop isOpen={isOpen} onBackdropClick={onBackdropClick} />
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
                        data={data}
                        render={({ id, name }) => (
                            <SmallCard onCardClick={() => onSmallCardClick(id)}>
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
    );
};

export default WorkoutLibraryListGraphBottomSheet;
