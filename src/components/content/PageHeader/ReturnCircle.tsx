import CircleBox from "components/box/CircleBox/CircleBox";
import { ReactComponent as LeftArrowIcon } from "assets/image/left-arrow.svg";

type ReturnCircleProps = {
    onReturnCircleClick: () => void;
};

const ReturnCircle = ({ onReturnCircleClick }: ReturnCircleProps) => {
    return (
        <CircleBox width={42} height={42} onClick={onReturnCircleClick}>
            <LeftArrowIcon />
        </CircleBox>
    );
};

export default ReturnCircle;
