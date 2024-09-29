import NavigationBottomBar from "components/business/NavigationBottomBar/NavigationBottomBar";
import ROUTES from "constants/routes";
import styled from "styled-components";

const Container = styled.div``;

const WorkoutLibraryPage = () => {
    return (
        <Container>
            라이브러리 페이지
            <NavigationBottomBar defaultValue={ROUTES.LIBRARY.PATH} />
        </Container>
    );
};

export default WorkoutLibraryPage;
