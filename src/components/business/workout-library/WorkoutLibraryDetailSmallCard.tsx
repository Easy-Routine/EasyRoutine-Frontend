import SmallCard from "components/content/SmallCard/SmallCard";
import styled from "styled-components";
import {ReactComponent as ArrowIcon} from "assets/image/arrow.svg";
import {WorkoutLibrary} from "types/model";
import DefaultImage from "assets/image/default-image.png";

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
            onCardClick={() => onSmallCardClick(data._id)}
            onLongPress={() => onSmallCardLongPress(data._id)}
        >
            <SmallCard.Between>
                <SmallCard.ImageText>
                    <SmallCard.ImageBox src={data.image || DefaultImage} />
                    <SmallCard.NormalText>{data.name}</SmallCard.NormalText>
                </SmallCard.ImageText>
                <RightArrowIcon />
            </SmallCard.Between>
        </SmallCard>
    );
};

export default WorkoutLibraryDetailSmallCard;
