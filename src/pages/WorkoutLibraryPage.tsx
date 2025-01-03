import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import NavigationBottomBar from "components/business/NavigationBottomBar";
import WorkoutLibraryListView from "components/business/workout-library/WorkoutLibraryListView";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import Logo from "components/content/Logo/Logo";
import PageHeader from "components/content/PageHeader/PageHeader";
import ToolTip from "components/content/ToolTip/ToolTip";
import ROUTES from "constants/routes";
import {Suspense} from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const Flex = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const WorkoutLibraryPage = () => {
    return (
        <Container>
            <PageHeader>
                <Flex>
                    <Logo />
                    <ToolTip
                        text="삭제를 원하시면 2~3초 동안 운동 종목을 길게 눌러주세요."
                        toolTipPosition="right"
                    />
                </Flex>
            </PageHeader>
            <ErrorBoundary>
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <CommonLoading />
                        </DefferredComponent>
                    }
                >
                    <WorkoutLibraryListView />
                </Suspense>
            </ErrorBoundary>

            <NavigationBottomBar defaultValue={ROUTES.LIBRARY.PATH} />
        </Container>
    );
};

export default WorkoutLibraryPage;
