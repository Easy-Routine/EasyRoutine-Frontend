import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 81px;
    background-color: ${({ theme }) => theme.color.background.box};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: 10px 60px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-itmes: center;
    box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Divider = styled.div`
    width: 2px;
    height: 90%;
    background-color: ${({ theme }) => theme.color.gray.light};
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const Title = styled.div`
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

const Description = styled.div`
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.color.gray.normal};
`;

type SummaryBoxProps = {
    hour: number;
    minute: number;
    weight: number;
};

const SummaryBox = ({ hour, minute, weight }: SummaryBoxProps) => {
    return (
        <Container>
            <Column>
                <Title>운동 시간</Title>
                <Description>
                    {hour}시간 {minute}분
                </Description>
            </Column>
            <Divider />
            <Column>
                <Title>전체 볼륨</Title>
                <Description>{weight}KG</Description>
            </Column>
        </Container>
    );
};

export default SummaryBox;
