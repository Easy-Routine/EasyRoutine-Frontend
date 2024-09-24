import CircleBox from "components/box/CircleBox/CircleBox";
import { ReactComponent as LeftArrowIcon } from "assets/image/left-arrow.svg";

const ReturnCircle = () => {
    return (
        <CircleBox width={42} height={42}>
            <LeftArrowIcon />
        </CircleBox>
    );
};

export default ReturnCircle;
