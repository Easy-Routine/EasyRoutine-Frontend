import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
// import RoutineConfigListProgressView from "components/business/routine-config/RoutineConfigOneProgressView";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import PageHeader from "components/content/PageHeader/PageHeader";
import ToolTip from "components/content/ToolTip/ToolTip";
import {Suspense} from "react";
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
                <ToolTip
                    text="하단의 시간을 누르면 휴식타이머 모달을 다시 볼 수 있습니다."
                    toolTipPosition="right"
                />
            </PageHeader>
            <ErrorBoundary>
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <CommonLoading />
                        </DefferredComponent>
                    }
                >
                    {/* <RoutineConfigListProgressView /> */}
                </Suspense>
            </ErrorBoundary>
        </Container>
    );
};

export default RoutineConfigListProgressPage;
