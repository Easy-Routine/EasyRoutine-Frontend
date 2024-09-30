import ReturnPageHeader from "components/business/ReturnPageHeader";
import RoutineProgressListView from "components/business/RoutineProgressListView";
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
            <RoutineProgressListView />
        </Container>
    );
};

export default RoutineProgressPage;
