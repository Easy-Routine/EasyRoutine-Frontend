import NavigationBottomBar from "components/business/NavigationBottomBar/NavigationBottomBar";
import RoutineRecordTabView from "components/business/RoutineRecordTabView";
import Logo from "components/content/Logo/Logo";
import ROUTES from "constants/routes";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineRecordListPage = () => {
    return (
        <Container>
            <Logo />
            <RoutineRecordTabView />

            <NavigationBottomBar defaultValue={ROUTES.RECORD.LIST.PATH} />
        </Container>
    );
};

export default RoutineRecordListPage;
