import styled from "styled-components";
import ReturnCircle from "./ReturnCircle";
import PageTitle from "./PageTitle";
import { useEffect, useRef } from "react";

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    height: 65px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.color.background.page};
    z-index: ${({ theme }) => theme.zIndex.header};
`;

type PageHeaderProps = {
    children: React.ReactNode;
};

const PageHeader = ({ children }: PageHeaderProps) => {
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

export default PageHeader;

PageHeader.ReturnCircle = ReturnCircle;
PageHeader.PageTitle = PageTitle;
