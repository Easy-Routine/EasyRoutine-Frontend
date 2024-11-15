import React from "react";
import styled from "styled-components";

const Container = styled.div<{ isPrimaryLine?: boolean; isGrayLine?: boolean }>`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 22px;
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({ theme, isPrimaryLine }) =>
            isPrimaryLine ? theme.color.primary : ""};
        background-color: ${({ theme, isGrayLine }) =>
            isGrayLine ? theme.color.gray.dark : ""};
        border-radius: inherit; /* 부모의 border-radius를 상속 */
        z-index: 0; /* 뒤에 위치 */
        opacity: 0.2;
    }
    & > * {
        position: relative;
        z-index: 1;
    }
`;

const InputBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

type RowProps = {
    children: React.ReactNode;
    isPrimaryLine?: boolean;
    isGrayLine?: boolean;
};

const Row = ({ children, isPrimaryLine, isGrayLine }: RowProps) => {
    return (
        <Container isPrimaryLine={isPrimaryLine} isGrayLine={isGrayLine}>
            <InputBox>{children}</InputBox>
        </Container>
    );
};

export default Row;
