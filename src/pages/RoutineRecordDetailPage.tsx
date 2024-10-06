import ReturnPageHeader from "components/business/ReturnPageHeader";
import RoutineRecordDetailView from "components/business/routine-record/RoutineRecordDetailView";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineRecordDetailPage = () => {
    return (
        <Container>
            <ReturnPageHeader pageTitleText="운동 기록" />
            <RoutineRecordDetailView />
        </Container>
    );
};

export default RoutineRecordDetailPage;
