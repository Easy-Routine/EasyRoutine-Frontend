import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 65px;
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    background-color: ${({ theme }) => theme.color.background.box};
    border-top-left-radius: ${({ theme }) => theme.borderRadius.lg};
    border-top-right-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.boxShadow};
`;

type BottomBarProps = {
    children?: React.ReactNode;
};

const BottomBar = ({ children }: BottomBarProps) => {
    const bottomBarRef = useRef<HTMLDivElement>(null);

    const updateBottomBarPosition = () => {
        const wrapElement = document.getElementById("wrap");
        if (wrapElement && bottomBarRef.current) {
            const wrapRect = wrapElement.getBoundingClientRect();
            bottomBarRef.current.style.width = `${wrapElement.clientWidth}px`;
            bottomBarRef.current.style.left = `${wrapRect.left}px`; // wrap의 left 위치에 맞춤
            bottomBarRef.current.style.bottom = `0px`; // window의 하단에 맞춤
        }
    };

    useEffect(() => {
        updateBottomBarPosition(); // 초기 위치 설정

        window.addEventListener("resize", updateBottomBarPosition); // 리사이즈 이벤트 리스너 추가
        return () => {
            window.removeEventListener("resize", updateBottomBarPosition); // 클린업 함수로 리스너 제거
        };
    }, []);

    return <Container ref={bottomBarRef}>{children}</Container>;
};

export default BottomBar;
