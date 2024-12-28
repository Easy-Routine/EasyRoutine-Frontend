import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import ReturnPageHeader from "components/business/ReturnPageHeader";
import RoutineRecordDetailView from "components/business/routine-record/RoutineRecordDetailView";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import React, {Suspense} from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineRecordDetailPage = () => {
    return (
        <Container>
            <ReturnPageHeader
                pageTitleText="운동 기록"
                returnText="루틴 기록이 저장되었습니다."
            />
            <ErrorBoundary>
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <CommonLoading />
                        </DefferredComponent>
                    }
                >
                    <RoutineRecordDetailView />
                </Suspense>
            </ErrorBoundary>
        </Container>
    );
};

export default RoutineRecordDetailPage;
