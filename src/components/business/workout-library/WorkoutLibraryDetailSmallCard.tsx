import SmallCard from "components/content/SmallCard/SmallCard";
import { WorkoutLibrary } from "types/workout-library";
import SeatedRowImage from "assets/image/seated-row.png";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";

const RightArrowIcon = styled(ArrowIcon)`
    transform: rotate(-90deg);
`;

type WorkoutLibraryDetailSmallCardProps = {
    data: WorkoutLibrary;
    onSmallCardClick: (workoutLibraryId: string) => void;
    onSmallCardLongPress: (workoutLibraryId: string) => void;
};

const WorkoutLibraryDetailSmallCard = ({
    data,
    onSmallCardClick,
    onSmallCardLongPress,
}: WorkoutLibraryDetailSmallCardProps) => {
    return (
        <SmallCard
            onCardClick={() => onSmallCardClick(data.id)}
            onLongPress={() => onSmallCardLongPress(data.id)}
        >
            <SmallCard.Between>
                <SmallCard.ImageText>
                    <SmallCard.ImageBox>
                        <img src={SeatedRowImage} alt="seated row" />
                    </SmallCard.ImageBox>
                    <SmallCard.NormalText>{data.name}</SmallCard.NormalText>
                </SmallCard.ImageText>
                <RightArrowIcon />
            </SmallCard.Between>
        </SmallCard>
    );
};

export default WorkoutLibraryDetailSmallCard;
