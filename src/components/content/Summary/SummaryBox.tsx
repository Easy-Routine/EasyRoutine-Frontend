import moment from "moment";
import React from "react";
import styled from "styled-components";
import "moment-duration-format";

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
    seconds: number;
    weight: number;
};

const SummaryBox = ({ seconds, weight }: SummaryBoxProps) => {
    const formatted = moment.duration(seconds, "seconds").format("h시간m분");

    return (
        <Container>
            <Column>
                <Title>운동 시간</Title>
                <Description>{formatted}</Description>
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
