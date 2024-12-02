import Modal from "components/box/Modal/Modal";
import Lottie from "lottie-react";
import loadingAnimation from "assets/image/loading.json";
import React from "react";
import styled from "styled-components";

const LottieContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
`;

const CommonLoading = () => {
    return (
        <Modal>
            <LottieContainer>
                <Lottie
                    animationData={loadingAnimation}
                    loop={true}
                    style={{ width: 35, height: 35 }}
                />
            </LottieContainer>
        </Modal>
    );
};

export default CommonLoading;
