import styled from "styled-components";
import NavigationBottomBar from "components/business/NavigationBottomBar/NavigationBottomBar";
import Logo from "components/content/Logo/Logo";
import RoutineConfigAccordionList from "components/business/RoutineConfigAccordionList";
import ROUTES from "constants/routes";
import RoutineConfigFloatingActionButton from "components/business/RoutineConfigFloatingActionButton";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineConfigListPage = () => {
    return (
        <Container>
            <Logo />
            <RoutineConfigAccordionList />
            <NavigationBottomBar defaultValue={ROUTES.CONFIG.LIST.PATH} />
            <RoutineConfigFloatingActionButton />
        </Container>
    );
};

export default RoutineConfigListPage;
