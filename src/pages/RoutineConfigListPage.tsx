import styled from "styled-components";
import NavigationBottomBar from "components/business/NavigationBottomBar";
import Logo from "components/content/Logo/Logo";
import ROUTES from "constants/routes";
import RoutineConfigCreateFloatingActionButton from "components/business/routine-config/RoutineConfigCreateFloatingActionButton";
import RoutineConfigListView from "components/business/routine-config/RoutineConfigListView";
import PageHeader from "components/content/PageHeader/PageHeader";
// import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import { Suspense } from "react";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigListPage = () => {
    return (
        <Container>
            <PageHeader>
                <Logo />
            </PageHeader>
            <ErrorBoundary>
                <Suspense fallback={"로딩중"}>
                    <RoutineConfigListView />
                </Suspense>
            </ErrorBoundary>

            <NavigationBottomBar defaultValue={ROUTES.CONFIG.LIST.PATH} />
            <ErrorBoundary>
                <Suspense fallback={"로딩중"}>
                    <RoutineConfigCreateFloatingActionButton />
                </Suspense>
            </ErrorBoundary>
        </Container>
    );
};

export default RoutineConfigListPage;
