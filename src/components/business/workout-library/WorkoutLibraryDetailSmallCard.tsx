import SmallCard from "components/content/SmallCard/SmallCard";
import styled from "styled-components";
import {ReactComponent as ArrowIcon} from "assets/image/arrow.svg";
import {Exercise} from "types/model";
import DefaultImage from "assets/image/default-image.png";

const RightArrowIcon = styled(ArrowIcon)`
    transform: rotate(-90deg);
`;

type ExerciseDetailSmallCardProps = {
    data: Exercise;
    onSmallCardClick: (exerciseId: string) => void;
    onSmallCardLongPress: (exerciseId: string) => void;
};

const ExerciseDetailSmallCard = ({
    data,
    onSmallCardClick,
    onSmallCardLongPress,
}: ExerciseDetailSmallCardProps) => {
    return (
        <SmallCard
            onCardClick={() => onSmallCardClick(data.id)}
            onLongPress={() => onSmallCardLongPress(data.id)}
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

export default ExerciseDetailSmallCard;
