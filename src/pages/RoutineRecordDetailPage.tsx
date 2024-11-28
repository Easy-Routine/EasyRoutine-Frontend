import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import ReturnPageHeader from "components/business/ReturnPageHeader";
import RoutineRecordDetailView from "components/business/routine-record/RoutineRecordDetailView";
import React, { Suspense } from "react";
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
            <ErrorBoundary>
                <Suspense fallback={<div>안녕</div>}>
                    <RoutineRecordDetailView />
                </Suspense>
            </ErrorBoundary>
        </Container>
    );
};

export default RoutineRecordDetailPage;
