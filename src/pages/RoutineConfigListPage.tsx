import styled from "styled-components";
import NavigationBottomBar from "components/business/NavigationBottomBar";
import Logo from "components/content/Logo/Logo";
import ROUTES from "constants/routes";
import RoutineConfigCreateFloatingActionButton from "components/business/routine-config/RoutineConfigCreateFloatingActionButton";
import RoutineConfigListView from "components/business/routine-config/RoutineConfigListView";
import PageHeader from "components/content/PageHeader/PageHeader";

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
            <RoutineConfigListView />
            <NavigationBottomBar defaultValue={ROUTES.CONFIG.LIST.PATH} />
            <RoutineConfigCreateFloatingActionButton />
        </Container>
    );
};

export default RoutineConfigListPage;
