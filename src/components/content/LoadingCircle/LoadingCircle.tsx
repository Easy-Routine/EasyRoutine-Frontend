import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "assets/image/loading.json"; // JSON 파일 경로
import CircleIconBox from "../Confirm/CircleIconBox";

const LoadingCircle = () => {
    return (
        <CircleIconBox>
            <Lottie
                animationData={loadingAnimation}
                loop={true}
                style={{ width: 35, height: 35 }}
            />
        </CircleIconBox>
    );
};

export default LoadingCircle;
