import NavigationBottomBar from "components/business/NavigationBottomBar";
import WorkoutLibraryListView from "components/business/workout-library/WorkoutLibraryListView";
import Logo from "components/content/Logo/Logo";
import ROUTES from "constants/routes";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const WorkoutLibraryPage = () => {
    return (
        <Container>
            <Logo />
            <WorkoutLibraryListView />
            <NavigationBottomBar defaultValue={ROUTES.LIBRARY.PATH} />
        </Container>
    );
};

export default WorkoutLibraryPage;
