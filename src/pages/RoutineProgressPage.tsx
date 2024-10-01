import ReturnPageHeader from "components/business/ReturnPageHeader";
import RoutineProgressView from "components/business/RoutineProgressView";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineProgressPage = () => {
    return (
        <Container>
            <ReturnPageHeader pageTitleText="운동 진행" />
            <RoutineProgressView />
        </Container>
    );
};

export default RoutineProgressPage;
