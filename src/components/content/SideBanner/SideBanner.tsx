import { useEffect, useRef } from "react";
import styled from "styled-components";
import LogoDescription from "../LogoDescription/LogoDescription";
import { ReactComponent as PlayStoreIcon } from "assets/image/play-store.svg";
import { ReactComponent as AppleIcon } from "assets/image/apple.svg";

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 274px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;

    display: none; // 기본적으로 숨김

    @media (min-width: 1200px) {
        display: block; // 1024px 이상에서 보임

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }
`;

const ButtonBox = styled.div`
    display: flex;
    width: 100%;
    gap: 5px;
`;

const IntroText = styled.div`
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.text.black};
`;

const Button = styled.div`
    flex: 1;
    height: 46px;
    box-sizing: border-box;
    padding: 10px 20px;
    padding: none;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    border: 1px solid ${({ theme }) => theme.color.gray.light};
    font-size: ${({ theme }) => theme.fontSize.md};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.text.black};
`;

const AppleLogo = styled(AppleIcon)`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;

const PlayStoreLogo = styled(PlayStoreIcon)`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;

const SideBanner = () => {
    const bottomBarRef = useRef<HTMLDivElement>(null);

    const updateSideBannerPosition = () => {
        const wrapElement = document.getElementById("wrap");
        if (wrapElement && bottomBarRef.current) {
            const wrapRect = wrapElement.getBoundingClientRect();
            // bottomBarRef.current.style.width = `${wrapElement.clientWidth}px`;
            bottomBarRef.current.style.left = `${wrapRect.right}px`; // wrap의 left 위치에 맞춤
            // bottomBarRef.current.style.bottom = `0px`; // window의 하단에 맞춤
        }
    };

    useEffect(() => {
        updateSideBannerPosition(); // 초기 위치 설정

        window.addEventListener("resize", updateSideBannerPosition); // 리사이즈 이벤트 리스너 추가
        return () => {
            window.removeEventListener("resize", updateSideBannerPosition); // 클린업 함수로 리스너 제거
        };
    }, []);

    return (
        <Container ref={bottomBarRef}>
            <LogoDescription />
            <IntroText>앱을 다운받아보세요!</IntroText>
            <ButtonBox>
                <Button>
                    <AppleLogo /> 앱 다운로드
                </Button>
                <Button>
                    <PlayStoreLogo /> 앱 다운로드
                </Button>
            </ButtonBox>
        </Container>
    );
};

export default SideBanner;
