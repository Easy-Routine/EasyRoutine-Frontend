import Modal from "components/box/Modal/Modal";
import styled from "styled-components";
import SearchInput from "components/content/SearchInput/SearchInput";
import useInput from "hooks/client/useInput";
import ChipTab from "components/content/ChipTab/ChipTab";
import useTab from "hooks/client/useTab";
import SmallCardList from "components/content/SmallCard/SmallCardList";
import SmallCard from "components/content/SmallCard/SmallCard";
import SeatedRowImage from "assets/image/seated-row.png";
import useGetWorkoutLibraryAllQuery from "hooks/server/useGetWorkoutLibraryAllQuery";
import { WorkoutLibrary } from "db";
import { Category } from "type/Category";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    overflow: auto;
`;

const SmallCardListContainer = styled.div`
    height: 205px;
    overflow-y: auto;
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
    const { value, handleInputChange, handleInputClear } = useInput();
    const {
        selectedValue: selectedChipTabValue,
        handleTabClick: handleChipTabClick,
    } = useTab(Category.ALL);

    const { data: workoutLibraryAllData } = useGetWorkoutLibraryAllQuery(
        value,
        selectedChipTabValue
    );

    const workoutLibraryAll = workoutLibraryAllData ?? [];

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
                            value={Category.ALL}
                            selectedValue={selectedChipTabValue}
                            onTabClick={handleChipTabClick}
                        >
                            전체
                        </ChipTab.Chip>
                        <ChipTab.Chip
                            value={Category.CHEST}
                            selectedValue={selectedChipTabValue}
                            onTabClick={handleChipTabClick}
                        >
                            가슴
                        </ChipTab.Chip>
                        <ChipTab.Chip
                            value={Category.BACK}
                            selectedValue={selectedChipTabValue}
                            onTabClick={handleChipTabClick}
                        >
                            등
                        </ChipTab.Chip>
                        <ChipTab.Chip
                            value={Category.SHOULDER}
                            selectedValue={selectedChipTabValue}
                            onTabClick={handleChipTabClick}
                        >
                            어깨
                        </ChipTab.Chip>
                        <ChipTab.Chip
                            value={Category.LEG}
                            selectedValue={selectedChipTabValue}
                            onTabClick={handleChipTabClick}
                        >
                            하체
                        </ChipTab.Chip>
                        <ChipTab.Chip
                            value={Category.ARM}
                            selectedValue={selectedChipTabValue}
                            onTabClick={handleChipTabClick}
                        >
                            팔
                        </ChipTab.Chip>
                        <ChipTab.Chip
                            value={Category.ETC}
                            selectedValue={selectedChipTabValue}
                            onTabClick={handleChipTabClick}
                        >
                            기타
                        </ChipTab.Chip>
                    </ChipTab>

                    <SmallCardListContainer>
                        <SmallCardList<WorkoutLibrary>
                            data={workoutLibraryAll}
                            render={({ id, name }) => (
                                <SmallCard
                                    onCardClick={() => onSmallCardClick(id)}
                                    key={id}
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
                    </SmallCardListContainer>
                </Container>
            </Modal.BottomSheet>
        </Modal>
    );
};

export default WorkoutLibraryListGraphBottomSheet;
