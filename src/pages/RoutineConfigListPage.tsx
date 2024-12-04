import styled from "styled-components";
import NavigationBottomBar from "components/business/NavigationBottomBar";
import Logo from "components/content/Logo/Logo";
import ROUTES from "constants/routes";
import RoutineConfigCreateFloatingActionButton from "components/business/routine-config/RoutineConfigCreateFloatingActionButton";
import RoutineConfigListView from "components/business/routine-config/RoutineConfigListView";
import PageHeader from "components/content/PageHeader/PageHeader";
import { Suspense } from "react";
import ErrorBoundary from "components/box/ErrorBoundary/ErrorBounday";
import CommonLoading from "components/content/CommonLoading/CommonLoading";
import DefferredComponent from "components/box/DefferedComponent/DefferedComponent";

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
                <Suspense
                    fallback={
                        <DefferredComponent>
                            <DefferredComponent>
                                <CommonLoading />
                            </DefferredComponent>
                        </DefferredComponent>
                    }
                >
                    <RoutineConfigListView />
                    <RoutineConfigCreateFloatingActionButton />
                </Suspense>
            </ErrorBoundary>

            <NavigationBottomBar defaultValue={ROUTES.CONFIG.LIST.PATH} />
        </Container>
    );
};

export default RoutineConfigListPage;
