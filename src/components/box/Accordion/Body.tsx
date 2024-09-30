import React, { useEffect, useRef, useState } from "react";
import styled, { RuleSet } from "styled-components";

const Container = styled.div<{ height: string; css?: RuleSet<object> }>`
    ${({ css }) => css}
    height: ${(props) => props.height};
    overflow: hidden;
    transition: height 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

type BodyProps = {
    isOpen: boolean;
    children: React.ReactNode;
    css?: RuleSet<object>;
};

const Body = ({ isOpen, children, css }: BodyProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (containerRef.current) {
            // 모든 자식 요소의 높이를 합산
            const totalHeight = Array.from(
                containerRef.current.children
            ).reduce((acc, child) => {
                return acc + (child as HTMLElement).offsetHeight;
            }, 0);

            const newHeight = isOpen ? `${totalHeight}px` : "0px";
            setHeight(newHeight);
        }
    }, [isOpen, children]); // children도 의존성 배열에 포함

    return (
        <Container ref={containerRef} height={height} css={css}>
            {children}
        </Container>
    );
};

export default Body;
