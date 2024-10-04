import styled from "styled-components";
import NavigationBottomBar from "components/business/NavigationBottomBar/NavigationBottomBar";
import Logo from "components/content/Logo/Logo";
import ROUTES from "constants/routes";
import RoutineConfigFloatingActionButton from "components/business/RoutineConfigFloatingActionButton";
import RoutineConfigListView from "components/business/RoutineConfigListView";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigListPage = () => {
    return (
        <Container>
            <Logo />
            <RoutineConfigListView />
            <NavigationBottomBar defaultValue={ROUTES.CONFIG.LIST.PATH} />
            <RoutineConfigFloatingActionButton />
        </Container>
    );
};

export default RoutineConfigListPage;
