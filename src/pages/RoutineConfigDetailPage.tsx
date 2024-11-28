import styled from "styled-components";
import RoutineConfigDetailView from "components/business/routine-config/RoutineConfigDetailView";
import ReturnPageHeader from "components/business/ReturnPageHeader";
import WorkoutLibraryListBottomSheet from "components/business/workout-library/WorkoutLibraryListBottomSheet";
import { Suspense } from "react";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import CommonLoading from "components/content/CommonLoading/CommonLoading";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigDetailPage = () => {
    return (
        <Container>
            <ReturnPageHeader pageTitleText="루틴 생성" />
            <ErrorBoundary>
                <Suspense fallback={<CommonLoading />}>
                    <RoutineConfigDetailView />
                </Suspense>
            </ErrorBoundary>

            <ErrorBoundary>
                <WorkoutLibraryListBottomSheet />
            </ErrorBoundary>
        </Container>
    );
};

export default RoutineConfigDetailPage;
