import React from "react";
import styled from "styled-components";
import Chip from "./Chip";

const Container = styled.div`
    width: 100%;
    display: flex;
    overflow-x: scroll;
    gap: 10px;

    &::-webkit-scrollbar {
        display: none; /* 크롬, 사파리에서 스크롤바 숨김 */
    }
`;

type ChipTabProps = {
    children: React.ReactNode;
};

const ChipTab = ({ children }: ChipTabProps) => {
    return <Container>{children}</Container>;
};

export default ChipTab;

ChipTab.Chip = Chip;

// 스타일과 관련된 로직과 도메인관련된 로직을 분리하자
