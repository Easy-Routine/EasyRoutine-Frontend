import NavigationBottomBar from "components/business/NavigationBottomBar";
import WorkoutLibraryListView from "components/business/workout-library/WorkoutLibraryListView";
import Logo from "components/content/Logo/Logo";
import PageHeader from "components/content/PageHeader/PageHeader";
import ROUTES from "constants/routes";
import { Suspense } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const WorkoutLibraryPage = () => {
    return (
        <Container>
            <PageHeader>
                <Logo />
            </PageHeader>
            <Suspense fallback="로딩중">
                <WorkoutLibraryListView />
            </Suspense>
            <NavigationBottomBar defaultValue={ROUTES.LIBRARY.PATH} />
        </Container>
    );
};

export default WorkoutLibraryPage;
