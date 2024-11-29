import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import RoutineConfigListProgressView from "components/business/routine-config/RoutineConfigOneProgressView";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import PageHeader from "components/content/PageHeader/PageHeader";
import { Suspense } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigListProgressPage = () => {
    return (
        <Container>
            <PageHeader>
                <PageHeader.PageTitle>운동 진행</PageHeader.PageTitle>
            </PageHeader>
            <ErrorBoundary>
                <Suspense fallback={<CommonLoading />}>
                    <RoutineConfigListProgressView />
                </Suspense>
            </ErrorBoundary>
        </Container>
    );
};

export default RoutineConfigListProgressPage;
